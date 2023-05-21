import React, { useEffect, useState } from "react";
import axios from "axios";
import AppBar from "../Navbar";
import Footer from "../Footer";
import CardHolder from "../UI/CardHolder";
import TableContainer from "../UI/TableContainer";
import { Row, Col, Container } from "react-bootstrap";
import NewsContainer from "../UI/NewsContainer";

const initialData = [
  {
    id: 0,
    title: "NIFTY50",
    prices: "",
    change: "",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Niffty50.png",
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
];

export default function Stocks() {
  const [data, setData] = useState(initialData);

  const fetchStockData = async (ticker, data) => {
    let newData = [...data];
    try {
      let lastPrice, change, pChange;
      const storedData = JSON.parse(localStorage.getItem({ ticker }));
      const oneDay = 24 * 60 * 60 * 1000;
      if (storedData && new Date() - new Date(storedData.timestamp) < oneDay) {
        lastPrice = storedData.lastPrice;
        change = storedData.change;
        pChange = storedData.pChange;
        changeSign = storedData.changeSign;
      } else {
        const response = await axios.get(
          `https://dolfin-backend.herokuapp.com/api/stock-price/${ticker}`
        );
        lastPrice = parseFloat(response.data.close.slice(1)).toFixed(2);
        change = response.data.change;
        var changeSign = "";
        if (change.charAt(0) == "+") {
          changeSign = "+";
        } else if (change.charAt(0) == "-") {
          changeSign = "-";
        }
        change = parseFloat(change.slice(1)).toFixed(2);
        pChange = parseFloat(response.data.percent_change.slice(1)).toFixed(2);
        localStorage.setItem(
          ticker,
          JSON.stringify({
            timestamp: new Date(),
            lastPrice,
            change,
            pChange,
            changeSign,
          })
        );
      }
      newData = newData.map((item) => {
        if (item.ticker === ticker) {
          return {
            ...item,
            prices: `$${lastPrice}`,
            change: `${changeSign + change}`,
            pChange: `(${changeSign + pChange}%)`,
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
      const change = response.data[0].change.toFixed(2);
      const pChange = response.data[0].pChange.toFixed(2);
      var changeSign = "";
      if (change > 0) {
        changeSign = "+";
      } else if (change < 0) {
        changeSign = "-";
      }

      newData = newData.map((item) => {
        if (item.title === "NIFTY50") {
          return {
            ...item,
            prices: `₹${lastPrice}`,
            change: `${changeSign + change}`,
            pChange: `(${changeSign + pChange}%)`,
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

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      let newData = [...data];
      try {
        newData = await fetchData(newData);
        newData = await fetchStockData("SPX", newData);
        newData = await fetchStockData("NDX", newData);
        newData = await fetchStockData("DJI", newData);
        setData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndSetState();
  }, []);

  return (
    <>
      <AppBar />
      <CardHolder data={data} title="Major Indices" />
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col xs="auto">
            <TableContainer />
          </Col>
          <Col xs={5}>
            <NewsContainer />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
