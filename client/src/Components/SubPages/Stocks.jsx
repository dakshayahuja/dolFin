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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dolfin-backend.herokuapp.com/api/stock-price/nifty"
        );
        const lastPrice = response.data[0].lastPrice;
        const change = response.data[0].change.toFixed(2);
        const pChange = response.data[0].pChange.toFixed(2);
        var changeSign = "";
        if (change && pChange > 0) {
          changeSign = "+";
        } else if (change && pChange < 0) {
          changeSign = "-";
        }

        const symbol = "spx";
        let lastPrice2, change2, pChange2;
        const storedData = JSON.parse(localStorage.getItem("SP500Data"));
        const oneDay = 24 * 60 * 60 * 1000;
        if (
          storedData &&
          new Date() - new Date(storedData.timestamp) < oneDay
        ) {
          lastPrice2 = storedData.lastPrice2;
          change2 = storedData.change2;
          pChange2 = storedData.pChange2;
        } else {
          const response2 = await axios.get(
            `https://dolfin-backend.herokuapp.com/api/stock-price/${symbol}`
          );
          lastPrice2 = parseFloat(response2.data.close).toFixed(2);
          var changeSign = "";
          if (response2.data.change.charAt(0) == "+") {
            changeSign = "+";
          } else if (response2.data.percent_change.charAt(0) == "-") {
            changeSign = "-";
          }
          change2 = parseFloat(response2.data.change.slice(1)).toFixed(2);
          pChange2 = parseFloat(response2.data.percent_change.slice(1)).toFixed(
            2
          );

          localStorage.setItem(
            "SP500Data",
            JSON.stringify({
              timestamp: new Date(),
              lastPrice2,
              change2,
              pChange2,
            })
          );
        }
        const updatedData = data.map((item) => {
          if (item.title === "NIFTY50") {
            return {
              ...item,
              prices: `₹${lastPrice}`,
              change: `${changeSign + change}`,
              pChange: `(${changeSign + pChange}%)`,
            };
          }
          if (item.title === "S&P 500") {
            return {
              ...item,
              prices: `₹${lastPrice2}`,
              change: `${changeSign + change2}`,
              pChange: `(${changeSign + pChange2}%)`,
            };
          }
          return item;
        });
        setData(updatedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
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
