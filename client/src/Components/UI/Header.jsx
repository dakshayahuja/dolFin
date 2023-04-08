import "../../Styles/header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div
      className="container-fluid header"
      style={{ backgroundColor: props.bgColor, color: "white" }}
    >
      <div className="row header-content">
        <div
          className="col-8 header-text"
          style={{ padding: props.textPadding }}
        >
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button className="btn-header" type="btn">
            <Link to={`/${props.link}`}>{props.button}</Link>
          </button>
        </div>
        <div className="col-4 header-img" style={{ padding: props.imgPadding }}>
          <img
            src={props.img}
            alt="img1"
            className={props.className}
            style={{ height: props.imgHeight, margin: props.margin }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
