import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemInCart({ pro, DeleteProduct, upDate }) {
  const [count, setCount] = useState(pro.count);
  function EditCount(id, newObj) {
    axios
      .put(`http://localhost:3000/cart/${id}`, newObj)
      .then((res) => upDate((prev) => !prev));
  }

  useEffect(() => {
    EditCount(pro.id, { ...pro, count: +count });
  }, [count]);
  return (
    <div className="productsIN_cart">
      <div className="productsIN_cartLEFT">
        <img src={pro.thumbnail} alt={pro.title} className="product_photo" />
        <div className="product_details">
          <p className="productNameIN-Cart">{pro.title}</p>
          <p className="pro_detail">{pro.description}</p>
          <p className="other_details">In stock: {pro.stock}</p>
        </div>
      </div>
      <div className="productsIN_cartCENTER">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="quantity"
        />
        <p className="remove" onClick={() => DeleteProduct(pro.id)}>
          Remove
        </p>
      </div>

      <p className="priceIN_CART">
        <span>AZN</span> {pro.price * count}
      </p>
    </div>
  );
}
