const express = require("express");
const app = express();
const auth = require("./Auth");

const httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer(this.options);

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));

var limits = require("./Controller/LimitController");
const AuthController = require("./Controller/AuthController");

require('dotenv').config();

app.use("/auth", require("./Auth/index"));

app.use("/lmaoo", limits.getRateLimit(), limits.getAuthSpeedLimiter(), async (req, res) =>
{
    var ip = req.header("CF-Connecting-IP");

    if (req.url == "/") res.redirect("/lmaoo/Home/index.php")

    await AuthController.checkIPAddress(ip) == 0
    ? res.status(401).json()
    : proxy.web(req, res, { target: `http://localhost/lmaoo/src` });
    
})

app.use(`/${process.env.SHELLINABOX_URL}`, async (req, res) =>
{
    var ip = req.header("CF-Connecting-IP");

    if (req.url == "/") res.redirect("/lmaoo/Home/index.php")

    await AuthController.checkIPAddress(ip) == 0
    ? res.status(401).json()
    : proxy.web(req, res, { target: `http://${process.env.SHELLINABOX}` });
})

app.use("/", limits.getRateLimit(), limits.getAuthSpeedLimiter(), (req, res) => { res.status(404).json(); })

app.listen(process.env.PORT || 5000);