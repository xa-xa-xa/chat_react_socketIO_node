import React from 'react';

const Message = ({ user, createdAt, text }) => {
  // const { user, text, createdAt } = conversation.message;
  return (
    <div className='mb-4'>
      <img
        className='inline h-4 sm:h-4 w-4 sm:w-4 ml-2 rounded-full'
        src={`https://api.adorable.io/avatars/128/${user}@adorable.png`}
        alt='name'
      />
      <div className='inline text-gray-700 text-sm'>{user}</div>
      <br />
      <div className='w-auto min-w-8 text-base inline-flex mt-1 bg-red-300 rounded-full border px-2 py-1'>
        {text}
      </div>
      <div className='text-gray-500 text-xs'>{createdAt}</div>
    </div>
  );
};

export default Message;
