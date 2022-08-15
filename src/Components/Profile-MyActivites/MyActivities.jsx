import React, { useState } from "react";
// import MuiSelect from "./DropDown";
import CardMyActivites from "../../Components/Profile-CardMyActivies/CardMyActivies";
import DropDown from "./DropDown";
import "./MyActivites.css";

import imageComment from "../../images/garden1.jpg"

const MyActivites = () => {

//     const [listPostData,setListPostData] = useState([
//         {textComment:" Simply dummy text of the printing and is simply dummy text of the printing and is simply dummy text of the printing and text of the printing and is simply dummy text of the printing and the printing ",
//     imageComment:"./assert/garden1.jpg",
//     location:"สวนจตุจักร",
//     date:"12/05/2022",
//     time:"08:00",
//     unitTime : "AM"
//     },
// ])

    const textComment=" Simply dummy text of the printing and is simply dummy text of the printing and is simply dummy text of the printing and text of the printing and is simply dummy text of the printing and the printing "
    // const imageComment={imageComment}
    const location = "สวนจตุจักร"
    const date = "12/05/2022"
    const time = "08:00"
    const unitTime = "AM"




  
    return (
        
        <div className='show-card-activities'>
            <div className="h1__weeks">
                <h1>My Activities</h1>
                <DropDown />
            </div>
            <CardMyActivites textComment={textComment} imageComment={imageComment} location={location}
                date={date} time={time} unitTime={unitTime} />
            <CardMyActivites />
            <CardMyActivites />
            <CardMyActivites />
            <CardMyActivites />
        </div>
    )
}
export default MyActivites