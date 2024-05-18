import cart from "../assets/bag-2.svg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Header({ refresh }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((res) => {
      setCount(res.data.length);
    });
  }, [refresh]);
  return (
    <div id="head">
      <NavLink to="/">
        <p className="homepage">Home Page</p>
      </NavLink>

      <NavLink to="/cart">
        <div id="headrigth">
          <p className="sebet">Səbət</p>
          <div id="box"></div>
          <img src={cart} alt="bag" />
          <div id="chart_counter">{count}</div>
        </div>
      </NavLink>
    </div>
  );
}
