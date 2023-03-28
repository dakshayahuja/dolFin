import "./Landing.css";
import Header from "../UI/Header";
import logo from "../../Assets/logo-transparent.png";

const Landing = () => {
  return (
    <>
      <Header
        bgColor="#BBD6B8"
        title="Invest in Stock Market " 
        description="Search for your next home with our easy to use search tool."
        img={logo}
      />

      <Header
        bgColor="#B2A4FF"
        title="Find your next home"
        description="Search for your next home with our easy to use search tool."
        img={logo}
      />

      <Header
        bgColor="#FFEBB7"
        title="Find your next home"
        description="Search for your next home with our easy to use search tool."
        img={logo}
      />
    </>
  );
};
export default Landing;
