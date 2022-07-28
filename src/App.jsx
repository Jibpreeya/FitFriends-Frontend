// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import Login from './Pages/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      {/* <BrowserRouter> */}
        {/* <Navbar /> */}
        {/* <Routes> */}
          {/* <Route path='/Login' element= {<Login />} /> */}
          <Login/>
          {/* <Route path='/Register' element= {<Register />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App
