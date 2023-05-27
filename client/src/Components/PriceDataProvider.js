import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PriceDataContext = createContext();

export const PriceDataProvider = ({ children }) => {
  const initialData = [
    {
      id: 0,
      title: "Nifty 50",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1684696521/nse_pp0lsk.png",
      widget_ticker: "NIFTY50",
    },
    {
      id: 1,
      title: "Nifty Bank",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1684696521/nse_pp0lsk.png",
      widget_ticker: "BANKNIFTY",
    },
    {
      id: 2,
      title: "Sensex",
      altTitle: "BSE Sensex",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685126167/bse3_ap2ye5.png",
      widget_ticker: "SENSEX",
    },
    {
      id: 3,
      title: "India VIX",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125370/india-flag-round-circle-icon_pasjmd.png",
      widget_ticker: "INDIAVIX",
    },
    {
      id: 4,
      title: "Dow Jones",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125474/usa-flag-round-circle-icon_k35yhv.png",
      widget_ticker: "DJI",
    },
    {
      id: 5,
      title: "S&P 500",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125474/usa-flag-round-circle-icon_k35yhv.png",
      widget_ticker: "SP500",
    },
    {
      id: 6,
      title: "Nasdaq",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125474/usa-flag-round-circle-icon_k35yhv.png",
      widget_ticker: "IXIC",
    },
    {
      id: 7,
      title: "DAX",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125473/germany-flag-round-circle-icon_mtibzi.png",
      widget_ticker: "XETR:DAX",
    },
    {
      id: 8,
      title: "FTSE 100",
      price: "",
      change: "",
      pChange: "",
      img: "https://res.cloudinary.com/dmmhdkrul/image/upload/v1685125474/uk-flag-round-circle-icon_zksb6q.png",
      widget_ticker: "FTSE",
    },
  ];

  const [data, setData] = useState([]);

  const fetchGlobalData = async () => {
    let newData = [...initialData];
    try {
      const response = await axios.get(
        "https://global-stock-market-api-data.p.rapidapi.com/major_global_indices_by_price",
        {
          headers: {
            "X-RapidAPI-Key":
              "a1b2dea5bamshf319786f27ab9adp1b3d6bjsnf1013f76e2e9",
            "X-RapidAPI-Host": "global-stock-market-api-data.p.rapidapi.com",
          },
        }
      );

      response.data.forEach((item) => {
        let index = newData.findIndex(
          (x) => x.title === item.name || x.altTitle === item.name
        );
        if (index !== -1) {
          const currencySymbol = index < 4 ? "₹" : "$";
          newData[index] = {
            ...newData[index],
            price: `${currencySymbol}${item.last}`,
            change: `${item.change}`,
            pChange: `${item.changePercentage}`,
          };
        }
      });
      setData(newData);
      localStorage.setItem("globalData", JSON.stringify(newData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("globalData"));
    if (savedData) {
      setData(savedData);
    } else {
      fetchGlobalData();
    }

    const intervalId = setInterval(() => {
      fetchGlobalData();
    }, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <PriceDataContext.Provider value={{ data, updateData: fetchGlobalData }}>
      {children}
    </PriceDataContext.Provider>
  );
};
