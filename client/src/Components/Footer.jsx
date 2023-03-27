import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 fixed-bottom">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 my-auto">
          <h5>DOLFIN - Investment Solutions That Work For You.</h5>
          <p className="pt-3"><span className="fw-bold">Contact Us:</span> dolfin@gmail.com</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase pb-md-1">Pages</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/stocks">Stocks</Link>
            </li>
            <li>
            <Link to="/mutualfund">Mutual Funds</Link>
            </li>
            <li>
            <Link to="/crypto">Crypto</Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase pb-md-1">References</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.moneycontrol.com/">Moneycontrol</a>
            </li>
            <li>
              <a href="https://in.tradingview.com/">TradingView</a>
            </li>
            <li>
              <a href="https://finnhub.io/">Finnhub</a>
            </li>
            <li>
              <a href="https://finance.yahoo.com/">Yahoo Finance</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: All Rights Reserved</div>
  </footer>
);

export default Footer;
