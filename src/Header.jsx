import cart from "./assets/bag-2.svg";

export default function Header() {
  return (
    <div id="head">
      <p className="homepage">Home Page</p>
      <div id="headrigth">
        <div id="box"></div>
        <img src={cart} alt="bag" />
        <p className="sebet">Səbət</p>
        <div id="chart_counter">0</div>
      </div>
    </div>
  );
}
