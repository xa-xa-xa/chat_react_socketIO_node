import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

// const conversation = [];
const MessagesBox = ({ messages, currentUser }) => (
  <ScrollToBottom className='overflow-auto p-1 mb-8 -mt-1'>
    {messages.map((message, idx) => {
      return (
        <Message
          key={idx}
          idx={idx}
          message={message}
          currentUser={currentUser}
        />
      );
    })}
  </ScrollToBottom>
);

export default MessagesBox;
