require('dotenv').config();
const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

if (process.env.DEV_MODE)
{
    var server = process.env.DEV_SERVER;
    var dbUsername = process.env.DEV_DB_USERNAME;
    var dbPassword = process.env.DEV_DB_PASSWORD;
    var table = process.env.DEV_DB_TABLE;
}
else
{
    var server = process.env.PRODUCTION_SERVER;
    var dbUsername = process.env.PRODUCTION_DB_USERNAME;
    var dbPassword = process.env.PRODUCTION_DB_PASSWORD;
    var table = process.env.PRODUCTION_DB_TABLE;
}

async function checkClientId(clientId)
{
    var sql = "SELECT clientId FROM client WHERE clientId = ?";

    const pool = mysql.createConnection({ host: server, user: dbUsername, password: dbPassword, database: table });
    const promisePool = await pool.promise();
    let [rows, fields] = await promisePool.query(sql, [clientId]);
    pool.end();

    return rows.length;
}

async function updateIpAddress(ip, clientId)
{
    var sql = "UPDATE client SET ipAddress = ? WHERE clientId = ?";

    const pool = mysql.createConnection({ host: server, user: dbUsername, password: dbPassword, database: table });
    const promisePool = pool.promise();
    let [rows, fields] = await promisePool.query(sql, [ip, clientId]);
    pool.end();

    return rows.changedRows;
}

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 30,
    keyGenerator: (req) => { return req.header("CF-Connecting-IP"); },
    handler: (req, res) => res.status(429).json({ Message: "Too Many Requests!" })
});

const authSpeedLimiter = slowDown({
    windowMs: 30 * 60 * 1000,
    delayAfter: 2,
    delayMs: 1000,
    keyGenerator: (req) => { return req.header("CF-Connecting-IP"); }
});

router.use("/authenticate", limiter, authSpeedLimiter, (req, res) =>
{
    var clientId = req.query.clientId;
    var ipAddress = req.header("CF-Connecting-IP");

    if (clientId == undefined || ipAddress == undefined) res.status(400).json();
    else
    {
        checkClientId(clientId).then(rep =>
        {
            if (rep == 0) res.json(403).json({ Message: "Client ID not valid" })
            else
            {
                updateIpAddress(ipAddress, clientId).then(resp => 
                {
                    resp == 1 ?
                        res.status(200).json({ Message: "Authenticated! You now have access to my websites and APIs!" })
                        : res.status(200).json({ Message: "You are already authenticated!" })
                })
            }
        });
    }
})

module.exports = router;
module.exports.limiter = limiter;
module.exports.authSpeedLimiter = authSpeedLimiter;

module.exports.checkIPAddress = async function checkIPAddress(ip)
{
    var sql = "SELECT ipAddress FROM client WHERE ipAddress = ?";

    const pool = mysql.createConnection({ host: server, user: dbUsername, password: dbPassword, database: table, connectionLimit: 10 });
    const promisePool = await pool.promise();
    let [rows, fields] = await promisePool.query(sql, [ip]);
    pool.end();

    return rows.length;
};