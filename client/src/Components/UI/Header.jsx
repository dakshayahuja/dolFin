import "./Header.css";

const Header = (props) => {
  const bgcolor = props.bgColor;
  return (
    <header className="header">
      <div
        className="container-fluid py-5 header"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="row p-5">
          <div className="col-6">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>
          <div className="col-6">
            <img src={props.img} alt="img1" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;