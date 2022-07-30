import { Link } from 'react-router-dom';
import './Login.scss';
import React, {useState} from 'react';

function Login() {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  });

  const users = [
    {
      username: 'admin',
      password: '12345'
    },
  ];

  const validation = () => {
    const check = users.find(user => (user.username === userLogin.username && user.password === userLogin.password));
    if(check) {
      console.log('Login successful');
    }else {
      console.log('invalid password or username');
    }
  }

  const handleChange = (event) => {
    setUserLogin({...userLogin, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userLogin)
    // preventDefault ไม่ให้ browser reload
    validation();
  }

  return (
    <div className='login'>
       <form onSubmit={handleSubmit}>
        <h1>FitFriends</h1>
         
         <div className='content'>
           <div className='icons'>
             <img src='src/images/username.png'/>
             <img src='src/images/password.png'/>
           </div>

           <div className='textBox'>
             <input 
              type='text'
              name='username' 
              value={userLogin.username}
              onChange={handleChange}
              placeholder='USERNAME' 
              required/> 
             <input 
              type='password' 
              name='password'
              value={userLogin.password}
              onChange={handleChange}
              placeholder='PASSWORD'
              required/>
             {/* placeholder คือ ตำที่จะแสดงภายในกล่องข้อความ */}
             {/* required คือต้องใส่ ไม่ใส่ไม่ได้และจะต้องถูกต้องตามรูปแบบของอีเมลที่กำหนด */}
           </div>
         </div>

        <button type='submit'>Login</button>

         <div className='underButton'>
           <h3><a href='#'><span>May be Later</span></a></h3>
           <h3><Link to='/Register'><span>Register</span></Link></h3>
         </div>
       </form>
       {/* <Link to='/Login'>Maybe Later</Link>       */}
     </div>
    )
  }

export default Login
