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
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const successNoti = () =>
    toast.success("Login Successful!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const errorNoti = (msg) =>
      toast.error(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let errors = {};

    if (email.trim() === "" && password.trim() === "") {
      isValid = false;
      errorNoti("Email and Password are required");
    } else {
      if (email.trim() === "") {
        isValid = false;
        errors.email = "Email is required";
      }

      if (password.trim() === "") {
        isValid = false;
        errors.password = "Password is required";
      }
    }

    setErrors(errors);

    if (isValid) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          successNoti();
          setTimeout(() => {
            navigate("/");
          }, 2300);
        })
        .catch((error) => {
          errorNoti("Incorrect email or password");
        });
    } else {
      for (const error in errors) {
        errorNoti(errors[error]);
      }
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
          <Col className="login-form-col" style={{ marginTop: "6em" }}>
            <div className="login-form-container">
              <h2 className="text-center">Sign In</h2>
              <Form onSubmit={handleSubmit} style={{ marginTop: "3em" }}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="text-center">
                  <Button className="signup_login" type="submit">
                    Sign In
                  </Button>
                </Form.Group>
              </Form>
              <p className="text-center" style={{ marginTop: "5em" }}>
                Don't have an account?{" "}
                <a href="/signup" className="signup-link">
                  Sign Up
                </a>
              </p>
            </div>
          </Col>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default LoginPage;
