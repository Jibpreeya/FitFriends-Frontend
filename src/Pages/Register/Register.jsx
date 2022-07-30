import { Link } from 'react-router-dom';
import './Register.scss';
import React, {useState} from 'react';

function Register() {
  const [userRegister, setUserRegister] = useState({
    username: '',
    password: '',
    age: '',
    height: '',
    weight: ''
  });

//   const validation = () => {

//   }

  const handleChange = (event) => {
    setUserRegister({...userRegister, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userRegister)
    // preventDefault ไม่ให้ browser reload
    // validation();
  }

  return (
    <div className='register'>
       <form onSubmit={handleSubmit}>
        <h1>FitFriends</h1>
         
         <div className='content'>
           <div className='icons'>
             <img src='src/images/username.png'/>
             <img src='src/images/password.png'/>
             <img src='src/images/age.png'/>
             <img src='src/images/height.png'/>
             <img src='src/images/weight.png'/>

           </div>

           <div className='textBox'>
             <input 
              type='text'
              name='username' 
              value={userRegister.username}
              onChange={handleChange}
              placeholder='USERNAME' 
              required/> 
             <input 
              type='password' 
              name='password'
              value={userRegister.password}
              onChange={handleChange}
              placeholder='PASSWORD'
              required/>
             <input 
              type='text' 
              name='age'
              value={userRegister.age}
              onChange={handleChange}
              placeholder='AGE'
              required/>
            <input 
              type='text' 
              name='height'
              value={userRegister.height}
              onChange={handleChange}
              placeholder='HEIGHT IN kg'
              required/>
            <input 
              type='text' 
              name='weight'
              value={userRegister.weight}
              onChange={handleChange}
              placeholder='WEIGHT IN m'
              required/>
           </div>
         </div>

        <button type='submit'>Register</button>
        <div className='underRegister'>
            <h3><Link to='/'><span>Go to login</span></Link></h3>
        </div>
       </form>
     </div>
    )
  }

export default Register
