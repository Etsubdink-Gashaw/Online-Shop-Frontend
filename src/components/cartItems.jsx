export default function CartItems({items}){
  return (
    <div className="cart-items">
      {items.map(item => (
        <div key={item.product?._id} className="cart-item">
          <h4>{item.product.name}</h4>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}