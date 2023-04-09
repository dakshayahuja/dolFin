import "../Styles/navbar.css";
import logo from "../Assets/favicon.png";
import { Link,  Outlet } from "react-router-dom";
import { Nav, Navbar, Button, Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <div className="topbar">
      <ul className="topbar-items">
        <li>
          NIFTY 50 <span className="topbar-sp-1">₹17599.15</span>{" "}
          <span className="topbar-sp-2"> +42 (+0.10%)</span>
        </li>
        <li>
          SENSEX <span className="topbar-sp-1">₹59832.97</span>{" "}
          <span className="topbar-sp-2"> +143.66 (+0.24%)</span>
        </li>
        <li>
          BTC/USD <span className="topbar-sp-1">$28135.32</span>{" "}
          <span className="topbar-sp-2"> +390.54 (+1.36%)</span>
        </li>
        <li>
          ETH/USD <span className="topbar-sp-1">$1880</span>{" "}
          <span className="topbar-sp-2" style={{ color: "red" }}>
            {" "}
            -24.45 (-1.3%)
          </span>
        </li>
      </ul>
    </div>
  );
};

function AppBar() {
  return (
    <>
      <Topbar />
      <Navbar collapseOnSelect expand="lg" className="navbar" id="nav1">
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
              <Button variant="light" className="login">
                <Link to="/login">Login</Link>
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AppBar;
