import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddToCart from "../components/cartButton";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct]= useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
    .then((res)=> res.json())
    .then((data)=>setProduct(data))
    .catch((err)=> console.error(err));
  },[id]);
if(!product) return<p>...Loading</p>

  return (
    <div className="product-details">
        <img src={product.image} alt= {product.name} width="300"/>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
      <AddToCart/>
    </div>
  );
}