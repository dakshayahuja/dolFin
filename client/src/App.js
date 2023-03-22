import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
const App = () => {
  let page = <Landing />;
  const pageDecide = () => {
    var login = false;
    if (login === true) {
      page = <Dashboard />;
    } else {
      page = <Landing />;
    }
  };
  pageDecide();
  return (
    <>
      <AppBar />
      {page}
    </>
  );
};

export default App;
