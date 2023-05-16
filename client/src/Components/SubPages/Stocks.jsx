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
    ticker: "NIFTY50",
  },
  {
    id: 1,
    title: "SENSEX",
    prices: "",
    change: "",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Sensex.png",
    ticker: "SENSEX",
  },
  {
    id: 2,
    title: "S&P 500",
    prices: "",
    change: "",
    img: "https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg",
    ticker: "SP500",
  },
  {
    id: 3,
    title: "NASDAQ",
    prices: "",
    change: "",
    img: "https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg",
    ticker: "NDX",
  },
  {
    id: 4,
    title: "Dow Jones",
    prices: "",
    change: "",
    img: "https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg",
    ticker: "DJI",
  },
];

export default function Stocks() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://latest-stock-price.p.rapidapi.com/price",
        params: {
          Indices: "NIFTY 50",
        },
        headers: {
          "X-RapidAPI-Key":
            "0e149974edmsha892d922ccea2edp114ac6jsn3c48a5e07673",
          "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data)
        const lastPrice = response.data[0].lastPrice;
        const pChange = response.data[0].pChange;
        const updatedData = data.map((item) => {
          if (item.title === "NIFTY50") {
            return {
              ...item,
              prices: `₹${lastPrice}`,
              change: `(${pChange}%)`
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

const Data = [
  {
    id: 0,
    title: "NIFTY50",
    prices: "",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Niffty50.png",
    ticker: "NIFTY50",
  },
  {
    id: 1,
    title: "SENSEX",
    prices: "Prices - Up",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Sensex.png",
    ticker: "SENSEX",
  },
  {
    id: 2,
    title: "S&P 500",
    prices: "Prices - Up",
    img: "https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg",
    ticker: "SP500",
  },
  {
    id: 3,
    title: "NASDAQ",
    prices: "Prices - Down",
    img: "https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg",
    ticker: "NDX",
  },
  {
    id: 4,
    title: "Dow Jones",
    prices: "Prices - Down",
    img: "https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg",
    ticker: "DJI",
  },
];
