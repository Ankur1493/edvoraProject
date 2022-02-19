import React from 'react'
import "./NearestRide.css"
import Cards from '../../components/cards/Cards'
const NearestRide = () => {
  return (
    <div className='NearestRide'>
      <Cards
        id = "002"
        origin = "20"
        path = "[20,39,40,42,54,63,72,88,98]" 
        date = "15th Feb 2022 16:33"
        dist = "0"
      />
      <Cards
        id = "003"
        origin = "13"
        path = "[13,25,41,48,59,64,75,81,91]" 
        date = "15th Feb 2022 16:33"
        dist = "1"
      />
      <Cards
        id = "001"
        origin = "23"
        path = "[23,42,45,48,56,60,77,81,93]" 
        date = "15th Feb 2022 16:33"
        dist = "2"
      />
    </div>
  )
}

export default NearestRide