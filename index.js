const express = require("express");
const app = express();
const auth = require("./Auth");
const httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer(this.options);
require('dotenv').config();

app.use("/lmaooApi", require("./LmaooAPI/controller"));
app.use("/auth", require("./Auth/index"));

app.use("/lmaoo", auth.limiter, auth.authSpeedLimiter, (req, res) =>
{
    var ip = req.header("CF-Connecting-IP");
    auth.checkIPAddress(ip).then(check =>
    {
        if (!check == 0) res.status(401).json();
        else
        {
            proxy.web(req, res, { target: `http://localhost/lmaoo/src` })
        }
    })
})

app.use(`/${process.env.SHELLINABOX_URL}`, (req, res) =>
{
    var ip = req.header("CF-Connecting-IP");
    auth.checkIPAddress(ip).then(check =>
    {
        if (check == 0) res.status(401).json();
        else
        {
            proxy.web(req, res, { target: `http://${process.env.SHELLINABOX}` })
        }
    })
})

app.use("/", auth.limiter, auth.authSpeedLimiter, (req, res) => { res.status(404).json(); })

const PORT = process.env.PORT || 5000
app.listen(PORT);