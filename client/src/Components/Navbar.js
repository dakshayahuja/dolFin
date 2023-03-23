import logo from "../media/favicon.png";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Stocks from "./SubPages/Stocks";
import MutualFunds from "./SubPages/MutualFunds";
import Crypto from "./SubPages/Crypto";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import "./Navbar.css";

function AppBar() {
  let page = <Landing />;
  const pageDecide = () => {
    var login = true;
    if (login === true) {
      page = <Dashboard />;
    } else {
      page = <Landing />;
    }
  };
  pageDecide();
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
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
              <Nav.Link>
                <Link to="/stocks">Stocks</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/mutualfund">Mutual Funds</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/crypto">Cryptocurrency</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light">Signup</Button>{" "}
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
      </Routes>
    </>
  );
}

export default AppBar;
