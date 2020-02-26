import React, { useState, useContext } from 'react';
import UsersList from '../Users_List/Users_List';
import ChatTopic from '../Chat_Topic/Chat_Topic';
import { Context } from '../../../Context/Context';

const ChatList = () => {
  const initialState = ['cats', 'dogs', 'hiking', 'cycling', 'Jokes', 'Movies'];
  const users = useContext(Context).users;

  const [topics, setTopics] = useState(initialState);

  return (
    <div className='flex flex-row h-full'>
      <UsersList users={users} />

      <div className='flex relative flex-col bg-white  rounded-r-lg overflow-hidden w-1/2 sm:w-2/3 lg:w-3/4'>
        <div>
          <table className='leading-normal w-full'>
            <thead>
              <tr>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  Topic
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  Participants
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  Created at
                </th>
                <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, idx) => (
                <ChatTopic users={users} topic={topic} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
        <div className='absolute inset-x-0 bottom-0  px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between align-bottom	'>
          <span className='text-xs xs:text-sm text-gray-900'>
            Showing 1 to 1 of 10 Entries
          </span>
          <div className='inline-flex mt-2 xs:mt-0'>
            <button className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l'>
              Prev
            </button>
            <button className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
