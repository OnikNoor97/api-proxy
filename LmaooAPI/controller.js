require('dotenv').config();
const express = require("express");
const router = express.Router();
const httpProxy = require("http-proxy");
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

router.use("/User", (req, res) => {
    if (req.headers["clientid"] == null || req.headers["clientid"]  == undefined) 
    {
        res.status(400).json()
    }
    // else if (req.headers.authorization != "cojL6fOhdbO/rLg2JEWCng==") // Random one made for testing purposes
    // {
    //     res.status(401).json({ message: "Not Authorized" })
    // }
    else 
    {
        proxy.web(req, res, { target: userControllerURL })
    }
});

router.use("/Ticket", (req, res) => {
    res.status(400).json({ message: "This method has not been implemented yet" })
})

router.use("/User", (req, res) => {
    res.status(400).json({ message: "This method has not been implemented yet" })
})

module.exports = router;