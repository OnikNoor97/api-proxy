const express = require("express");
const LogController = require("./Controller/LogController");
const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", async (req, res) => {
    let logs = await new LogController().readLog(req);
    res.status(200).json(logs);
});

app.listen(5000);