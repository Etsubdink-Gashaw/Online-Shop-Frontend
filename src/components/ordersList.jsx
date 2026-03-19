export default function OrdersList({ orders }) {
    const sortedOrders = [...orders].sort(
        (a, b) => new Date(b.orderDate || 0) - new Date(a.orderDate || 0)
    );

    return (
        <div className="orders-list">
            {sortedOrders.map(order => (
                <div key={order.id} className="order-card">
                    {(order.items || []).map(item => (
                        <div key={`${order.id}-${item.product?._id}`}>
                            <h4 style={{display:"inline"}}>{item.product?.name || "Unknown Product"}</h4>
                            <i style={{ textAlign: "center" }}>
                               ..... Quantity: {item.quantity} * Price: $
                                {(item.price || 0).toFixed(2)}
                            </i>
                            <p>Status: {order.status || "Unknown"}</p>
                            <p>Order Date: {order.orderDate ? new Date(order.orderDate).toLocaleDateString() : "Unknown"}</p>
                        </div>
                    ))}
                    <p>Total: ${(order.total || 0).toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}