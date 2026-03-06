import { useEffect, useState } from "react";
import API from "../api/axios.js";
import { Navbar } from "../components/Navbar.jsx";
import ScrollReveal from "../components/scrollreveal.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch]= useState("");

  useEffect(() => {
    API.get("/products")
      .then(res => {
        console.log("API RESPONSE:", res.data.products);
        setProducts(res.data.products);
      })
      .catch(err => console.log("API ERROR:", err));
  }, []);
  
  const filteredProducts = products.filter(product=>
  product.name.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div>
      <div className='page'>
        <Navbar setSearch={setSearch}/>
       <ScrollReveal products={filteredProducts} />
      
      </div>
    </div>
  );
}
