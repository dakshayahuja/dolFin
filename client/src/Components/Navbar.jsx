import "../Styles/navbar.css";
import logo from "../Assets/favicon.png";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { PriceDataContext } from "./PriceDataProvider";

const Topbar = () => {
  const data = useContext(PriceDataContext);
  const indices = [0, 1, 4, 5];

  return (
    <div className="topbar">
      <ul className="topbar-items">
        {indices.map((index) => {
          const item = data[index];
          return (
            <li key={index}>
              {item.title} <span className="topbar-sp-1">{item.prices}</span>{" "}
              <span
                className="topbar-sp-2"
                style={{
                  color: parseFloat(item.change) >= 0 ? "green" : "red",
                }}
              >
                {item.change} {item.pChange}
              </span>
            </li>
          );
        })}
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
