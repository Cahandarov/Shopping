import { useContext } from "react";
import { MyContext } from "./Context";

export default function Product({ data }) {
  console.log(data);

  return (
    <div className="lines">
      {data && (
        data.map((product, i) => (
          <div className="product" key={i}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="proImg"
            />

            <p className="productName">{product.title}</p>
            <p className="price">
              {product.price} <span>AZN</span>
            </p>
            <button className="addToCart">ADD TO CART</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
