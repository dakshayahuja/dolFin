import "../../Styles/home.css";
import { Link } from "react-router-dom";
const hero = () => {
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
        <Link to="/signup">
          <button className="btn btn-light button_join">Join Now</button>
        </Link>
      </div>
    </div>
  );
};

export default hero;
