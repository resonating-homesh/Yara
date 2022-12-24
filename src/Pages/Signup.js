import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="header">
      <p style={{ marginBottom:"0"}}>
        YARA bot is trained by the best therapists.
      </p>
      <p  style={{marginTop: "0"}}>Powered by AI.</p>
      </div>
      <div className="text">Login to Chat</div>
      <img className="yara" src="image 1.svg"></img>
      <button className="google"> <img src='google.svg'></img> <p style={{marginLeft:"0"}}> Continue with Google </p> </button>
      <div className="row">
        <hr style={{ width: "90px" }} />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            marginLeft: "15px",
            marginRight: "15px",
            color: "#000",
          }}
        >
          {" "}
          OR{" "}
        </p>
        <hr style={{ width: "90px" }} />
      </div>
      <input className="email" placeholder="  Your Name" type="text"></input>
      <input className="email" placeholder="  Email Adress" type="text"></input>
      <input
        className="password"
        placeholder="  Password"
        type="password"
      ></input>
      <button className="submit"> Signup </button>
     
      <div className="row">
        <hr style={{ width: "90px" }} />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            marginLeft: "15px",
            marginRight: "15px",
            color: "#000",
          }}
        >
          {" "}
          OR{" "}
        </p>
        <hr style={{ width: "90px" }} />
      </div>
      <p> Already have an account?</p>
      <button className="submit" style={{marginBottom:"10px"}} > Login </button>
    </div>
  );
};
export default Login;
