
import { useEffect, useState } from "react";
import API from "../api/axios.js";
import { Navbar } from "../components/Navbar.jsx";
import Chips from "../components/categoryChips.jsx";
import ProductList from "../components/productlist.jsx";

export default function Categories() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
const categories = ["All", ...new Set(allProducts.map(p => p.category))];

async function fetchProducts() {
  try {
    let url = "/products";
    const res= await API.get(url);
    setAllProducts(res.data.products);

    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }

    const response = await API.get(url);
    setProducts(response.data.products);

  } catch (err) {
    console.log("API ERROR:", err);
  }
}

useEffect(()=>{
  if (selectedCategory === "All") {
    setProducts(allProducts);
  } else {
  fetchProducts();
}},[selectedCategory])



  return (
    <div className="page">
      <Navbar />
      <h3>Categories</h3>
      <Chips categories={categories} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <ProductList products={products}/>
    </div>
  );
}