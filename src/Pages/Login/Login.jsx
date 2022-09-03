import './Login.scss';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import userImage from '../../images/username.png'
// import passwordImage from '../../images/password.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Login(props) {
  // const [userLogin, setUserLogin] = useState({
  //   username: '',
  //   password: ''
  // });

  // const users = [
  //   {
  //     username: 'admin',
  //     password: '123456'
  //   },
  // ];

  // const handleChange = (event) => {
  //   setUserLogin({...userLogin, [event.target.name]: event.target.value})
  // };

  // const loginValidation = () => {
  //   const loginCheck = users.find(user => (user.username === userLogin.username && user.password === userLogin.password));
  //   if(loginCheck) {
  //     alert('Login Successfully')
  //   } else {
  //     alert('invalid password or username')
  //     console.log('invalid password or username');
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(userLogin)
  //   // preventDefault ไม่ให้ browser reload
  //   loginValidation();
  // };


  return (
    <div className='login'>
      <form onSubmit={props.onSubmit}>
      <h1>Login</h1>
       <div className='contentLogin'>
         <div className='listContentLogin'>
           {/* <img src={userImage}/> */}
           <i class="fa-solid fa-user"></i>
           <input 
             type='text'
             name='username' 
             value={props.user_login}
             onChange={props.onChange}
             placeholder='Username' 
             required/> 
         </div>
         <div className='listContentLogin'>
           {/* <img src={passwordImage}/> */}
           <i class="fa-solid fa-unlock"></i>
           <input 
            type='password' 
            name='password'
            value={props.user_password}
            onChange={props.onChange}
            placeholder='Password'
            required/>
            {/* placeholder คือ ตำที่จะแสดงภายในกล่องข้อความ */}
            {/* required คือต้องใส่ ไม่ใส่ไม่ได้และจะต้องถูกต้องตามรูปแบบของอีเมลที่กำหนด */}
         </div>
         </div>

        <button type='submit'>Sign in</button>

        <div className='underButton'>
          <h3><Link to='/Register'><span>Don't have an account ? Register</span></Link></h3>
        </div>
       </form>
    </div>
  );
}

export default Login
