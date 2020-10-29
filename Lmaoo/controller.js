const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");

var proxy = httpProxy.createProxyServer(this.options);


router.use("/User", (req, res) =>
{
    if (req.headers.authorization != "cojL6fOhdbO/rLg2JEWCng==") // Random one made for testing purposes
    {
        res.status(403).json({message: "Seems like your Access Token has expired, logout and login again!"})
    }
    else
    {
        proxy.web(req, res, { target: "http://localhost/www/MessAround/APITesting/index.php" })
    }

});

module.exports = router;