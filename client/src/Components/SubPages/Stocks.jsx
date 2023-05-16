import AppBar from "../Navbar";
import Footer from "../Footer";
import CardHolder from "../UI/CardHolder";
import TableContainer from "../UI/TableContainer";

const Data = [
  {
    id: 0,
    title: "NIFTY50",
    prices: "Prices - Down",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Niffty50.png",
    ticker: "NIFTY50"
  },
  {
    id: 1,
    title: "SENSEX",
    prices: "Prices - Up",
    img: "https://cdn.indiawealth.in/cdn-cgi/image/quality=90,format=auto,metadata=copyright,width=100/https://cdn.indiawealth.in/public/images/Sensex.png",
    ticker: "SENSEX"
  },
  {
    id: 2,
    title: "S&P 500",
    prices: "Prices - Up",
    img: "https://s3-symbol-logo.tradingview.com/indices/s-and-p-500--big.svg",
    ticker: "SP500"
  },
  {
    id: 3,
    title: "NASDAQ",
    prices: "Prices - Down",
    img: "https://s3-symbol-logo.tradingview.com/indices/nasdaq-100--big.svg",
    ticker: "NDX"
  },
  {
    id: 4,
    title: "Dow Jones",
    prices: "Prices - Down",
    img: "https://s3-symbol-logo.tradingview.com/indices/dow-30--big.svg",
    ticker: "DJI"
  },
];



export default function Stocks() {
  
  return (
    <>
      <AppBar />
      <CardHolder data={Data} title="Major Indices" />
      <TableContainer />
      <Footer />
    </>
  );
}


