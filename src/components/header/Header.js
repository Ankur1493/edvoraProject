import React, { useState } from 'react'
import "./Header.css"
const Header = () => {

    


  return (
    <div className='Header'>
        <div className="title">Edvora</div>
        <div className="profile">
            <div className="name">Ankur Sharma</div>
            <div className="img">
                <img src="../images/profile.png" alt="Profile Pic"/>
            </div>
        </div>
    </div>
  )
}

export default Header