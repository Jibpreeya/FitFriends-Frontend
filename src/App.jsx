import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MainPage from './Pages/MainPage/MianPage';
import { Post } from './Pages/Post/Post';
import ProfilePage from './Pages/ProfilePage/ProfilePage'


function App() {
  return (
    <div className='app'>
       <Post />
      {/* พื้นที่สำหรับรัน test แต่ละ page */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <MainPage /> */}
        {/* <Post /> */}
        {/* <ProfilePage /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/Register' element= {<Register />} />
          <Route path='/MainPage' element= {<MainPage />} />
          <Route path='/Post' element= {<Post />} />
          <Route path='/ProfilePage' element= {<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
    
}

export default App;