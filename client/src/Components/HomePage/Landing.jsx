import Header from "../UI/Header";
import logo from "../../Assets/logo-transparent.png";

const Landing = () => {
  return (
    <>
      <Header
        bgColor="#BBD6B8"
        title="Invest in Stock Markets"
        button="Get Started"
        link="stocks"
        description="Invest smarter with our app's advanced analysis and recommendations."
        img={logo}
      />

      <Header
        bgColor="#B2A4FF"
        title="Invest in Mutual Funds with Confidence"
        button="Start Investing"
        link="mutualfund"
        description="Take control of your financial future with our app's all-encompassing information on mutual funds."
        img={logo}
      />

      <Header
        bgColor="#FFEBB7"
        title="Invest in Cryptocurrency - the Future of Money"
        button="Learn More"
        link="crypto"
        description="Get a complete picture of the cryptocurrency market, including prices, volumes, and trends with our app."
        img={logo}
      />
    </>
  );
};
export default Landing;
