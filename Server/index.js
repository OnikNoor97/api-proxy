const express = require("express");
const app = express();
require('dotenv').config()

app.get("/", (req, res) => {
    console.log("Hello World");
    res.status(200).json({ Message : "Hello World"})
});

app.listen(5000);