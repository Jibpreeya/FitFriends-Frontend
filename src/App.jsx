import React from 'react';
import { Post } from './Pages/Post/Post';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className='app'>
      <Post />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element= {<Login />} />
          <Route path='/Register' element= {<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
    
}

export default App;