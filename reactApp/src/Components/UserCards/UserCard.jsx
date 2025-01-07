import React from 'react'
import "./UserCard.css"
function UserCard({img,fname,lname,email}) {

  return (
    <div className='card'>
        <img src={img} alt="userImage" />
        <h3>{fname+" "+lname}</h3>
        <p>{email}</p>
    </div>
  )
}

export default UserCard
