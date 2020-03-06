import React, { useState } from 'react';
// import io from 'socket.io-client';

// let socket;

// const [Room, setRoom] = useState('');
// const [Name, setName] = useState('');

// const [Message, setMessage] = useState('');
// const [Messages, setMessages] = useState([]);

// const ENDPOINT = 'localhost:5000';

export const context = {
  user: {
    name: 'user-name',
    loggedIn: true,
    room: {
      name: 'user-room-name',
      messages: [],
      lastMessage: ''
    }
  },
  users: [
    { name: 'Mike Jacks', status: 'active' },
    { name: 'Voland', status: 'active' },
    { name: 'Hue Heff', status: 'typing' },
    { name: 'Sam Jones', status: 'down' },
    { name: 'Lyly Rose', status: 'active' },
    { name: 'Monica Lev', status: 'down' }
  ],
  topics: [
    {
      name: 'cats',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'dogs',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'hiking',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'garden',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'stuff',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'movies',
      users: {
        active: [],
        all: []
      },
      messages: []
    },
    {
      name: 'books',
      users: {
        active: [],
        all: []
      },
      messages: []
    }
  ]
};

export const Context = React.createContext(context);
