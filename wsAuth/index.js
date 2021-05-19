const express = require("express");
const router = express.Router();
const puppeteer = require('puppeteer');

const dbController = require("../Controller/DatabaseController");
let db = new dbController("wsAuth");

const io = require("../Controller/SocketioController");
const wsAuth = require("../Controller/WsAuthController");

io.on("connection", socket => {
    socket.on("message", async message => {
        var query = "UPDATE session SET allowedAccess = 1 WHERE sessionToken = ?"
        var parameter = ["bbc4ced2-2d35-49eb-85c3-ed8753651b46"];
        let result = await db.InsertUpdateQuery(query, parameter);
        io.emit("message", result);
    }); 
});

async function middleware(req, res, next)
{
    var query = "SELECT * FROM session WHERE sessionToken = ?"
    var parameter = ["bbc4ced2-2d35-49eb-85c3-ed8753651b46"];
    let result = await db.SelectQuery(query, parameter);
    let { allowedAccess } = result[0];
    
    allowedAccess == 0 ? res.render("awaitConfirmation.html") : next();
}

router.post("/ws", async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:5000/wsAuth/session/sdsd");
    await page.click("#btn");
    res.status(200).json({ Message: "Working correctly" })
});

router.use("/access", middleware, (req, res) => { res.render("success.html"); })
router.use("/session/:sessionId", (req, res) => { res.render("button.html"); });

module.exports = router;