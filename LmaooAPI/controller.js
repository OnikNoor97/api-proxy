require('dotenv').config();
const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");
const auth = require("../Auth");
var proxy = httpProxy.createProxyServer(this.options);

if (process.env.DEV_MODE) {
    var env = process.env.DEV_ENV;
    var server = process.env.DEV_SERVER;
}
else {
    var env = process.env.MASTER_ENV;
    var server = process.env.PRODUCTION_SERVER;
}

const userControllerURL = `http://${server}/Workstation/${env}/lmaoo/User/userController.php`
const projectControllerURL = `http://${server}/Workstation/${env}/lmaoo/Project/projectController.php`
const ticketControllerURL = `http://${server}/Workstation/${env}/lmaoo/Ticket/ticketController.php`
const adminControllerURL = `http://${server}/Workstation/${env}/lmaoo/Admin/adminController.php`

router.use("/User", auth.limiter, auth.authSpeedLimiter, (req, res) => {
    res.status(400).json({ message: "This method has not been implemented yet" })
});

router.use("/Ticket", auth.limiter, auth.authSpeedLimiter, (req, res) => {
    res.status(400).json({ message: "This method has not been implemented yet" })
})

router.use("/User", auth.limiter, auth.authSpeedLimiter, (req, res) => {
    res.status(400).json({ message: "This method has not been implemented yet" })
})

module.exports = router;