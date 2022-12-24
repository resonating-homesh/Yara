import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  let history = useNavigate();

  const handleClick = async (e) => {
    console.log("workinggggg");
    const { email, password } = credentials;
    e.preventDefault();

    fetch("/users/login?email=" + email + "&password=" + password)
      .then((response) => response.json())
      .then((data) => {
        // Check if the login was successful
        if (data.success) {
          // Save the JWT authentication token in local storage
          localStorage.setItem("jwt", data.jwt);
          // Redirect to the chat page
          history("/chat");
        } else {
          // Display the error message
          // const errorMessage = document.getElementById("errorMessage");
          // errorMessage.style.display = "block";
          setShow(true);
        }
      });
  };

  // const errorStyle = () => {
  //   display=  `${ show ? "block" : "none" }`;
  //   color= "red";

  // }

  const handleSignUp = () => {
    history("/signup");
  };

  const onChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  return (
    <div className="login">
      <div className="header">
        <p style={{ marginBottom: "0" }}>
          YARA bot is trained by the best therapists.
        </p>
        <p style={{ marginTop: "0" }}>Powered by AI.</p>
      </div>
      <div className="text">Login to Chat</div>
      <img className="yara" src="image 1.svg"></img>
      <button className="google">
        {" "}
        <img src="google.svg"></img>{" "}
        <p style={{ marginLeft: "0" }}> Continue with Google </p>{" "}
      </button>
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
      <form
        onSubmit={handleClick}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          className="email"
          placeholder="  Email Adress"
          type="text"
          onChange={onChange}
          value={credentials.email}
          id="email"
        ></input>
        <input
          className="password"
          placeholder="  Password"
          type="password"
          onChange={onChange}
          value={credentials.password}
          id="password"
        ></input>
        <div className="test">
          <Link
            style={{
              textDecoration: "none",
              color: "#475BFF",
              marginBottom: "10px",
            }}
          >
            {" "}
            Forgot Password?{" "}
          </Link>
        </div>
        <button className="submit" style={{ marginBottom: "10px" }}>
          {" "}
          Login{" "}
        </button>
      </form>
      <div id="errorMessage" style={{ display: `${show ? "block" : "none"}`, color: "red" }}>Invalid email or password.</div>
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
      <p> Don't have an account?</p>
      <button className="submit" onClick={handleSignUp}>
        {" "}
        Signup{" "}
      </button>
    </div>
  );
};
export default Login;
