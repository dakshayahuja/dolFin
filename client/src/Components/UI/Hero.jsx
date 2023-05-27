import "../../Styles/home.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Components/UserProvider";

const Hero = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="hero">
      <div id="hero-text" className="text-center">
        <h2 className="heading1">Invest like a Pro</h2>
        <h1 className="heading2">Watch your Money Grow</h1>
      </div>
      <div className="text-center pt-5">
        <p className="button-top-text">
          Get the inside scoop on the latest financial trends.
        </p>
        {user ? (
          <Link to="/stocks">
            <button className="btn btn-light button_join">Get Started</button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="btn btn-light button_join">Join Now</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
