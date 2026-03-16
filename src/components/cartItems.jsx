import defaultImage from "../assets/product.png";
export default function CartItems({items,}){
  return (
    <div className="cart-items">
      {items.map(item => (
        <div key={item.product?._id} className="cart-item">
          <div className="cart-item-image-container">
          <img
  src={`http://localhost:5000/${item.product?.image}`}
  alt={item.product?.name}
  onError={(e) => (e.target.src = defaultImage)}
  className="cart-item-image"
/>
          </div>
          <div className="cart-item-info">
           <h4>{item.product.name}</h4>
            <p>Quantity: {item.quantity}</p></div> 
        </div>
      ))}

    </div>
  );
}