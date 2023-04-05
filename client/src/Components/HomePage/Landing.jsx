import Header from "../UI/Header";
import Stock from "../../Assets/stock.png";
import Crypto from "../../Assets/crypto.png"
import MF from "../../Assets/MF.png"
import { Fragment } from "react";

const Landing = () => {
  return (
    <>
      <Header
        bgColor="#023e8a"
        title={<span>Invest in <span id="head-title">Stock Markets</span></span>}
        button="Get Started"
        link="stocks"
        description="Invest smarter with our app's advanced analysis and recommendations."
        img={Stock}
        className = {"img-fluid"}
        textPadding="12vw 0 8vw 0"
        imgPadding="6vw 0"
      />

      <Header
        bgColor="#037971"
        title={<span>Invest in <span id="head-title">Mutual Funds</span> with Confidence</span>}
        button="Start Investing"
        link="mutualfund"
        description="Take control of your financial future with our app's all-encompassing information on mutual funds."
        img={MF}
        imgHeight="29vw"
        margin="0 0 0 6vw"
        textPadding="11vw 0"
        imgPadding="6vw 0"
      />

      <Header
        bgColor="#480ca8"
        title={<span>Invest in <span id="head-title">Cryptocurrency</span> - the Future of Money</span>}
        button="Learn More"
        link="crypto"
        description="Get a complete picture of the cryptocurrency market, including prices, volumes, and trends with our app."
        img={Crypto}
        className = {"img-fluid"}
        textPadding="10vw 2vw 10vw 0"
        imgPadding="8vw 0"
        margin="0 0 0 2.5vw"
      />
    </>
  );
};
export default Landing;
