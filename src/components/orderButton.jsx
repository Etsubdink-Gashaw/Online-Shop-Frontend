import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";
export default function OrderButton({setCartItems}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
    const handleOrder= async()=> {
        try{
            setLoading(true);
            const response= await API.post('/orders',
                {
                        name:"John Doe",
                        email:"john.doe@example.com",
                        address:"123 Main St, Anytown, USA",
                       }
            );
            const data = response.data;
            console.log("Order response:", data);
            if (data.success) {
                console.log("Success condition met, setting success to true");
                alert("✅ Order placed!");
                setSuccess(true);
                // Delay clearing cart to allow success message to show
                setTimeout(() => setCartItems([]), 100);
              } else {
                console.log("Success condition not met");
              }

        }catch(error){
            console.error("Error placing order.",error);
        }
        finally {
            setLoading(false);
          }      
    }; 
    if (success) {
        // navigate("/orders");
            return <h2>Your order has been placed!</h2>;
            alert(<h1>🎉 Order Placed Successfully!</h1>
                <p>Thank you for your purchase.</p>)
          }
    return (
        <button onClick={handleOrder} disabled={loading}>
      {loading ? "Placing Order..." : "Place Order"}
    </button>
    )
}