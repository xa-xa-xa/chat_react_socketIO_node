import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/Context';

import querystring from 'query-string';
import io from 'socket.io-client';

import UsersList from '../Users_List/Users_List';
import MessageInput from '../Message_Input/Message_Input';
import MessageBox from '../Messages_Box/Messages-Box';
import InfoBar from '../Info_Bar/InfoBar';
// import User from '../../User/User';

let socket;

const Conversation = ({ location }) => {
  // const users = useContext(Context).users;
  //
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = 'localhost:5000';

  //Joining/disconnecting user to/from the conversation
  useEffect(() => {
    const { name, room } = querystring.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room.toUpperCase());

    socket.emit('join', { name, room }, () => {
      // alert(error);
    });
    return () => {
      // cleanup
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  //* Messages handling
  useEffect(() => {
    // effect
    socket.on('message', message => {
      setConversation([...conversation, message]);
    });

    socket.on('roomData', room => {
      setUsers(room.users);
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [conversation]);

  const sendMessage = e => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='flex flex-row h-full rounded-lg overflow-hidden border-2'>
      <UsersList users={users} />
      <div className='flex relative flex-col bg-white rounded-r-lg w-1/2 sm:w-2/3 lg:w-3/4'>
        <InfoBar room={room} />
        <MessageBox messages={conversation} currentUser={name} />
        <MessageInput
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Conversation;
