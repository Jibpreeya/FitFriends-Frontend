import React from 'react'
import './SideBar.scss'
import Runningicon from './Runningicon.png'
import Joggingicon from './Joggingicon.png'
import Swimmingicon from './Swimmingicon.png'
import Yogaicon from './Yogaicon.png'
import Aerobicicon from './Aerobicicon.png'
import Strengthtrainingicon from './Strengthtrainingicon.png'
import {  BrowserRouter as Router,Link } from 'react-router-dom';
import Notification from '../Main-Notification/notification';
import { useNavigate } from "react-router-dom";

const SideBar = () => {

  let navigate = useNavigate();
  const runningNotiCount = 10
  const JoggingNotiCount = 0
  const SwimmingNotiCount = 2
  const YogaNotiCount = 0
  const AerobicNotiCount = 3
  const StrengthtrainingNotiCount = 30

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Post", { replace: true });
  }

  return (
    // <Router>
    <div className='SideBar'>
      <button className='btn Runingicon'><img src={Runningicon}/>running<Notification count={runningNotiCount} /></button>
      <button className='btn Joggingicon'><img src={Joggingicon}/>Jogging<Notification count={JoggingNotiCount} /></button>
      <button className='btn Swimmingicon'><img src={Swimmingicon}/>Swimming<Notification count={SwimmingNotiCount} /></button>
      <button className='btn Yogaicon'><img src={Yogaicon}/>Yoga<Notification count={YogaNotiCount} /></button>
      <button className='btn Aerobicicon'><img src={Aerobicicon}/>Aerobic<Notification count={AerobicNotiCount} /></button>
      <button className='btn Strengthtrainingicon'><img src={Strengthtrainingicon}/>Strength<Notification count={StrengthtrainingNotiCount} /></button>
      <button className='btn Othersicon'>Others</button>

      <button onClick={handleSubmit} className='Addposticon'>+ Addpost</button>
    </div>
    // </Router>  
  )
}

export default SideBar