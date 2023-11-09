import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'


const Navbar = () => {
  const authContext = useContext(AuthContext)
    let navigate = useNavigate()
  return (
    <div>
      <ul>
        <li
          onClick={(e) => {
            navigate("/home");
          }}
        >
          Home
        </li>
        <li
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Login
        </li>
        <li onClick={()=> {authContext.logOut()}}>Logout
        </li>
      </ul>
    </div>
  )
}

export default Navbar