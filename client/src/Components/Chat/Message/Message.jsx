import React from 'react';

const Message = ({ message, currentUser }) => {
  let isSentByCurrentUser = false;
  // let userTrimmedName;

  const { user, text } = message;

  if (user === currentUser) isSentByCurrentUser = true;

  return isSentByCurrentUser ? (
    <div className='flex flex-col mb-4 items-end'>
      <div className='text-gray-500 text-xs mr-12'>createdAt</div>
      <div className='mr-1'>
        <div className='z-10 overflow-scroll inline-block w-auto mt-1 bg-indigo-300 rounded-t-lg rounded-bl-lg px-4 py-1 mr-2'>
          {text}
        </div>
        <div className='z-10 mr-2 -mt-4 ml-auto bg-indigo-300 w-6 h-6'></div>
        <div className='z-0 mr-2 -mt-6 ml-auto bg-white w-8 h-8 rounded-tr-full '></div>
      </div>
      <div className='-mt-2 mr-1'>
        <span className='text-gray-700 text-sm ml-2'>{user}</span>
        <img
          className='inline-flex h-4 sm:h-4 w-4 sm:w-4 ml-2 rounded-full'
          src={`https://api.adorable.io/avatars/128/${user}@adorable.png`}
          alt='name'
        />
      </div>
    </div>
  ) : (
    <div className='flex flex-col mb-4 items-start'>
      <div className='text-gray-500 text-xs ml-4'> createdAt </div>
      <div className='ml-2'>
        <div className='z-10 overflow-scroll inline-block w-auto mt-1 bg-gray-300 rounded-t-lg rounded-br-lg px-4 py-1 mr-2'>
          {text}
        </div>
        <div className='z-10 mr-2 -mt-4 bg-gray-300 w-4 h-6'></div>
        <div className='z-0 mr-2 -mt-4 ml-0 bg-white w-4 h-4 rounded-tl-full '></div>
      </div>
      <span className='-mt-1 -ml-2'>
        <img
          className='inline-flex h-4 sm:h-4 w-4 sm:w-4 ml-2 rounded-full'
          src={`https://api.adorable.io/avatars/128/${user}@adorable.png`}
          alt='name'
        />{' '}
        <span className='text-gray-700 text-sm ml-2'> {user} </span>
      </span>
    </div>
  );
};

export default Message;
