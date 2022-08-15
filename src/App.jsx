// import React from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MainPage from './Pages/MainPage/MainPage';
import { AddPost } from './Pages/AddPost/AddPost';
import ProfilePage from './Pages/ProfilePage/ProfilePage'



function App() {
  return (
    
    <div className='app'>

      
      {/* พื้นที่สำหรับรัน test แต่ละ page */}
        {/* <Navbar /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <MainPage /> */}
        {/* <AddPost /> */}
        {/*<ProfilePage />*/}

      <BrowserRouter>
        <Navbar />
        {/* นอก tag Routes คือการใส่ทุกหน้า */}
        <Routes>

          <Route path='/' element= {<Login />} />
          <Route path='/Register' element= {<Register />} />
          <Route path='/MainPage' element= {<MainPage />} />
          <Route path='/AddPost' element= {<AddPost />} />
          <Route path='/ProfilePage' element= {<ProfilePage />} />
        </Routes>


      </BrowserRouter>
  </div>

  )
    
}

export default App;
