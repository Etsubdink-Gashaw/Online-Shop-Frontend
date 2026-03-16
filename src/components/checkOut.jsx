import OrderButton from "./orderButton.jsx";
export default function CheckOut({ items ,setCartItems}) {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      
      {items.length > 0 && (
        <div>
          <h3>Order Summary:</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.product.name} - Quantity: {item.quantity} - Price: ${item.product.price * item.quantity}
              </li>
            ))}
          </ul>
            <h4>Total: ${items.reduce((total, item) => total + item.product.price * item.quantity, 0)}</h4>
            <OrderButton setCartItems={setCartItems} />
        </div>
      )}

    </div>
  );
}