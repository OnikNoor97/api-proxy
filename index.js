const express = require("express");
const app = express();

app.use("/LmaooApi", require("./LmaooAPI/controller"));

app.use("/", (req, res) => res.status(404).json());

const PORT = process.env.PORT || 5000
app.listen(PORT);