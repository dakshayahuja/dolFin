import "../../Styles/card.css";
import ModalView from "./ModalView";
import React, { useState, useContext } from "react";
import TradingView from "../tradingView";
import arrow from "../../Assets/arrow.png";
import { UserContext } from "../UserProvider";
import { toast, ToastContainer } from "react-toastify";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);

  const changeClass =
    props.change > 0 || props.pChange > 0 ? "positive" : "negative";

  const handleCardClick = () => {
    if (user) {
      setShow(true);
    } else {
      toast.dismiss();
      toast.info("Please login to view more information.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="cardStyle">
        <div className="mx-2">
          <img src={props.imgUrl} className="w-25 mb-2" alt="..." />
          <h5>{props.title}</h5>
          <p className="mb-1">{props.price} </p>
          <p className={`${changeClass} mb-2`}>
            {props.change} ({props.pChange})
          </p>
          <img
            src={arrow}
            className="arrowStyle"
            style={{ cursor: "pointer" }}
            width={"20%"}
            alt="arrow"
            onClick={handleCardClick}
          />
          {user ? (
            <ModalView
              onClose={() => setShow(false)}
              show={show}
              widget=<TradingView ticker={props.ticker} />
            >
              <p>This is modal body</p>
            </ModalView>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Card;
