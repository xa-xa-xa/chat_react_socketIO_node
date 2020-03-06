import React from 'react';
import Message from '../Message/Message';

// const conversation = [];
const MessagesBox = ({ messages }) => {
  return (
    <div className='bg-white h-full p-2 overflow-scroll'>
      {messages.map((message, idx) => {
        return (
          <Message
            key={idx}
            text={message.text}
            user={message.user}
            createdAt={'10:35pm, today'}
          />
        );
      })}
    </div>
  );
};

export default MessagesBox;
