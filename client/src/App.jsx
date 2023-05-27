import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import Login from "./Components/Account/Login";
import Signup from "./Components/Account/SignUp";
import { Routes, Route } from "react-router-dom";
import MobileView from "./Components/MobileView";
import Crypto from "./Components/SubPages/Crypto";
import Stocks from "./Components/SubPages/Stocks";
import { UserProvider } from "./Components/UserProvider";
import MutualFunds from "./Components/SubPages/MutualFunds";
import { PriceDataProvider } from "./Components/PriceDataProvider";

const Mobile = () => {
  return <MobileView />;
};

const App = () => {
  let page = <HomePage />;
  const pageDecide = () => {
    var isMobile = window.orientation > -1;
    if (isMobile === true) {
      page = <Mobile />;
    }
  };
  pageDecide();
  return (
    <>
      <PriceDataProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={page} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/mutualfund" element={<MutualFunds />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </UserProvider>
      </PriceDataProvider>
    </>
  );
};

export default App;
