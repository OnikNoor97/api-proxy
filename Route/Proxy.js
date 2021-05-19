const express = require("express");
const router = express.Router();

const auth = require("../Middleware/Auth")
const limit = require("../Middleware/Limit")

const httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer(this.options);

module.exports = class Proxy {
    static lmaoo() {
        return router.get("/", limit.getRateLimit(), limit.getAuthSpeedLimiter(), auth.authMiddleware, (req, res) => {
            proxy.web(req, res, { target: `http://localhost/lmaoo/src` });
        })
    }

    static tufanssh() {
        return router.get("/", auth.authMiddleware, (req, res) => {
            proxy.web(req, res, { target: `http://${process.env.SHELLINABOX}` });
        })
    }
}