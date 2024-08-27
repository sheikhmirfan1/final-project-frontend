import axios from "axios";
import { createContext, useContext} from "react";

const CartContext = createContext()


export const CartProvider = ({ children }) => {


  const addToCart = async (productId, productQuantity, productPrice) =>{
    console.log(productId, productQuantity, productPrice);
    try {
      const cart = await axios.get(
        "https://final-project-backend-nu.vercel.app/api/carts"
      );
      console.log(cart.data);
      if (cart.data) {
        const cartId = cart.data._id;
        const updatedProducts = [...cart.data.products];
        const productIndex = updatedProducts.findIndex(
          (product) => product.product._id === productId
        );
        if (productIndex > -1) {
          updatedProducts[productIndex].quantity = parseInt(productQuantity);
        } else {
          updatedProducts.push({
            product: productId,
            quantity: parseInt(productQuantity),
            price: productPrice,
          });
        }
        console.log(updatedProducts);
        await axios.put(
          `https://final-project-backend-nu.vercel.app/api/carts/${cartId}`,
          {
            products: updatedProducts,
          }
        );
        alert("Product has been added");
      } else {
        await axios.post(
          "https://final-project-backend-nu.vercel.app/api/carts",
          {
            products: [
              {
                product: productId,
                quantity: productQuantity,
                price: productPrice,
              },
            ],
          }
        );
        alert("Product has been added");
      }
    } catch (err) {
       console.log(err);
  }
}

    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)