import React from 'react';
import Navbar from '../Components/Navbar';
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='leftContainer'>
        <p>Do you need someone?</p>
        <li> Who <span style={{color:"#FF0000"}}> listens patiently </span></li>
        <li> Who <span style={{color:"#FF0000"}}> doesn't judge </span></li>
        <li> Who <span style={{color:"#FF0000"}}> guides you on the right path </span> </li>
      </div>
      <div className='rightContainer'>
        <p> Sign up to try YARA bot for free </p>
        <div className='box'></div>
      </div>
    </div>
    <div className='footer'>
      <p>YARA bot is trained by the best therapists</p>
      <p>Powered by AI.</p>
    </div>

    </>
  )
}

export default Homepage