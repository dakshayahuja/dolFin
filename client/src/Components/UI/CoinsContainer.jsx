import axios from "axios";
import "../../Styles/table.css";
import CoinItem from "./CoinItem";
import React, { useState, useEffect } from "react";

const CryptoCoins = () => {
  const [coin, setCoins] = useState([]);
  const invalidCoins = ["APT", "ARB", "CWBTC", "GGTKN", "EDGT"];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins"
        );
        const filteredCoins = response.data.coins.filter(
          (coin) => !invalidCoins.includes(coin.symbol)
        );
        setCoins(filteredCoins.slice(0, 50));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
      <table id="cryptoContainer">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>1h Change</th>
            <th>24h Change</th>
            <th>1 Week Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coin.map((coin, index) => (
            <CoinItem key={index} coin={coin} />
          ))}
        </tbody>
      </table>
  );
};

export default CryptoCoins;
