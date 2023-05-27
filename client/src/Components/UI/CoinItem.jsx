import { useState } from "react";
import ModalView from "./ModalView";
import TradingView from "../tradingView";
export default function CoinItem({ coin }) {
  const [show, setShow] = useState(false);
  const formatMarketCap = (cap) => {
    let billionCap = cap / 1e9;
    return `$${billionCap.toFixed(2)}B`;
  };
  return (
    <>
      <tr>
        <td onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
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
      <ModalView
        onClose={() => setShow(false)}
        show={show}
        widget=<TradingView ticker={`CRYPTO:${coin.symbol}USD`} />
      ></ModalView>
    </>
  );
}
