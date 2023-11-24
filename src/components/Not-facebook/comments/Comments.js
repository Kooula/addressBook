import React from 'react'
import './Comments.css'


const Comments = ({body, email}) => {

  return (
    <div className='comments'>
        <div className='comment'>
          <img className='commentImg' src='https://visualpharm.com/assets/336/User-595b40b65ba036ed117d26d4.svg'/>
          <div className='commentInfo'>
            <span>{email}</span>
            <p>{body}</p>
            </div> 
        </div>
    </div>
  )
}

export default Comments