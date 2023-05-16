function TableItem({ item }) {
  const changeClass = item.change >= 0 ? "positive" : "negative";
  const pChangeClass = item.pChange >= 0 ? "positive" : "negative";

  return (
    <tr>
      <td>{item.symbol}</td>
      <td>₹ {item.lastPrice}</td>
      <td className={changeClass}>{item.change}</td>
      <td className={pChangeClass}>{item.pChange}%</td>
      <td>{item.totalTradedVolume}</td>
    </tr>
  );
}

export default TableItem;
