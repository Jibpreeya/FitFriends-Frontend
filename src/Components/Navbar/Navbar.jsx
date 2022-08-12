import { Link } from 'react-router-dom';
import React from "react";
import './Navbar.scss';
import logo from './logo.png'


function Navbar() {
    return (
        <div className="Nav-content">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="menu">
                <ul>
                    <li><a id='#' className="test">Fitfriend</a></li>
                    <li><a id='#'>Community</a></li>
                    <li><a id='#'>Workout Program</a></li>
                    <li><a id='#'>Recipes</a></li>
                    <li><a id='#'>Goals</a></li>
                </ul>
            </div>

            <div className="login-name">
                <button><Link to='/'><a id='#' className="sign-in">Login</a></Link></button>
                <button><Link to='/Register'><a id='#' className="sign-up">Sign up</a></Link></button>
            </div>


        </div>
    )
};


export default Navbar