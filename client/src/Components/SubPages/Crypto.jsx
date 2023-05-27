import AppBar from "../AppBar";
import Footer from "../Footer";
import CryptoCoins from "../UI/CoinsContainer";

export default function Crypto() {
  return (
    <>
      <AppBar />
      <h1
        className="mt-4 mb-3 text-center"
        style={{ fontFamily: "Montserrat" }}
      >
        Top Cryptocurrencies
      </h1>
      <CryptoCoins />
      <Footer />
    </>
  );
}
