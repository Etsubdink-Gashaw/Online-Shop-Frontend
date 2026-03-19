import API from "../api/axios.js";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";
import CartItems from "../components/cartItems.jsx";
import CheckOut from "../components/checkOut.jsx";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/cart")
      .then((res) => {
        console.log("API response:", res.data);

        const items = res.data?.data?.items || [];
        setCartItems(items);
      })
      .catch((err) => console.log("API ERROR:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <Navbar /> 
      <h2 style={{ margin: '20px' }}>Shopping Cart</h2>
      <a href="/orders" style={{textAlign: 'right', marginRight: '200px'}}>View Orders</a>
      <div className="cart-page">     
      {loading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <CartItems items={cartItems} />
      )}
      <CheckOut items={cartItems} setCartItems={setCartItems} />
      </div>
      
    </div>
  );
}
