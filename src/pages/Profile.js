import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {id} = useParams()
  return (
    <div>
        <h2>User Profile</h2>
      <p>Profile for user with ID: {id}</p>
    </div>
  )
}

export default Profile