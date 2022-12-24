import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  });

  let history = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    // Send a POST request to the /users/register route with the name, email, and password as query parameters
    fetch('/users/register?name=' + name + '&email=' + email + '&password=' + password, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      /// Check if the registration was successful
      if (data.success) {
        // Save the JWT authentication token in local storage
        localStorage.setItem('jwt', data.jwt);
        // Redirect to the chat page
        // window.location.href = '/chat';
        history("/chat");
      } else {
        // Display the error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
      }
    });
  };

  const handleLogin = () => {
    history("/login");
  };

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
      <form style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}} onSubmit={handleClick}>
      <input onChange={onChange} value={credentials.name} id="name"  className="email" placeholder="  Your Name" type="text" required></input>
      <input onChange={onChange} value={credentials.email} id="email" className="email" placeholder="  Email Adress" type="text" required></input>
      <input
        className="password"
        placeholder="  Password"
        type="password"
        required
        id="password"
        onChange={onChange}
        value={credentials.password}
      ></input>
      <button type="submit" className="submit"> Signup </button>
      </form>
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
      <button onClick={handleLogin} className="submit" style={{marginBottom:"10px"}} > Login </button>
    </div>
  );
};
export default Login;
