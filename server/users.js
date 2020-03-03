const users = [];

//
const addUser = ({ id, name, room }) => {
  // unify name and room
  name.trim().toLowerCase();
  room.trim().toLowerCase();

  const existingUser = users.find(
    user => user.room === room && user.name === name
  );
  if (existingUser) return { error: 'This username is taken!' };

  const newUser = { id, name, room };
  users.push(newUser);
  return { newUser };
};

//
const getUser = id => users.find(user => user.id === id);
//
const removeUser = id => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    // removing user from users
    return users.splice(index, 1)[0];
  }
};

//
const getUsersInRoom = room => users.filter(user => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
