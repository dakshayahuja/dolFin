import img from "../../Assets/favicon.png";
import Card from "./Card";
const CardHolder = (props) => {
  return (
    <div className="cardsWrapper">
      <Card title="BTC" subtitle="Hello from bitcoin" img={img} />
      <Card title="BTC" subtitle="Hello from bitcoin" img={img} />
      <Card title="BTC" subtitle="Hello from bitcoin" img={img} />
      <Card title="BTC" subtitle="Hello from bitcoin" img={img} />
      <Card title="BTC" subtitle="Hello from bitcoin" img={img} />
    </div>
  );
};

export default CardHolder;
