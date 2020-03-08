import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

// const conversation = [];
const MessagesBox = ({ messages, currentUser }) => (
  <ScrollToBottom className='overflow-auto'>
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
