import React from 'react';

export const context = {
  user: {
    name: '',
    loggedIn: true
  },
  users: [
    { name: 'Mike Jacks', status: 'active' },
    { name: 'Voland', status: 'active' },
    { name: 'Hue Heff', status: 'typing' },
    { name: 'Sam Jones', status: 'down' },
    {
      name: 'Lyly Rose',

      status: 'active'
    },
    { name: 'Monica Lev', status: 'down' }
  ],
  topics: ['cats', 'dogs', 'hiking', 'cycling', 'Jokes', 'Movies']
};

export const Context = React.createContext(context);
