require('dotenv').config();
const express = require("express");
const app = express();
const proxy = require("./Route/Proxy")

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.ico'));

var limits = require("./Middleware/Limit");
const AuthController = require("./Middleware/Auth");

app.use("/auth", require("./Auth/index"));
app.use("/lmaoo", proxy.lmaoo());
app.use(`/tufanssh`, proxy.tufanssh());

app.use("*", limits.getRateLimit(), limits.getAuthSpeedLimiter(), AuthController.authMiddleware, (req, res) => { res.status(404).json(); })

app.listen(process.env.PORT || 5000);