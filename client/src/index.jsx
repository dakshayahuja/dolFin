import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Stocks from "./Components/SubPages/Stocks";
// import MutualFunds from "./Components/SubPages/MutualFunds";
// import Crypto from "./Components/SubPages/Crypto";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
