import axios from "axios";
import { useEffect, useState } from "react";

export default function Products({ setRefresh }) {
  const [data, setData] = useState(null);

  async function getData() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function PostToCart(product) {
    axios
      .post("http://localhost:3000/cart", product)
      .then((res) => console.log(res));
    setRefresh((prev) => !prev);
  }

  // const { setCartData } = useContext(CartContext);
  return (
    <div id="products">
      {data
        ? data.map((product, i) => (
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
              <button
                className="addToCart"
                onClick={() => PostToCart({ ...product, count: 1 })}
              >
                ADD TO CART
              </button>
            </div>
          ))
        : ""}
    </div>
  );
}
