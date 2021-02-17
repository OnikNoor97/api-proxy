const express = require("express");
const router = express.Router();

var limits = require("../Controller/LimitController");
var AuthController = require("../Controller/AuthController");

router.use("/authenticate", limits.getRateLimit(), limits.getAuthSpeedLimiter(), async (req, res) => {
    var clientId = req.query.clientId;
    var ipAddress = req.header("CF-Connecting-IP");

    if (clientId == undefined || ipAddress == undefined) 
    {
        res.status(400).json(); return;
    }

    if (await AuthController.checkClientId(clientId) == 0) 
    {
        res.status(403).json({ Message: "Client ID not valid" });
    }
    else 
    {
        AuthController.updateIpAddress(ipAddress, clientId) == 0
        ? res.status(200).json({ Message: "Authenticated! You now have access to my websites and APIs!" })
        : res.status(200).json({ Message: "You are already authenticated!" })
    }
})

module.exports = router;