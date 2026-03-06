import { useEffect, useState } from "react";
import ProductList from "./productlist";

function ScrollReveal({ products }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='image-container'>
        </div>

       <span /* className={`hiddenElement ${show ? "showElement" : ""}`}*/> 
      <ProductList products={products} />
      </span>
    </div>
  );
}

export default ScrollReveal;