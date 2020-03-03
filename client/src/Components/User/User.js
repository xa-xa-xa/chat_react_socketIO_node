import React from 'react';

const User = ({ name, avatar, lastMessage, lastSignIn, status }) => {
  const statusColor = status => {
    switch (status) {
      case 'active':
        return 'green';
      case 'down':
        return 'red';
      case 'typing':
        return 'orange';
      default:
        return 'black';
    }
  };

  return (
    <div className='flex items-center hover:bg-blue-500 rounded-l cursor-pointer antialiased'>
      <img
        className='h-8 sm:h-10 w-8 sm:w-10 ml-2 rounded-full'
        src={avatar}
        alt={name}
      />
      <span
        className={`bg-${statusColor(
          status
        )}-400 rounded-full block w-2 h-2 -mr-2 -mt-8`}
      />
      <div className='ml-2 sm:ml-4 flex-1 border-b border-grey-lighter py-2 sm:py-4'>
        <div className='flex sm:flex-row flex-col items-bottom justify-between'>
          <p className='text-gray-200 text-sm sm:text-base'>{name}</p>
          <p className='text-xs text-gray-400'>{lastSignIn}</p>
        </div>
        <p className='text-gray-800 sm:mt-2 text-xs'>{lastMessage}</p>
      </div>
    </div>
  );
};

export default User;
