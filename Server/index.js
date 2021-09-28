const express = require("express");
const app = express();

const LogController = require("./Controller/LogController");
const APIError = require("./Core/APIError");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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