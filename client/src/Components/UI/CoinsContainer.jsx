import axios from "axios";
import "../../Styles/table.css";
import CoinItem from "./CoinItem";
import React, { useState, useEffect } from "react";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const invalidCoins = ["APT", "ARB", "CWBTC", "GGTKN", "EDGT"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedCoins = localStorage.getItem("storedCoins");
        const lastFetchTime = localStorage.getItem("lastFetchTime");
        const currentTime = Date.now();

        if (
          storedCoins &&
          lastFetchTime &&
          currentTime - lastFetchTime <= 120000
        ) {
          setCoins(JSON.parse(storedCoins));
        } else {
          const response = await axios.get(
            "https://api.coinstats.app/public/v1/coins"
          );
          const filteredCoins = response.data.coins.filter(
            (coin) => !invalidCoins.includes(coin.symbol)
          );
          const newCoins = filteredCoins.slice(0, 50);
          setCoins(newCoins);
          localStorage.setItem("storedCoins", JSON.stringify(newCoins));
          localStorage.setItem("lastFetchTime", currentTime.toString());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 120000);

    return () => clearInterval(interval);
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
        {coins.map((coin, index) => (
          <CoinItem key={index} coin={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoCoins;
