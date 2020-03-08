const express = require('express');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');

const { getUser, getUsersInRoom, addUser, removeUser } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
app.use(cors);

// Socket
const io = socket(server);

io.on('connection', socket => {
  // console.log('we have new socket connection');

  //* join user to conversation
  socket.on('join', ({ name, room }, callback) => {
    console.log('name:', name, '; room:', room);
    //add user
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) {
      callback(error);
    }

    // notify user and others
    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to the "${user.room}" chat.`
    });

    socket.broadcast.to(user.room).emit('message', {
      user: 'admin',
      text: `${user.name}, has join the conversation.`
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    //join
    socket.join(user.room);

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    callback();
  });

  //* sending messages
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  //disconnect
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name}, had left...`
      });
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });
    }
  });
});

//
app.use(router);

server.listen(PORT, console.log('### Server is running on port:' + PORT));
