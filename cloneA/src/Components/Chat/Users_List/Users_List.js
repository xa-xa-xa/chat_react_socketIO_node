import React, { useState } from 'react';
import Search from '../../Search/Search';
import User from '../../User/User';

const UsersList = ({ users }) => {
  const avatar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5';
  const lastMessage = 'Hello there';
  const lastSingIn = '12:55 pm';
  const [Users, setUsers] = useState(users);
  return (
    <div className='flex flex-col bg-blue-700 w-1/2 sm:w-1/3 lg:w-1/4  h-full  rounded-l-lg'>
      <Search />
      <div className='px-1 py-2 overflow-hidden overflow-y-auto'>
        <ul>
          {Users.map((user, idx) => (
            <li key={idx}>
              <User
                name={user.name}
                status={user.status}
                avatar={`https://api.adorable.io/avatars/128/${user.name}@adorable.png`}
                lastMessage={lastMessage}
                lastSignIn={lastSingIn}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
