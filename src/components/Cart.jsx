import close from "../assets/Close.svg";
import { useState, useEffect } from "react";

import axios from "axios";
import ItemInCart from "./ItemInCart";

export default function Cart({ setRefresh }) {
  const [data, setData] = useState([]);
  const [deleteItem, setDeleteItem] = useState(false);

  const [upDate, setUpdate] = useState(false);
  var subtotal = data.reduce((acc, cou) => acc + cou.price * cou.count, 0);
  function DeleteProduct(id) {
    axios.delete(`http://localhost:3000/cart/${id}`).then((res) => {
      console.log(res.data);
      setDeleteItem((prev) => !prev);
      setRefresh((prev) => !prev);
    });
  }

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [deleteItem, upDate]);

  return (
    <div id="cart">
      <img src={close} alt="close" id="close" />
      <p className="shopping_cart">Shopping Cart</p>
      <div id="cart_Main">
        {data.map((pro, i) => (
          <ItemInCart
            pro={pro}
            DeleteProduct={DeleteProduct}
            key={i}
            upDate={upDate}
          />
        ))}
      </div>
      <div className="chart_bottom">
        <div id="checkout_BOX">
          <div id="subtotal">
            <p className="subtotal_text checkout_text">Subtotal</p>
            <p className="subtotal_price checkout_text">
              {subtotal}
              <span>AZN</span>
            </p>
          </div>
          <div id="shipping">
            <p className="shipping_text checkout_text">Shipping estimate</p>
            <p className="shipping_price checkout_text">
              50<span>AZN</span>
            </p>
          </div>
          <div id="tax">
            <p className="tax_text checkout_text">Tax estimate</p>
            <p className="tax_price checkout_text">
              {(subtotal * 18) / 100}
              <span>AZN</span>
            </p>
          </div>

          <div id="total">
            <p className="total_text">Order Total</p>
            <p className="total_price">
              {subtotal + (subtotal * 18) / 100 + 50}
              <span>AZN</span>
            </p>
          </div>
        </div>
        <button id="checkout_button">Checkout</button>
        <p id="contTO_shopping">Continue shopping</p>
      </div>
    </div>
  );
}
