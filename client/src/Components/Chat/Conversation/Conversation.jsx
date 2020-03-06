import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/Context';

import querystring from 'query-string';
import io from 'socket.io-client';

import UsersList from '../Users_List/Users_List';
import MessageInput from '../Message_Input/Message_Input';
import MessageBox from '../Messages_Box/Messages-Box';
import InfoBar from '../Info_Bar/InfoBar';

let socket;

const Conversation = ({ location }) => {
  const users = useContext(Context).users;
  //
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

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

    return () => {
      // cleanup
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
        <MessageBox messages={conversation} />
        {/* input */}
        <div>
          <MessageInput
            message={message}
            sendMessage={sendMessage}
            setMessage={setMessage}
          />
          {/* <div className='flex align-end border rounded-br-lg h-12 absolute inset-x-0 bottom-0 overflow-hidden'>
            <input
              type='text'
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
              className='w-full px-4 outline-none'
              placeholder='type here'
            />
            <button
              onClick={event => sendMessage(message)}
              className='text-3xl text-green-800 hover:text-green-500 border-l-2 border-grey p-2 bg-white hover:bg-green-200'>
              <svg
                className='fill-current  w-8 h-8'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
