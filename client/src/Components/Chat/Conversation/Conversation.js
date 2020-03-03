import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/Context';

import querystring from 'query-string';
import io from 'socket.io-client';

import UsersList from '../Users_List/Users_List';
import MessageInput from '../Message_Input/Message_Input';
import MessageBox from '../Messages_Box/Messages-Box';

let socket;

const Conversation = ({ location }) => {
  const users = useContext(Context).users;
  //
  const [Room, setRoom] = useState('');
  const [Name, setName] = useState('');
  const ENDPOINT = 'localhost:5000';

  //
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    console.log(name, room, socket);

    socket.emit('join', { name, room }, () => {
      // alert(error);
    });
    return () => {
      // cleanup
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return (
    <div className='flex flex-row h-full rounded-lg overflow-hidden'>
      <UsersList users={users} />
      <div className='flex relative flex-col bg-white rounded-r-lg overflow-hidden w-1/2 sm:w-2/3 lg:w-3/4'>
        <MessageBox />
        <MessageInput />
      </div>
    </div>
  );
};

export default Conversation;
