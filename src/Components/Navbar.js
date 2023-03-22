import logo from "../media/favicon.png";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function AppBar() {
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
    </>
  );
}

export default AppBar;
