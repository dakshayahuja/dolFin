import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PriceDataContext = createContext();

export const PriceDataProvider = ({ children }) => {
  const initialData = [
    {
      id: 0,
      title: "NIFTY50",
      prices: "",
      change: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1684696521/nse_pp0lsk.png",
      widget_ticker: "NIFTY50",
      ticker: "NIFTY50",
    },
    {
      id: 1,
      title: "S&P 500",
      prices: "",
      change: "",
      img: "https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg",
      widget_ticker: "SP500",
      ticker: "SPX",
    },
    {
      id: 2,
      title: "NASDAQ",
      prices: "",
      change: "",
      img: "https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg",
      widget_ticker: "NDX",
      ticker: "NDX",
    },
    {
      id: 3,
      title: "Dow Jones",
      prices: "",
      change: "",
      img: "https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg",
      widget_ticker: "DJI",
      ticker: "DJI",
    },
    {
      id: 4,
      title: "BTC/USD",
      prices: "",
      change: "",
      img: "https://static.coinstats.app/coins/1650455588819.png",
      widget_ticker: "BTC",
      ticker: "BTC",
    },
    {
      id: 5,
      title: "ETH/USD",
      prices: "",
      change: "",
      img: "https://static.coinstats.app/coins/1650455629727.png",
      widget_ticker: "ETH",
      ticker: "ETH",
    },
  ];

  const [data, setData] = useState(initialData);

  const fetchStockData = async (ticker, data) => {
    let newData = [...data];
    try {
      let lastPrice, change, pChange;
      const storedData = JSON.parse(localStorage.getItem(ticker));
      const oneDay = 24 * 60 * 60 * 1000;
      if (storedData && new Date() - new Date(storedData.timestamp) < oneDay) {
        lastPrice = storedData.lastPrice;
        change = storedData.change;
        pChange = storedData.pChange;
      } else {
        const response = await axios.get(
          `https://dolfin-backend.herokuapp.com/api/stock-price/${ticker}`
        );
        lastPrice = parseFloat(response.data.close).toFixed(2);
        change = response.data.change;
        change = parseFloat(change).toFixed(2);
        pChange = parseFloat(response.data.percent_change).toFixed(2);
        localStorage.setItem(
          ticker,
          JSON.stringify({
            timestamp: new Date(),
            lastPrice,
            change,
            pChange,
          })
        );
      }
      newData = newData.map((item) => {
        if (item.ticker === ticker) {
          return {
            ...item,
            prices: `$${lastPrice}`,
            change: `${change}`,
            pChange: `(${pChange}%)`,
          };
        }
        return item;
      });
      return newData;
    } catch (error) {
      console.error(error);
      return data;
    }
  };

  const fetchData = async (data) => {
    let newData = [...data];
    try {
      const response = await axios.get(
        "https://dolfin-backend.herokuapp.com/api/stock-price/nifty"
      );
      const lastPrice = response.data[0].lastPrice;
      var change = response.data[0].change.toFixed(2);
      var pChange = response.data[0].pChange.toFixed(2);

      newData = newData.map((item) => {
        if (item.title === "NIFTY50") {
          return {
            ...item,
            prices: `₹${lastPrice}`,
            change: `${change}`,
            pChange: `(${pChange}%)`,
          };
        }
        return item;
      });
      return newData;
    } catch (error) {
      console.error(error);
      return data;
    }
  };

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(
        "https://dolfin-backend.herokuapp.com/api/crypto"
      );
      const btcData = response.data.coins.find(
        (coin) => coin.name === "Bitcoin"
      );
      const ethData = response.data.coins.find(
        (coin) => coin.name === "Ethereum"
      );

      if (btcData && ethData) {
        setData((prevData) => {
          let newData = [...prevData];
          newData[4] = {
            ...newData[4],
            prices: `$${btcData.price.toFixed(2)}`,
            change: `$${btcData.priceChange1d.toFixed(2)}`,
          };
          newData[5] = {
            ...newData[5],
            prices: `$${ethData.price.toFixed(2)}`,
            change: `$${ethData.priceChange1d.toFixed(2)}`,
          };
          return newData;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      let newData = [...data];
      try {
        newData = await fetchData(newData);
        newData = await fetchStockData("SPX", newData);
        newData = await fetchStockData("NDX", newData);
        newData = await fetchStockData("DJI", newData);
        setData(newData);
        await fetchCryptoData();
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndSetState();
  }, []);



  return (
    <PriceDataContext.Provider value={data}>
      {children}
    </PriceDataContext.Provider>
  );
};