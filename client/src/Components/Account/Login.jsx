import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import loginImg from "../../Assets/login.png";
import logo from "../../Assets/favicon.png";
import { useNavigate } from "react-router-dom";
import "../../Styles/login-signup.css";
import {auth , app} from "./Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

const LoginNavbar = () => {
  return (
    <Navbar className="login-navbar" >
      <Container fluid>
        <Navbar.Brand>
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          dolFin
        </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let errors = {};

    if (email === "") {
      isValid = false;
      errors.email = "email is required";
    }

    if (password === "") {
      isValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      alert("incorrect credentials");
    });
  };

  return (
    <Container fluid>
      <Row className="login-page align-items-start">
        <Col md={6}  className="login-img-col">
          <img className="login-image" src={loginImg} alt="Login" />
        </Col>
        <Col md={6} style={{backgroundColor: "#fff", minHeight: "100vh"}}>
          <Row>
            <Col md={12}>
              <LoginNavbar />
            </Col>
          </Row>
          <Col className="login-form-col" style={{ marginTop: "6em"}}>
          <div className="login-form-container">
            <h2 className="text-center">Sign In</h2>
            <Form onSubmit={handleSubmit} style={{marginTop: "3em"}}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </Form.Group>
              <Form.Group className="text-center">
              <Button className="signup_login" type="submit">
                Sign In
              </Button>
              </Form.Group>
            </Form>
            <p className="text-center" style={{marginTop:"5em"}}>
              Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
            </p>
          </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
