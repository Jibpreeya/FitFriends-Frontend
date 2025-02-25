import React, { useState, useEffect } from 'react';
import './SideBar.scss';
import Runningicon from './Runningicon.png';
import Joggingicon from './Joggingicon.png';
import Swimmingicon from './Swimmingicon.png';
import Yogaicon from './Yogaicon.png';
import Aerobicicon from './Aerobicicon.png';
import Strengthtrainingicon from './Strengthtrainingicon.png';
import Plusicon from './Plusicon.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Notification from '../Main-Notification/notification';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from '../../../config';


const SideBar = (props) => {
  const url = config.url
  const [runningNotiCount, setrunningNotiCount] = useState(0)
  const [JoggingNotiCount, setJoggingNotiCount] = useState(0)
  const [SwimmingNotiCount, setSwimmingNotiCount] = useState(0)
  const [YogaNotiCount, setYogaNotiCount] = useState(0)
  const [AerobicNotiCount, setAerobicNotiCount] = useState(0)
  const [StrengthtrainningNotiCount, setStrengthtrainningNotiCount] = useState(0)
  const [OthersNotiCount, setOthersNotiCount] = useState(0)

  useEffect(() => {

    axios.get(`${url}/activities/activity_types/running`).then((res) => {
      setrunningNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/jogging`).then((res) => {
      setJoggingNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/swimming`).then((res) => {
      setSwimmingNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/yoga`).then((res) => {
      setYogaNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/aerobic`).then((res) => {
      setAerobicNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/strength`).then((res) => {
      setStrengthtrainningNotiCount(res.data)
    })
    axios.get(`${url}/activities/activity_types/others`).then((res) => {
      setOthersNotiCount(res.data)
    })
  
  }, [])


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/Post", { replace: true });
  }
  
  return (

    
    <div className='SideBar'>

      <button onClick={()=>props.groupActivity(1)} className='btn Runingicon'><img src={Runningicon}/>running<Notification count={runningNotiCount} /></button>
      <button onClick={()=>props.groupActivity(2)} className='btn Joggingicon'><img src={Joggingicon} />Jogging<Notification count={JoggingNotiCount} /></button>
      <button onClick={()=>props.groupActivity(3)} className='btn Swimmingicon'><img src={Swimmingicon} />Swimming<Notification count={SwimmingNotiCount} /></button>
      <button onClick={()=>props.groupActivity(4)}className='btn Yogaicon'><img src={Yogaicon} />Yoga<Notification count={YogaNotiCount} /></button>
      <button onClick={()=>props.groupActivity(5)}className='btn Aerobicicon'><img src={Aerobicicon} />Aerobic<Notification count={AerobicNotiCount} /></button>
      <button onClick={()=>props.groupActivity(6)}className='btn Strengthtrainingicon'><img src={Strengthtrainingicon} />Strengh<Notification count={StrengthtrainningNotiCount} /></button>
      <button onClick={()=>props.groupActivity(7)}className='btn Othersicon'>Others<Notification count={OthersNotiCount} /></button>
      {/* <button onClick={handleSubmit} className='btn Addposticon'>Addpost</button> */}
      {/* <button onClick={handleSubmit} className='btn Addposticon'><img src={Plusicon} />Addpost</button> */}

    </div>
  )
}

export default SideBar
