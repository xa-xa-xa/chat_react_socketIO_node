import React from 'react';
import { Link } from 'react-router-dom';

const ChatTopic = ({ name, topic, users }) => {
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-xs sm:text-sm'>
        <div className='flex items-center'>
          <div className='ml-2'>
            <Link
              to={`chat/${topic}`}
              className='text-gray-900 whitespace-no-wrap font-bold'>
              {topic}
            </Link>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm overflow-x-auto'>
        <div className='flex pl-2'>
          {users.map((user, idx) => {
            return (
              <div
                className='h-6 w-6 -ml-2 cursor-pointer relative text-transparent text-xs hover:text-teal-500'
                key={idx}>
                <img
                  className='rounded-full border border-white shadow-solid hover:border-teal-500'
                  src={`https://api.adorable.io/avatars/128/${user.name}@adorable.png`}
                  alt={users.name}
                />
                <span className='absolute h-2 w-10 -mt-7 text-center'>
                  {user.name}
                </span>
              </div>
            );
          })}
          ...
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Jan 21, 2020</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          />
          <span className='relative'>Active</span>
        </span>
      </td>
    </tr>
  );
};

export default ChatTopic;

//
