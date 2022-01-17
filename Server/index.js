const express = require("express");
const app = express();

const LogController = require("./Controller/LogController");
const ProxyController = require("./Controller/ProxyController");
const APIError = require("./Core/APIError");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Get Logs
app.get("/admin/log", async (req, res, next) => await LogController.readLog(req, res, next));

// Proxy CRUD
app.post("/admin/proxy", async (req, res, next) => await ProxyController.createProxy(req, res, next))
app.get("/admin/proxy", async (req, res, next) => await ProxyController.readProxy(req, res, next))
app.put("/admin/proxy/:proxyId", async (req, res, next) => await ProxyController.updateProxy(req, res, next))
app.delete("/admin/proxy/:proxyId", async (req, res, next) => await ProxyController.deleteProxy(req, res, next))

// Log everything that comes in 
app.use("*", async (req, res, next) => await LogController.createLog(req, res, next));

// Apply Proxy
app.use("/proxy/:endpoint", async (req, res, next) => await ProxyController.applyProxy(req, res, next))

// // Handling 404s 
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