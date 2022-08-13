import React from 'react'
import './SideBar.scss'
import Runningicon from './Runningicon.png'
import Joggingicon from './Joggingicon.png'
import Swimmingicon from './Swimmingicon.png'
import Yogaicon from './Yogaicon.png'
import Aerobicicon from './Aerobicicon.png'
import Strengthtrainningicon from './Strengthtrainningicon.png'
import Othersicon from './Others.png'
import Addposticon from './Addposticon.png'
// import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    // <Router>
    <div className='SideBar'>
      <a href='#Running'><img className='Runingicon' src={Runningicon} alt="Runningicon" ></img></a>
      <a href='#Jogging'><img className='Joggingicon' src={Joggingicon} alt="Joggingicon" ></img></a>
      <a href='#Swimming'><img className='Swimmingicon' src={Swimmingicon} alt="Swimmingicon" ></img></a>
      <a href='#Yoga'><img className='Yogaicon' src={Yogaicon} alt="Yogaicon" ></img></a>
      <a href='#Aerobic'><img className='Aerobicicon' src={Aerobicicon} alt="Aerobicicon" ></img></a>
      <a href='#Strengthtrainning'><img className='Strengthtrainningicon' src={Strengthtrainningicon} alt="Strengthtrainningicon" ></img></a>
      <a href='#Others'><img className='Othersicon' src={Othersicon} alt="Othersicon" ></img></a>
      <img className='Addposticon' src={Addposticon} alt="Addposticon" ></img>
      {/* <Link to='/Post'><img className='Addposticon' src={Addposticon} alt="Addposticon" ></img></Link> */}
    </div>
    // </Router>  
  )
}

export default SideBar