import React from 'react'
import "./App.css"
import NearestRide from './pages/nearestRide/NearestRide'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <NavBar/>
      <NearestRide/>
    </div>
  )
}

export default App