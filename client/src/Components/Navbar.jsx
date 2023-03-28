import "./Navbar.css";
import logo from "../Assets/favicon.png";
import Landing from "./HomePage/Landing";
import Dashboard from "./HomePage/Dashboard";
import Signup from "./Account/SignUp";
import Stocks from "./SubPages/Stocks";
import Crypto from "./SubPages/Crypto";
import MutualFunds from "./SubPages/MutualFunds";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { Nav, Navbar, Button, Container } from "react-bootstrap";

function AppBar() {
  let page = <Landing />;
  const pageDecide = () => {
    var login = false;
    if (login === true) {
      page = <Dashboard />;
    } else {
      page = <Landing />;
    }
  };
  pageDecide();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              dolFin
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-5">
              <Nav>
                <Link to="/stocks">Stocks</Link>
              </Nav>
              <Nav>
                <Link to="/mutualfund">Mutual Funds</Link>
              </Nav>
              <Nav>
                <Link to="/crypto">Cryptocurrency</Link>
              </Nav>
            </Nav>
            <Nav>
              <Button variant="light">
                <Link to="/signup">Signup</Link>
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

      <Routes>
        <Route path="/" element={page} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/mutualfund" element={<MutualFunds />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default AppBar;
