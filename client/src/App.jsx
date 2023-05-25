import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Components/UserProvider";
import { PriceDataProvider } from "./Components/PriceDataProvider";
import Login from "./Components/Account/Login";
import Signup from "./Components/Account/SignUp";
import MobileView from "./Components/MobileView";
import Crypto from "./Components/SubPages/Crypto";
import Stocks from "./Components/SubPages/Stocks";
import Landing from "./Components/HomePage/Landing";
import Dashboard from "./Components/HomePage/Dashboard";
import MutualFunds from "./Components/SubPages/MutualFunds";

const Mobile = () => {
  return <MobileView />;
};

const App = () => {
  const [user, setUser] = useState(null);

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
