import React from 'react';

const Navbar = () => {
  return (
    <div className='absolute stick flex flex-row w-full h-6 bg-teal-800 text-white justify-around shadow-lg'>
      <div className='ml-2'>RealTime Chat</div>
      <div className='text-teal-200'>Current topic:</div>
      <div className='text-teal-200'>Login</div>
      <div className='text-teal-200'>menu</div>
    </div>
  );
};

export default Navbar;
