import React from "react";
import "../Components/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  let history = useNavigate();

  const handleLogin = () => {
    history("/login");
  };

  const handleSignUp = () => {
    history("/signup");
  };

  const style = {
    fontFamily: "Yomogi",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "58px",
  };

  return (
    <div className="navbar">
      <img className="logo" src="image 1.svg"></img>
      <p style={style}>You Are Never Alone</p>
      <div className="buttons">
        <button onClick={handleLogin} className="inactive">
          Login
        </button>
        <button onClick={handleSignUp} className="active">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
