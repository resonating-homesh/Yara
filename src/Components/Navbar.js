import React from 'react';
import '../Components/Navbar.css';

const Navbar = () => {

    const style = {
        fontFamily:"Yomogi",
        fontWeight: 400,
        fontSize: "40px",
        lineHeight: "58px"
    }

  return (
    <div className='navbar'>
    <img className='logo' src='image 1.svg'></img>
    <p style={ style }>You Are Never Alone</p>
    <div className='buttons'>
        <button className='inactive'>Login</button>
        <button className='active'>Sign Up</button>
    </div>
    </div>
  )
}

export default Navbar