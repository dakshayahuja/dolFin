import arrow from "../../Assets/arrow.png";
import "../../Styles/card.css";
const Card = (props) => {
  return (
      <div className="cardStyle">
        <div className="mx-2">
          <img src={props.img} className="w-25" alt="..." />
          <h5>{props.title}</h5>
          <p>{props.subtitle}</p>
          <a href="/">
            <img src={arrow} className="arrowStyle" width="20%" alt="arrow"/>
          </a>
        </div>
      </div>
  );
};

export default Card;
