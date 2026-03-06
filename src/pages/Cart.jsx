import API from "../api/axios.js";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import CartItems from "../components/cartItems.jsx";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    API.get("/cart")
    .then(res=>{
      console.log("Api response:", res.data.cartItems);
      setCartItems(res.data.cartItems);
    }).catch(err=> console.log("API ERROR:", err))
  }, []);
  return (
    <div className="page">
      <Navbar />
      <h2>Shopping Cart</h2>
      <CartItems items={cartItems} />
    </div>
  );
}