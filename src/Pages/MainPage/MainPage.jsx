import './MainPage.scss'
import CommunityBox from '../../Components/Main-CommunityBox/CommunityBox'
import SideBar from '../../Components/Main-SideBar/SideBar'
import Useronline from '../../Components/Main-UserOnline/UserOnline'
import { Link } from 'react-router-dom';
import Notification from '../../Components/Main-Notification/notification'
import DatePicker from '../../Components/Main-Date/Date'


function MainPage() {

  return (
    <div className="MainPage">

      <div className='main-session'>
        <div className='App-sidebar'>
          <SideBar />
          <Notification />
        </div>

        <div className='feed'>
          < CommunityBox />
        </div>
        <div className='useronline-date'>
          <div className='DatePicker'>
            <DatePicker wrapperClassName="date-picker"/>
          </div>


          <div className='useronline'>
            <Useronline />
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default MainPage