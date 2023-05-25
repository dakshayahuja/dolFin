import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinItem from "./CoinItem";

const CryptoCoins = () => {
  const [coin, setCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dolfin-backend.herokuapp.com/api/crypto"
        );
        setCoins(response.data.coins.slice(0,10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {coin.map((coin, index) => (
            <CoinItem key={index} coin={coin} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CryptoCoins;
