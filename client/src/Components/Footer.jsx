import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">dolFin</h5>
          <p>Investment Solutions That Work For You.</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Pages</h5>
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
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: All Rights Reserved</div>
  </footer>
);

export default Footer;
