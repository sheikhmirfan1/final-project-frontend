
import PropertyCard from "./PropertyCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";


const Card = () => {
  const [products,setProducts] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const products = await axios.get('http://localhost:3000/api/products');
      setProducts(products.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }

    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
 

  return (
    <section className="flex flex-col justify-center p-4 max-md:max-w-full">
      <h3 className="px-4 pt-4 pb-2 text-lg font-bold leading-6 text-stone-100 max-md:max-w-full">
        Featured for you
      </h3>
      <div className="px-px max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {products && !loading ? (products.map((product) => (
          <PropertyCard key={product.id} {...product} />))) : 'Loading...'}
        </div>
      </div>
    </section>
  );
};

export default Card;
