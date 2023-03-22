import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../media/favicon.png";
import "./Navbar.css";

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          dolFin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Nav.Link href="#stocks">Stocks</Nav.Link>
            <Nav.Link href="#mfs">Mutual Funds</Nav.Link>
            <Nav.Link href="#crypto">Cryptocurrency</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="light">Signup</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
