import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios.js";
export default function OrderButton({setCartItems}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
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
              } else {
                console.log("Success condition not met");
                setSuccess(false);
              }

        }catch(error){
            console.error("Error placing order.",error);
            setSuccess(false);

        }
        finally {
            setLoading(false);
          }      
    }; 
    if (success === true) {
      return (
        <div>
          <h2>Your order has been placed!</h2>
          <button onClick={() => {setCartItems([]); navigate("/");}}>Continue shopping</button>
           or 
           <button onClick={() => {setCartItems([]); navigate("/orders");}}>View Orders</button>
        </div>
      );
    } 
    if (success === false) {
       return <h2>❌ Order failed</h2>;
    }
    
    return (
        <button onClick={handleOrder} disabled={loading}>
      {loading ? "Placing Order..." : "Place Order"}
    </button>
    )
}