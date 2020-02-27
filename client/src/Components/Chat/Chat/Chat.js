import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';

import UsersList from '../Users_List/Users_List';
import MessageInput from '../Message_Input/Message_Input';
import MessageBox from '../Messages_Box/Messages-Box';

const Chat = () => {
  const users = useContext(Context).users;

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

export default Chat;
