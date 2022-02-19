import React from 'react'
import "./NavBar.css"
import { useState } from 'react'
const NavBar = () => {

  const [show , setShow] = useState(false);
  
  function displayFilter(){
    setShow(!show);
  };

  return (
    <div className='NavBar'>
        <div className="list">
            <ul>
                <li>Nearest Rides</li>
                <li>Upcomping Rides</li>
                <li>Past Rides</li>
            </ul>
        </div>
        <div className="filter">
          <img onClick={displayFilter} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="FilterIcon"/>
          <div className="text" onClick={displayFilter}>Filters</div>
          {show && <div className="details">
              <div className="head">
                <div className="filterText">Filters</div>
                <div className="close" onClick={displayFilter}>
                  <img src="https://www.pinclipart.com/picdir/big/538-5385185_grey-cross-icon-png-clipart.png" alt="" />
                </div>
              </div>
              <div className="box">
                State
                <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="" />
              </div>
              <div className="box">
                City
                <img src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="" />
              </div>
          </div>}
        </div>
        
    </div>
  )
}

export default NavBar
