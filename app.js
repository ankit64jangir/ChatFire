const express = require('express');
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Set static folders
app.use(express.static(path.join(__dirname, "public")));

// Run when client connect
io.on("connection", socket => {
  console.log("New WS Connection...");
});

app.get('/', (req, res) => res.send('Hello World!'))


const PORT = 3000 || process.env.PORT;


server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
