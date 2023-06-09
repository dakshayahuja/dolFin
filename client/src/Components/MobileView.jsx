import "../Styles/mobileview.css";
import logo from "../Assets/logo-light.png";
import appStore from "../Assets/App_Store.png";
import playStore from "../Assets/Play_Store.png";

const MobileView = () => {
  return (
    <div id="mv">
      <img src={logo} alt="logo" id="logo" />
      <h3>Investment solutions that work for you.</h3>
      <h5>Coming soon on</h5>
      <img src={playStore} alt="play_store" style={{ width: "60vw" }}></img>
      <img src={appStore} alt="app_store" style={{ width: "53.75vw" }}></img>
      <p>*Currently supported on desktop browsers only.</p>
    </div>
  );
};

export default MobileView;
