const express = require("express");
const app = express();

const LogController = require("./Controller/LogController");
const APIError = require("./Core/APIError");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Simple check to confirm Server side is working correctly
app.get("/", (req, res) => res.status(200).json({ Message: "Server is working correctly" }));

// Log request coming in 
app.use("*", async (req, res, next) => await LogController.createLog(req, res, next));

// Get Logs from Server
app.get("/admin/log", async (req, res, next) => await LogController.readLog(req, res, next));

// Handling 404s 
app.use("*", (req, res, next) => {
    return next(APIError.notFound());
})

// Error handling
app.use((err, req, res, next) => {

    if (err instanceof APIError) return res.status(err.code).json({ Message: err.message });   

    console.error(err);
    res.status(500).json({ Message : "Something went wrong"})
})

app.listen(5000);