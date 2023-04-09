import Header from "../UI/Header";
import Stock from "../../Assets/stock.png";
import Crypto from "../../Assets/crypto.png";
import MF from "../../Assets/MF.png";
import Hero from "../UI/Hero";
import AppBar from "../Navbar";
import Footer from "../Footer";

const Landing = () => {
  return (
    <>
    <AppBar />
      <Hero />
      <div>
        <Header
          bgColor="#023e8a"
          title={
            <span>
              Invest in <span style={{ color: "#fe633d" }}>Stock Markets</span>
            </span>
          }
          button="Get Started"
          link="stocks"
          description="Invest smarter with our app's advanced analysis and recommendations."
          img={Stock}
          className={"img-fluid"}
          textPadding="12vw 0 8vw 0"
          imgPadding="6vw 0"
        />

        <Header
          bgColor="#037971"
          title={
            <span>
              Invest in <span style={{ color: "#fb8500" }}>Mutual Funds</span>{" "}
              with Confidence
            </span>
          }
          button="Start Investing"
          link="mutualfund"
          description={
            <span>
              Take control of your financial future with our app's <br></br>{" "}
              all-encompassing information on mutual funds.
            </span>
          }
          img={MF}
          imgHeight="29vw"
          margin="0 0 0 6vw"
          textPadding="11vw 0"
          imgPadding="6vw 0"
        />

        <Header
          bgColor="#ce4257"
          // bgColor="#e5989b"
          title={
            <span>
              Invest in <span style={{ color: "#023047" }}>Cryptocurrency</span>{" "}
              - the Future of Money
            </span>
          }
          button="Learn More"
          link="crypto"
          description={
            <span>
              Get a complete picture of the cryptocurrency market, including{" "}
              <br></br> prices, volumes, and trends with our app.
            </span>
          }
          img={Crypto}
          className={"img-fluid"}
          textPadding="10vw 2vw 10vw 0"
          imgPadding="8vw 0"
          margin="0 0 0 2.5vw"
        />
      </div>
      <Footer />
    </>
  );
};
export default Landing;
