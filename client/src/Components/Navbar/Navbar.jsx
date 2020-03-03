import React from 'react';
import MessageBubbles from '../../icons/messageBubbles';

const Navbar = () => {
  return (
    <div className='flex flex-row w-full h-10 bg-teal-800 text-white items-center shadow-lg'>
      <div className='ml-4'>RealTime Chat</div>
      <MessageBubbles />
      <div className='flex w-2/3 justify-around'>
        <div className='text-teal-200'>Current topic:</div>
        <div className='text-teal-200'>Login</div>
        <div className='text-teal-200'>menu</div>
      </div>
    </div>
  );
};

export default Navbar;
