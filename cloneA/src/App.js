import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Chat from './Components/Chat/Chat';
import Login_Page from './Components/Login_Page/Login_Page';
import ChatList from './Components/Chat/ChatsList/ChatList';

//
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id='app-content' className='justify-center antialiased shadow'>
        <div className='w-full sm:mx-4 md:mx-8 lg:w-3/4 sm:mb-4 sm:mt-10 sm:rounded-lg'>
          <Router>
            <Route component={Login_Page} path={'/login'} exact />
            <Route component={Chat} path={'/chat'} exact />
            <Route component={ChatList} path={'/'} exact />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
