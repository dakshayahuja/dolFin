import arrow from "../../Assets/arrow.png";
import "../../Styles/card.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import TradingView from "../tradingView";

const ModalView = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <TradingView ticker={props.ticker} />
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

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
          style={{cursor: "pointer"}}
          width="20%"
          alt="arrow"
          onClick={() => setShow(true)}
        />
        <ModalView
          title="My Modal"
          onClose={() => setShow(false)}
          show={show}
          ticker={props.ticker}
        >
          <p>This is modal body</p>
        </ModalView>
      </div>
    </div>
  );
};

export default Card;
