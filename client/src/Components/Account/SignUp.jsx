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

const LoginNavbar = () => {
  return (
    <Navbar className="login-navbar">
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
          <Nav.Link href="/signup">Sign In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let errors = {};

    if (username === "") {
      isValid = false;
      errors.username = "Username is required";
    }

    if (password === "" || confirmPassword === "") {
      isValid = false;
      errors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    if (email === "") {
      isValid = false;
      errors.email = "Email is required";
    }

    setErrors(errors);

    if (isValid) {
      alert("Account has been created successfully. You can now login.");
      navigate("/login");
    }
  };

  return (
    <Container fluid>
      <Row className="login-page align-items-start">
        <Col md={6} className="login-img-col">
          <img className="login-image" src={loginImg} alt="Login" />
        </Col>
        <Col md={6} style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
          <Row>
            <Col md={12}>
              <LoginNavbar />
            </Col>
          </Row>
          <Col className="login-form-col" style={{ marginTop: "1em" }}>
            <div className="login-form-container">
              <h2 className="text-center">Sign Up</h2>
              <Form onSubmit={handleSubmit} style={{ marginTop: "1em" }}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <div className="text-danger">{errors.confirmPassword}</div>
                  )}
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </Form.Group>
                <Form.Group className="text-center">
                  <Button className="signup_login" type="submit">
                    Sign Up
                  </Button>
                </Form.Group>
              </Form>
              <p className="text-center" style={{ marginTop: "5em" }}>
                Already have an account?{" "}
                <a href="/login" className="signup-link">
                  Login
                </a>
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
