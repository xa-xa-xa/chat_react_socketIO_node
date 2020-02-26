import React from 'react';

export const context = {
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
  ]
};

export const Context = React.createContext(context);
