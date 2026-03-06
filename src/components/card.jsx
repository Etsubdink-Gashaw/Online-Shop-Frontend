export function Card() {
  return (
  <div className="card">
    <img src="path/to/image1.jpg" alt="Product 1" className="image"/>
    <h3 className="title">Product 1</h3>
    <p className="description">Short description of the product goes here.</p>
    <span className="price">${product.price}</span>
    <button className="add-to-cart-btn">Add to Cart</button>
  </div>

  )
}