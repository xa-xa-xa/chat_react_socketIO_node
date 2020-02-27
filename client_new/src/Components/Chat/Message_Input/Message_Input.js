import React from 'react';

const Message_Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div>
      <div className='flex align-end border rounded-br-lg h-12 absolute inset-x-0 bottom-0 overflow-hidden'>
        <input
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
          className='w-full px-4 outline-none'
          placeholder='type here'
        />
        <button
          onClick={e => sendMessage(e)}
          className='text-3xl text-green-800 hover:text-green-500 border-l-2 border-grey p-2 bg-white hover:bg-green-200'>
          <svg
            className='fill-current  w-8 h-8'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message_Input;
