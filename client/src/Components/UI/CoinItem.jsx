import React, { useState, useContext } from "react";
import ModalView from "./ModalView";
import TradingView from "../tradingView";
import { UserContext } from "../UserProvider";
import { toast } from "react-toastify";

export default function CoinItem({ coin }) {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const handleCoinClick = () => {
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

  const formatMarketCap = (cap) => {
    let value;
    if (cap >= 1e9) {
      value = (cap / 1e9).toFixed(2) + "B";
    } else {
      value = (cap / 1e6).toFixed(2) + "M";
    }
    return `$${value}`;
  };

  return (
    <>
      <tr>
        <td onClick={handleCoinClick} style={{ cursor: "pointer" }}>
          <img src={coin.icon} width="40px" className="me-3" />
          {coin.symbol}
        </td>
        <td>{coin.name}</td>
        <td>${coin.price.toFixed(6)}</td>
        <td className={coin.priceChange1h > 0 ? "positive" : "negative"}>
          {coin.priceChange1h}%
        </td>
        <td className={coin.priceChange1d > 0 ? "positive" : "negative"}>
          {coin.priceChange1d}%
        </td>
        <td className={coin.priceChange1w > 0 ? "positive" : "negative"}>
          {coin.priceChange1w}%
        </td>
        <td>{formatMarketCap(coin.marketCap)}</td>
      </tr>
      {user ? (
        <ModalView
          onClose={() => setShow(false)}
          show={show}
          widget=<TradingView ticker={`CRYPTO:${coin.symbol}USD`} />
        ></ModalView>
      ) : null}
    </>
  );
}
