import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItem from "./TableItem";
import "../../Styles/table.css";

function TableContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const storageData = localStorage.getItem("stockData");
      const lastFetchTime = localStorage.getItem("lastFetchTime");
      const halfHour = 30 * 60 * 1000;

      if (
        storageData &&
        lastFetchTime &&
        Date.now() - lastFetchTime < halfHour
      ) {
        let data = JSON.parse(storageData);
        data = data.filter((item) => item.symbol !== "NIFTY 50");
        data.sort((a, b) => a.symbol.localeCompare(b.symbol));
        setData(data);
      } else {
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
          let responseData = response.data;
          responseData.sort((a, b) => a.symbol.localeCompare(b.symbol));
          localStorage.setItem("stockData", JSON.stringify(responseData));
          localStorage.setItem("lastFetchTime", Date.now());
          setData(responseData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3 style={{ fontFamily: "Montserrat", marginBottom: "1em" }}>
        Nifty 50 Stocks
      </h3>
      <table id="stockContainer">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
            <th>Traded Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableContainer;
