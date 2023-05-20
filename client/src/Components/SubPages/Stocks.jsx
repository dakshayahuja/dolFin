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
        const updatedData = data.map((item) => {
          if (item.title === "NIFTY50") {
            return {
              ...item,
              prices: `₹${response.data[0].lastPrice}`,
              change: `(${response.data[0].pChange}%)`,
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
