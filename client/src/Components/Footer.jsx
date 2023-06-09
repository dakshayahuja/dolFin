import React from "react";
import "../Styles/footer.css";
import { Link } from "react-router-dom";
import logo_tp from "../Assets/logo-light.png";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 my-auto">
          <img src={logo_tp} alt="logo" id="logo_tp" />
          <h5>Investment Solutions That Work For You.</h5>
          <p className="pt-3">
            <span className="fw-bold">Contact Us:</span> dolfin@gmail.com
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mt-4 d-flex align-items-center justify-content-center">
          <div>
            <h5 className="text-uppercase pb-md-1 fw-semibold">Pages</h5>
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
        </div>

        <div className="col-md-3 mt-4 d-flex align-items-center justify-content-center">
          <div>
            <h5 className="text-uppercase pb-md-1 fw-semibold">References</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroku
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://rapidapi.com/hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RapidAPI
                </a>
              </li>
              <li>
                <a
                  href="https://in.tradingview.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TradingView
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center pb-3 pt-4">
      © 2023 Copyright: All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
