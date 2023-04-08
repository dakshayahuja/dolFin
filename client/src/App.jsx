import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import AppBar from "./Components/Navbar";
import MobileView from "./Components/MobileView";

const Desktop = () => {
  return (
    <>
      <AppBar />
      <Footer />
    </>
  );
};

const Mobile = () => {
  return <MobileView />;
};

const App = () => {
  let page = <Desktop />;
  const pageDecide = () => {
    var isMobile = window.orientation > -1;
    if (isMobile === true) {
      page = <Mobile />;
    } else {
      page = <Desktop />;
    }
  };
  pageDecide();
  return <>{page}</>;
};

export default App;
