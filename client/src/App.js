import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar.jsx';
import Conversation from './Components/Chat/Conversation/Conversation';
import Login_Page from './Components/Login_Page/Login_Page.jsx';
import ChatList from './Components/Chat/ChatsList/ChatList.jsx';
import Join from './Components/Chat/Join/Join.jsx';

//
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div
        id='app-content'
        className='justify-center antialiased shadow main-gradient'>
        <div className='w-full sm:mx-4 md:mx-8 lg:w-3/4 sm:mb-4 sm:mt-10 sm:rounded-lg'>
          <Router>
            <Route component={Login_Page} path={'/login'} exact />
            <Route component={Conversation} path={'/chat'} exact />
            <Route component={ChatList} path={'/'} exact />
            <Route component={Join} path={'/join'} exact />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
