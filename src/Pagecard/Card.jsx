import {PropertyCard} from "./PropertyCard.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const products = await axios.get(
        "https://final-project-backend-nu.vercel.app/api/products"
      );
      setProducts(products.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const chickenProduct =
    products &&
    products.filter((product) => {
      return product.category === "chicken";
    });

  const muttonProduct =
    products &&
    products.filter((product) => {
      return product.category === "mutton";
    });
  const veganProduct =
    products &&
    products.filter((product) => {
      return product.category === "Vegan";
    });

  return (
    
    <marquee behavior="" direction="">
      <div className="flex ">
        <section className="flex flex-col justify-center p-4 max-md:max-w-full">
          <h3 className="text-black px-4 pt-4 pb-2 text-lg font-bold leading-6 text-stone-100 max-md:max-w-full">
            Chicken
          </h3>
          <div className="px-px max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {products && !loading
                ? chickenProduct.map((product) => (
                    <PropertyCard key={product._id} {...product} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center p-4 max-md:max-w-full">
          <h3 className="text-black px-4 pt-4 pb-2 text-lg font-bold leading-6 text-stone-100 max-md:max-w-full">
            Vegan
          </h3>
          <div className="px-px max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {products && !loading
                ? veganProduct.map((product) => (
                    <PropertyCard key={product._id} {...product} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center p-4 max-md:max-w-full">
          <h3 className="text-black px-4 pt-4 pb-2 text-lg font-bold leading-6 text-stone-100 max-md:max-w-full">
            Mutton
          </h3>
          <div className="px-px max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {products && !loading
                ? muttonProduct.map((product) => (
                    <PropertyCard key={product._id} {...product} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </section>
      </div>
    </marquee>
  );
};

export default Card;
