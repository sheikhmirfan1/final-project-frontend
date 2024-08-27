import { Footer } from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { useOrder } from "./context/orderContext.jsx";

export default function OrderPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [order, setOrder] = useState([]);
  const [address, setAddress] = useState({
    name: "",
    location: "",
    phone: "",
  });
  const { productsOrder, setProductsOrder } = useOrder();
  let updatedProduct;

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (e) => {
    e.preventDefault();
    try {
      const newOrder = await axios.post(`http://localhost:3000/api/orders`, {
        products: order,
        address: address,
      });
      if (newOrder.data) {
        alert("Order created");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(order, address);
  console.log(products);
  return (
    <div className="bg-white w-full">
      <div className="w-full ">
        <h1 className="w-full text-center font-bold text-4xl">Order</h1>
        <img src="/public/assets/order1.png" alt="" className="w-64 mx-auto" />
      </div>

      <div className="w-full">
        <h1 className="text-center font-bold text-3xl mb-14">Category</h1>
        {order.length > 0 && (
          <>
            {order.map((product) => {
              return (
                <>
                  <div>
                    {product.quantity} {product.name}
                  </div>
                </>
              );
            })}
            <form onSubmit={createOrder}>
              <input
                placeholder="name"
                required
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
              <input
                placeholder="location"
                required
                onChange={(e) =>
                  setAddress({ ...address, location: e.target.value })
                }
              />
              <input
                placeholder="number"
                required
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />
              <button type="submit">Create an order</button>
            </form>
          </>
        )}
        <ButtonGroup variant="text" className="flex justify-evenly">
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("chicken")}
          >
            Chicken
          </Button>
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("mutton")}
          >
            Mutton
          </Button>
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("Vegan")}
          >
            Vegetarian
          </Button>
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("drink")}
          >
            Drinks
          </Button>
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("deserts")}
          >
            Deserts
          </Button>
          <Button
            className="text-1xl"
            onClick={() => handleCategoryClick("All")}
          >
            All
          </Button>
        </ButtonGroup>
      </div>
      <div className="mb-60 mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" w-64 overflow-hidden rounded-md bg-gray-200 ">
                <img
                  alt={product.image}
                  src={product.image}
                  className="h-full w-full object-cover object-center lg:h-52 lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="text-sm font-medium text-gray-900">
                    € {product.price}
                  </p>
                </div>
                <div>
                  <select
                    name="number"
                    className="border-solid border-2 border-sky-500"
                    onChange={(e) => {
                      const quantity = parseInt(e.target.value);
                      updatedProduct = { ...product, quantity };
                      // setProductsOrder([...productsOrder, updatedProduct]);
                    }}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="ml-10 w-32 bg-blue-500 text-white py-2 rounded-md"
                onClick={() =>
                  setProductsOrder([
                    ...productsOrder,
                    updatedProduct ? updatedProduct : product,
                  ])
                }
              >
                ADD TO ORDER
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
