const http = require("http");
const server = http.createServer();
const io = require("socket.io")( server, { cors: { origin: "*", methods: ["GET", "POST"]}});
server.listen(3000);
module.exports = io;