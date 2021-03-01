const express = require("express");
const app = express();
const auth = require("./Auth");
require('dotenv').config();

const httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer(this.options);

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));

var limits = require("./Controller/LimitController");
const AuthController = require("./Controller/AuthController");

app.use("/auth", require("./Auth/index"));

app.use("/lmaoo", limits.getRateLimit(), limits.getAuthSpeedLimiter(), AuthController.authMiddleware, async (req, res) =>
{
    if (req.url == "/") res.redirect("/lmaoo/Home/index.php")
    
    proxy.web(req, res, { 
        target: `http://localhost/lmaoo/src` 
    });
})

app.use(`/${process.env.SHELLINABOX_URL}`, AuthController.authMiddleware, (req, res) =>
{
    proxy.web(req, res, { 
        target: `http://${process.env.SHELLINABOX}` 
    });
})

app.use("*", limits.getRateLimit(), limits.getAuthSpeedLimiter(), AuthController.authMiddleware, (req, res) => { res.status(404).json(); })

app.listen(process.env.PORT || 5000);