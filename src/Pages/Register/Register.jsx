import { Link } from 'react-router-dom';
import './Register.scss';
import React, { useState, useEffect } from 'react';
import userImage from '../../images/username.png'
import passwordImage from '../../images/password.png'
import ageImage from '../../images/age.png'
import heightImage from '../../images/height.png'
import weightImage from '../../images/weight.png'
import userphotoImage from '../../images/photo.png'
import axios from "axios";

function Register() {
  const [userRegister, setUserRegister] = useState({
    username: '',
    password: '',
    age: '',
    height: '',
    weight: '',
  });

  const [checkingRegisterValidation, setCheckingRegisterValidation] = useState({
    username: '',
    password: '',
    age: '',
    height: '',
    weight: '',
  });

  const [userPhoto, setUserPhoto] = useState([]);
  // const [userPhotoURLs, setUserPhotoURLs] = useState([]);

  const [postImage, setPostImage] = useState({});

  const url = "http://localhost:8080/register";
  const createImage = (newImage) => axios.post(url, newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function onImageChange (e) {
    setUserPhoto([...e.target.files]);
    const file = e.target.files[0];
    const base64 = convertToBase64(file);
    setUserRegister({ ...userRegister, user_photo: base64 });
  }

  // checking register validation
  const registerValidation = () => {
    let errors = checkingRegisterValidation;
    // username validation
    const usernameRequired = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!userRegister.username.match (usernameRequired)) {
      errors.username = 'Please ingress a valid username';
    } else {
      errors.username = '';
    }

    //password validation
    const conditional = /(?=.*?[0-9])/;
    if (userRegister.password.length < 6) {
      alert ('Password must be longer than 6 characters');
    } else if (!userRegister.password.match(conditional)) {
      errors.password = 'Password must contain at a number';
      alert ('Password must contain at least a number')
    } else {
      errors.password = '';
    }

    //age validation
    if (!userRegister.age.match(conditional)) {
      errors.age = 'Age must contain at a number';
      alert ('Age must contain at a number')
    }

    //height validation
    if (!userRegister.height.match(conditional)) {
      errors.height = 'Height must contain at a number';
      alert ('Height must contain at a number')
    }

    //weight validation
    if (!userRegister.weight.match(conditional)) {
      errors.weight = 'Weight must contain at a number';
      alert ('Weight must contain at a number')
    }
    return setCheckingRegisterValidation(errors)
  };

  const handleChange = (event) => {
    setUserRegister ({...userRegister, [event.target.name]: event.target.value})
  };

  // useEffect(() => {
  //   if (userPhoto.length < 1)return;
  //   const newImageUrls = [];
  //   userPhoto.forEach(userPhoto => newImageUrls.push(URL.createObjectURL(userPhoto)));
  //   setUserPhotoURLs(newImageUrls);
  //   setUserRegister({
  //       ...userRegister,
  //       userPhotoURLs: newImageUrls,
  //       })
  // },[userPhoto]);

  // useEffect(() => {
  //   const weight = userRegister.weight;
  //   const height = userRegister.height;
  //   if (height.length < 1)return;
  //     const userBmi = weight/(height*height) ;
  //     setUserRegister({
  //       ...userRegister,
  //       BMI: userBmi
  //       })
  //   },[userRegister.height && userRegister.weight]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // bmi (userRegister.weight, userRegister.height);
    // preventDefault ไม่ให้ browser reload
    createPost(postImage);
    console.log (userRegister);
    registerValidation();

  };

  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <h1>REGISTER</h1>

        {/* username */}
         <div className='contentRegister'>
          
          <div className='listContentRegister'>
            <img src={userImage}/>
            <input 
              type='text'
              name='username' 
              value={userRegister.username}
              onChange={handleChange}
              placeholder='USERNAME' 
              required/> 
          </div>

          {/* password */}
          <div className='listContentRegister'>
            <img src={passwordImage}/>
            <input 
              type='password' 
              name='password'
              value={userRegister.password}
              onChange={handleChange}
              placeholder='PASSWORD'
              required/>
          </div>

          {/* age */}
          <div className='listContentRegister'>
            <img src={ageImage}/>
            <input 
              type='number' 
              name='age'
              value={userRegister.age}
              onChange={handleChange}
              placeholder='AGE'
              required/>
          </div>

          {/* height */}
          <div className='listContentRegister'>
            <img src={heightImage}/>
            <input 
              type='number' 
              name='height'
              value={userRegister.height}
              onChange={handleChange}
              placeholder='HEIGHT IN m'
              required/>
          </div>
            
          {/* weight */}
          <div className='listContentRegister'>
            <img src={weightImage}/>
            <input 
              type='number' 
              name='weight'
              value={userRegister.weight}
              onChange={handleChange}
              placeholder='WEIGHT IN kg'
              required/>
          </div>

          {/* userPhoto */}
          <div className='listContentRegister'>
            <img src={userphotoImage}/>
            <input type="file"
            className="inputPhoto" 
            name="userPhoto" 
            multiple accept="userPhoto/*" 
            onChange={onImageChange}
             />
            {/* <p className="choosePhoto">Choose a photo</p> */}
            {/* {userPhotoURLs.map((imageSrc, index) => (<img width="300" height="300" src={imageSrc} key={index} />))} */}
          </div>
        </div>
          
        <button type='submit'>Create Account</button>
        <div className='underRegister'>
            <h3><Link to='/'><span>Back to login</span></Link></h3>
        </div>
       </form>
    </div>
  )
  }

export default Register
