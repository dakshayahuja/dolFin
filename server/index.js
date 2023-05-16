import express from "express";
import mongoose from "mongoose";
import finnhub from "finnhub";

const app = new express();
const port = 3000;
const MONGO_URL = "mongodb+srv://dakshay:dolFin@cluster.aufzslf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "ch74pk1r01qhmmuo0u30ch74pk1r01qhmmuo0u3g";
const finnhubClient = new finnhub.DefaultApi();


finnhubClient.companyBasicFinancials(
  "AAPL",
  "margin",
  (error, data, response) => {
    // console.log(data);
    // console.log(data.series.annual.totalRatio[0])
    console.log(data.metric.peAnnual)
    console.log(data.metric.beta);
  }
);

import axios from "axios";
const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {
    Indices: 'NIFTY 50'
  },
  headers: {
    'X-RapidAPI-Key': '0e149974edmsha892d922ccea2edp114ac6jsn3c48a5e07673',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  const lastPrice = response.data[0].lastPrice;
  // Data[0].lastPrice = lastPrice; // Assign the lastPrice to the first object in the array
  console.log(lastPrice);
} catch (error) {
  console.error(error);
}

