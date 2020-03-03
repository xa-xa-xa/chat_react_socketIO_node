const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);

// Socket
const io = socket(server);
io.on('connection', socket => {
  console.log('we have new socket connection');
  socket.on('join', ({ name, room }, callback) => {
    console.log('name:', name, '; room:', room);

    // const error = true;

    // if (error) {
    //   callback({ error: '! error' });
    // }
  });

  //disconnect
  socket.on('disconnect', () => console.log('user had left!'));
});

//
app.use(router);

server.listen(PORT, console.log('### Server is running on port:' + PORT));
