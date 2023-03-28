import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
      <div
        className="container-fluid py-5 header"
        style={{ backgroundColor: props.bgColor }}
      >
        <div className="row p-5 header-content">
          <div className="col-7 header-text">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button className="btn-header" type="btn"><Link to={`/${props.link}`}>{props.button}</Link></button>
          </div>
          <div className="col-5 header-img">
            <img src={props.img} alt="img1" className="img-fluid"></img>
          </div>
        </div>
      </div>
  );
}

export default Header;