import React from 'react'
import "./Cards.css"
const Cards = ({id , origin , path , date , dist}) => {
  return (
    <>
    <div className='Cards'>
      <div className="leftArea">
        <img src="../images/map.png" alt="MapImage" />
        <div className="cardDetails">
          <div className="id">Ride Id : {id} </div>
          <div className="origin">Origin Station : {origin}</div>
          <div className="path">Station Path : {path}</div>
          <div className="date">Date : {date} </div>
          <div className="dist">Distance : {dist}</div>
        </div>
      </div>
      <div className="rightArea">
        <div className="circle">Krishna Nagar</div>
        <div className="circle">Delhi</div>
      </div>
    </div>
    </>
  )
}

export default Cards
