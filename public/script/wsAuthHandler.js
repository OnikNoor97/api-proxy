const socket = io.connect("http://localhost:3000");

document.getElementById("btn").addEventListener("click", (e) => {
socket.emit('message', "true");
});
