import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Join = ({ chatTopic, openModal, loggedIn = true, createNewTopic }) => {
  const [showNewTopic, setShowNewTopic] = useState(createNewTopic);
  const [show, setShow] = useState(openModal);

  const [Room, setRoom] = useState('');
  const [Name, setName] = useState('Alex');

  const hide = () => {
    setShow(false);
    setShowNewTopic(false);
  };

  return (
    <Fragment>
      <Rodal
        visible={show}
        onClose={hide}
        customMaskStyles={{ opacity: 1, marginTop: '2rem' }}
        className='fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
        <div>
          <div className='bg-white flex flex-col px-4 pt-5 pb-10 sm:p-6 sm:pb-4'>
            <h3 className='text-xl leading-6 font-medium text-gray-900 text-center'>
              {`Join '${chatTopic}' conversation?`}{' '}
            </h3>
          </div>
          <div className='bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row justify-center'>
            <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
              {loggedIn && (
                <button
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5'>
                  <Link to={`/chat?name=${Name}&room=${chatTopic}`}>Join</Link>
                </button>
              )}
            </span>
            {!loggedIn && (
              <span className='mt-3 flex sm:mt-0 sm:w-auto items-center'>
                <Link
                  to='/login'
                  type='button'
                  className='inline-flex justify-center w-full rounded-md border border-teal-300 px-4 py-2 bg-teal-100 text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5'>
                  Login
                </Link>
                <span className='mx-2 self-center'>or</span>
                <Link to='/register' className='text-indigo-700 font-bold'>
                  register
                </Link>
              </span>
            )}
          </div>
        </div>
      </Rodal>

      <Rodal
        visible={showNewTopic}
        onClose={hide}
        customMaskStyles={{ opacity: 1, marginTop: '2rem' }}
        className='flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Create new topic
          </h2>
          <p className='mt-2 text-center text-sm leading-5 text-gray-600 max-w'>
            {!loggedIn && (
              <Link
                to='/login'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
                sign in to
              </Link>
            )}
          </p>
          <form className='mt-4 mb-4' action='#' method='POST'>
            <div className='rounded-md shadow-sm'>
              <input
                onChange={e => setName(e.target.value)}
                aria-label='topic'
                name='topic'
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 text-center mb-2'
                placeholder='type user name'
              />
              <input
                onChange={e => setRoom(e.target.value)}
                aria-label='topic'
                name='topic'
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 text-center'
                placeholder='type topic that you want to start'
              />
              <div className='mt-4'>
                <Link
                  onClick={e => (!Name || !Room ? e.preventDefault() : null)}
                  to={`/chat?name=${Name}&room=${Room}`}>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
                    <span className='absolute left-0 inset-y pl-3'></span>
                    Create
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Rodal>
    </Fragment>
  );
};

export default Join;
