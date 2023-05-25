import { useContext, useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Nav, Navbar, Dropdown, Container } from "react-bootstrap";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { PriceDataContext } from "./PriceDataProvider";
import logo from "../Assets/favicon.png";
import "../Styles/navbar.css";
import { UserContext } from "./UserProvider";

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

const RenderNavbar = ({ user, buttonText, handleSignOut }) => (
  <Navbar collapseOnSelect expand="lg" className="navbar" id="nav1">
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
        {user ? (
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">{buttonText}</Dropdown.Toggle>
            <Dropdown.Menu onClick={handleSignOut}>
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <span>
            <Link to="/login">Login</Link>
          </span>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

function AppBar() {
  const { user, setUser } = useContext(UserContext);
  const [buttonText, setButtonText] = useState("Login");
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const login = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setButtonText(
          currentUser.displayName ? currentUser.displayName : currentUser.email
        );
      } else {
        setUser(null);
        setButtonText("Login");
      }
    });

    return () => {
      login();
    };
  }, [auth, setUser]);

  return (
    <>
      <Topbar />
      <RenderNavbar
        user={user}
        buttonText={buttonText}
        handleSignOut={handleSignOut}
      />
      <Outlet />
    </>
  );
}

export default AppBar;
