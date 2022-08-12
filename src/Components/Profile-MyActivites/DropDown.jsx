import React from 'react';
import './DropDown.css';
import { useState } from 'react';


const DropDown = () => {
  const [selectWeek,setSelectWeek] = useState(1)


  return (
    <div className="dropdown">
      <button className="dropbtn">Week {selectWeek}</button>
      <div className="dropdown-content">
         <a href="#" onClick={()=>setSelectWeek(1)}>Week 1</a>
         <a href="#" onClick={()=>setSelectWeek(2)}>Week 2</a>
         <a href="#" onClick={()=>setSelectWeek(3)}>Week 3</a>
         <a href="#" onClick={()=>setSelectWeek(4)}>Week 4</a>

      </div>
    </div>
  );
}





export default DropDown;