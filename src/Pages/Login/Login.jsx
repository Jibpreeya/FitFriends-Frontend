// import { Link } from 'react-router-dom';
import './Login.scss';
function Login() {
  
    return (
      <div className='login'>
        <form>
          <h1>FitFriends</h1>
          
          <div className='content'>
            <div className='icons'>
              <img src='src/images/username.png'/>
              <img src='src/images/password.png'/>
            </div>

            <div className='textBox'>
              <input type='text' placeholder='USERNAME'/> 
              <input type='password' placeholder='PASSWORD'/>
              {/* placeholder คือ ตำที่จะแสดงภายในกล่องข้อความ */}
            </div>
          </div>

        <button type='submit'>Login</button>

        <div className='underButton'>
          <h3><a href='#'>May be Later</a></h3>
          <h3><a href='#'>Register</a></h3>
        </div>
        </form>
        {/* <Link to='/Login'>Maybe Later</Link>       */}
      </div>
    )
  }

export default Login
