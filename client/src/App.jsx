import MobileView from "./Components/MobileView";
import Dashboard from "./Components/HomePage/Dashboard";
import Login from "./Components/Account/Login";
import Stocks from "./Components/SubPages/Stocks";
import Crypto from "./Components/SubPages/Crypto";
import Signup from "./Components/Account/SignUp";
import MutualFunds from "./Components/SubPages/MutualFunds";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/HomePage/Landing";
import { PriceDataProvider } from "./Components/PriceDataProvider";

const Mobile = () => {
  return <MobileView />;
};

const App = () => {
  var isLoggedIn = false;
  let page = <Landing />;
  const pageDecide = () => {
    var isMobile = window.orientation > -1;
    if (isMobile === true) {
      page = <Mobile />;
    } else if (isLoggedIn === true) {
      page = <Dashboard />;
    } else {
      page = <Landing />;
    }
  };
  pageDecide();
  return (
    <>
      <PriceDataProvider>
        <Routes>
          <Route path="/" element={page} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/mutualfund" element={<MutualFunds />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PriceDataProvider>
    </>
  );
};

export default App;
