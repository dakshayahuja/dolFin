import { useState } from "react";
import arrow from "../../Assets/arrow.png";
import "../../Styles/card.css";
import ModalView from "./ModalView";

const Card = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="cardStyle">
      <div className="mx-2">
        <img src={props.imgUrl} className="w-25 mb-2" alt="..." />
        <h5>{props.title}</h5>
        <p className="mb-2">{props.prices}</p>
        <img
          src={arrow}
          className="arrowStyle"
          width="20%"
          alt="arrow"
          onClick={() => setShow(true)}
        />
        <ModalView title="My Modal" onClose={() => setShow(false)} show={show} ticker={props.ticker}>
          <p>This is modal body</p>
        </ModalView>
      </div>
    </div>
  );
};

export default Card;
