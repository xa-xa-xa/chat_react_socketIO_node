import React from 'react';
import Message from '../Message/Message';

// const conversation = [];
const MessagesBox = props => {
  return (
    <div className='bg-white h-full rounded-tr-lg border-2 '>
      {/* {conversation.map((msg, idx) => { */}
      <Message text={'Hi!'} user={'Alex'} createdAt={'10:35pm, today'} />
      <Message
        text={'Hello :-) !!!'}
        user={'Ira'}
        createdAt={'6:45pm, yesterday'}
      />
      {/* })} */}
    </div>
  );
};

export default MessagesBox;
