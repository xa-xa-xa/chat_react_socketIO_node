import React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '../../../icons/closeIcon';
import OnlineIcon from '../../../icons/onlineIcon';

const InfoBar = ({ room }) => {
  return (
    <div className='flex flex-row bg-blue-100 shadow-lg '>
      <div
        id='leftInnerContainer'
        className='flex flex-row w-11/12 items-center'>
        <div className='text-gray-700 fill-current w-12 ml-2 p-1'>
          <OnlineIcon />
        </div>
        <h3 className='text-grey-400 text-xl w-full text-center font-bold'>
          {room}
        </h3>
      </div>
      <div
        id='rightInnerContainer'
        className='flex w-1/12 items-center justify-center'>
        <Link to='/'>
          <div className='text-red-800 hover:text-red-600 fill-current ease-in w-8 p-1'>
            <CloseIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
