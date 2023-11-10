import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import './Navbar.css'


const Navbar = () => {
  const authContext = useContext(AuthContext)
    let navigate = useNavigate()
  return (
<div>
        <ul>
            <li>
                <a
                    href="/home"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/home");
                    }}
                >
                    Home
                </a>
            </li>
            <li>
                {!authContext.validAuth ? (<a
                    href="/login"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/login");
                    }}
                >
                    Login
                </a>) : '' } 
                
            </li>
            {authContext.validAuth ? (<li onClick={() => { authContext.logOut() }}>
                <a href="/login">Logout</a>
            </li>): ''}
        </ul>
    </div>
  )
}

export default Navbar