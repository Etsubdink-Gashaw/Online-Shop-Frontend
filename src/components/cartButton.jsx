import API from "../api/axios";
export default function AddToCart({product}) {
    const addToCart = async() => {
        try{const response= await fetch("http://localhost:5000/cart",
          {
            method: "POST",
            headers: {"Content-Type":"application/json",},
            body: JSON.stringify({
              productId:product._id,
              quantity: 1,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to add to cart");
        }
        const data= await response.json();
        console.log("Added to cart.",data)
    
        }catch(error){console.error("Error adding to cart.",error)}
      };

      return(
        <div>
            <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
      )
}