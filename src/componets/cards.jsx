import React from 'react'
import "./cards.css"


const Card = ({userName,profilepic,profileUrl})=>{
    return(
      <>
        <div className="Card">
        <img src={profilepic} alt="userImage" className="profile-image" />
        <h2 >{userName}</h2>
        <a href={profileUrl} className="profile-btn" target="_blank">Visit profile</a>
  
      </div>
      </>
    )
}

export default Card;