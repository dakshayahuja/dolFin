function CoinItem({ coin }) {
  return (
    <tr>
      <td>
        <img src={coin.icon} width="40px" />
      </td>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>{coin.price}</td>
      <td>{coin.volume}</td>
      <td>{coin.marketCap}</td>
      <td>{coin.priceChange1d}</td>
    </tr>
  );
}

export default CoinItem;
