const socket = io.connect("http://localhost:3000");

socket.on("message", () => { window.location.reload();});