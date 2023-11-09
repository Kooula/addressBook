import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
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
      </ul>
    </div>
  )
}

export default Navbar