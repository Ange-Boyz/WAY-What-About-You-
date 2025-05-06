import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './authentication/landingPage';
import Login from './authentication/login';
import SignUp from './authentication/signUp';
import Dashboard from './homePage/dashboard';
import FriendsPage from './homePage/friends/friendsPage';
import Friends from './homePage/friends/friends';
import AddFriends from './homePage/friends/addFriend';
import RequestFriends from './homePage/friends/requestFriends';
import Profile from './homePage/profile';
import Story from './homePage/story';
import ChatPage from './homePage/chat/chatPage';
import DiscussionPage from './homePage/chat/discussionPage';


function App() {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route element={<Dashboard />}>
                <Route element={<FriendsPage />}>
                  <Route path='/friends' element={<Friends />} />
                  <Route path='/addFriends' element={<AddFriends />} />
                  <Route path='/requestFriends' element={<RequestFriends />} />
                </Route>
                <Route path='/profile' element={<Profile />} />
                <Route path='/story' element={<Story />} />
                <Route path='/chat' element={<ChatPage />} />
                <Route path='/discussion' element={<DiscussionPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
