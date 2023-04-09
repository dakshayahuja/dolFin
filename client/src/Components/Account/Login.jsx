import React, { useState } from "react";
import login from "../../Assets/login.png";
import logo from "../../Assets/favicon.png";
import "../../Styles/login-signup.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const LoginNav = () => {
  return (
    <div className="row">
      <div className="col-6" id="login-nav-logo">
        <img
          src={logo}
          alt="logo"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{" "}
        <span>dolFin</span>
      </div>
      <div className="col-6" id="home-signup">
        <Nav style={{ color: "black" }}>
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <Link to="/signup">Sign Up</Link>
        </Nav>
      </div>
    </div>
  );
};

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form text-center">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Sign In" className="btn btn-danger" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "100vh" }}>
          <div className="col-6" id="login-img-div">
            <img src={login} alt="login-banner" id="login-img" />
          </div>
          <div className="col-6" id="login-form-div">
            <div className="login-form">
              <LoginNav />
              <div id="sign-in-button"className="title text-center fw-bold fs-2">Sign In</div>
              {isSubmitted ? (
                <div>User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
