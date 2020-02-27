import React from 'react';

const Login_Page = () => {
  return (
    <div className='min-h-full flex items-center justify-center align-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full'>
        <div className='flex flex-col items-center'>
          <svg
            className='w-1/3 h-1/3 fill-current text-teal-900 '
            xmlns='http://www.w3.org/2000/svg'
            x='0'
            y='0'
            enableBackground='new 0 0 455 455'
            version='1.1'
            viewBox='0 0 455 455'
            xmlSpace='preserve'>
            <path d='M419.967 162.004c-21.894-21.728-52.521-37.201-86.24-43.57a7.5 7.5 0 10-2.784 14.74C395.154 145.302 440 189.928 440 241.696c0 42.636-30.352 80.956-79.21 100.006a7.5 7.5 0 00-4.688 5.847c-2.964 19.25 1.082 38.841 10.969 55.161-21.588-5.766-39.074-22.333-45.875-44.782a7.5 7.5 0 00-7.827-5.297c-5.297.46-10.636.694-15.869.694-46.659 0-90.456-18-117.157-48.151a7.5 7.5 0 10-11.23 9.944c29.504 33.316 77.5 53.207 128.387 53.207 3.738 0 7.524-.11 11.313-.328 5.437 14.023 14.79 26.508 26.772 35.604 14.075 10.685 30.851 16.332 48.512 16.332a7.5 7.5 0 005.328-12.779c-13.83-13.961-20.775-33.575-19.005-53.169 24.22-10.168 44.756-25.233 59.594-43.76C446.36 289.816 455 266.12 455 241.696c0-28.969-12.441-57.271-35.033-79.692z'></path>
            <path d='M315 161.696c0-34.155-16.61-66.156-46.771-90.109-29.653-23.55-68.978-36.519-110.729-36.519-41.754 0-81.08 12.969-110.731 36.519C16.609 95.54 0 127.541 0 161.696c0 24.424 8.64 48.121 24.985 68.529 14.838 18.526 35.375 33.592 59.594 43.76 1.77 19.594-5.175 39.208-19.005 53.169a7.5 7.5 0 005.328 12.779c17.662 0 34.437-5.647 48.512-16.332 11.982-9.095 21.335-21.581 26.772-35.604 3.789.218 7.575.328 11.313.328 41.752 0 81.077-12.969 110.729-36.519C298.39 227.852 315 195.851 315 161.696zM141.631 272.63a7.495 7.495 0 00-7.827 5.297c-6.801 22.448-24.286 39.015-45.875 44.781 9.887-16.319 13.933-35.911 10.969-55.161a7.5 7.5 0 00-4.688-5.847C45.352 242.652 15 204.332 15 161.696c0-61.552 63.925-111.628 142.5-111.628S300 100.144 300 161.696s-63.925 111.628-142.5 111.628c-5.233 0-10.572-.233-15.869-.694z'></path>
          </svg>
          <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm leading-5 text-gray-600 max-w'>
            Or
            <a
              href='#'
              className='ml-1 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
              create your profile in the App
            </a>
          </p>
        </div>
        <form className='mt-8' action='#' method='POST'>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm'>
            <div>
              <input
                aria-label='Email address or nickname'
                name='email'
                type='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Email address or nickname'
              />
            </div>
            <div className='-mt-px'>
              <input
                aria-label='Password'
                name='password'
                type='password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                type='checkbox'
                className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
              />
              <label
                htmlFor='remember_me'
                className='ml-2 block text-sm leading-5 text-gray-900'>
                Remember me
              </label>
            </div>

            {/* <div className='text-sm leading-5'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>
                Forgot your password?
              </a>
            </div> */}
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>
              <span className='absolute left-0 inset-y pl-3'>
                <svg
                  className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150'
                  fill='currentColor'
                  viewBox='0 0 20 20'>
                  <path
                    fill-rule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login_Page;
