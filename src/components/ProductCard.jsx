import { Link } from "react-router-dom";
import AddToCart from "./cartButton";
import defaultImage from "../assets/product.png";

export default function ProductCard({ product }) {
  
  return (
    <div className="card">
      <img src={`http://localhost:5000/${product.image}`} alt={product.name} onError={(e)=>e.target.src=defaultImage} className="image" />
      <h3 className="title">{product.name}</h3>
      <p className="description">{product.description}</p>
      <span className="price">${product.price}</span>
      <Link to={`/product/${product._id}`}>View</Link>
      <AddToCart product={product}/>
      
    </div>
  );
}
