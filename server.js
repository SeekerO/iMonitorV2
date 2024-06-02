import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

let users = {};

io.on('connection', (socket) => {
  console.log('a user connected');

  // Handle user joining
  socket.on('user joined', (username) => {
    users[socket.id] = username;
    io.emit('user connected', { id: socket.id, username });
  });

  // Handle user sending a message
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('user disconnected', { id: socket.id, username });
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
