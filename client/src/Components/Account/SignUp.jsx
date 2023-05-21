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
import { Link } from "react-router-dom";
import loginImg from "../../Assets/login.png";
import logo from "../../Assets/favicon.png";
import { useNavigate } from "react-router-dom";
import "../../Styles/login-signup.css";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupNavbar = () => (
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
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Sign In
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const notify = () =>
    toast.success("Account created successfully. Please login now!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
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
    const newErrors = {};

    if (username.trim() === "") {
      isValid = false;
      newErrors.username = "Username is required";
    }

    if (email.trim() === "") {
      isValid = false;
      newErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      isValid = false;
      newErrors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      isValid = false;
      newErrors.confirmPassword = "Confirmation password is required";
    } else if (password !== confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (isValid) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          notify();
          setTimeout(() => {
            navigate("/login");
          }, 3100);
        })
        .catch((error) => {
          setErrors((prevState) => ({ ...prevState, firebase: error.message }));
          errorNoti(error.message);
        });
    } else {
      if (Object.keys(newErrors).length > 1) {
        errorNoti("Please fill all the required fields.");
      } else {
        for (const error in newErrors) {
          errorNoti(newErrors[error]);
        }
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
              <SignupNavbar />
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
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
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
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="text-center">
                  <Button className="signup_login" type="submit">
                    Sign Up
                  </Button>
                </Form.Group>
              </Form>
              <p className="text-center" style={{ marginTop: "5em" }}>
                Already have an account?{" "}
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </p>
            </div>
          </Col>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
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

export default SignupPage;
