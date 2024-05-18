import "./App.css";
import Header from "../src/components/Header";
import Products from "../src/components/Products";
import { CartContext } from "./Context";

import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  return (
    <div id="app">
      <Router>
        <CartContext.Provider value={{ cartData, setCartData }}>
          <Header refresh={refresh} />
          <Routes>
            <Route path="/" element={<Products setRefresh={setRefresh} />} />
            <Route path="/cart" element={<Cart setRefresh={setRefresh} />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
