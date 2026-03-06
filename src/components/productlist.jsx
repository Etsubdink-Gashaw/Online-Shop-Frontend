import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <div className='products'>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    )
} 

