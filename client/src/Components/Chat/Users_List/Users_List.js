import React from 'react';
import Search from '../../Search/Search';
import User from '../../User/User';

const UsersList = ({ users }) => {
  // console.log(users);
  const lastMessage = 'Hello there';
  const lastSingIn = '12:55 pm';
  return (
    <div className='flex flex-col bg-blue-700 w-1/2 sm:w-1/3 lg:w-1/4  h-full  rounded-l-lg'>
      <Search />
      <div className='px-1 py-2 overflow-hidden overflow-y-auto'>
        <ul>
          {users.length &&
            users.map((user, idx) => (
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
