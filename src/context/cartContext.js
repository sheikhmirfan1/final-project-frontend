import axios from "axios";
import { createContext, useContext, useState } from "react";

const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const addToCart = async ( productId, productQuantity, productPrice) => {
        console.log( productId, productQuantity, productPrice)
        try {
            // Check if cart exists for the user
            const existingCart = await axios.get(`http://localhost:3000/api/cart/user/${userID}`)
            if (existingCart.data) {
                const cartId = existingCart.data._id
                const updatedProducts = [...existingCart.data.products]


                // Check if the product already exists in the cart 
                const productIndex = updatedProducts.findIndex(product => product.product._id == productId)
            
                if(productIndex > -1){
                    updatedProducts[productIndex].quantity = parseInt(productQuantity)
                }

                else {
                    updatedProducts.push({
                        product : productId,
                        quantity : parseInt(productQuantity),
                        price : productPrice
                    })
                }

                console.log(updatedProducts)

                await axios.put(`http://localhost:3000/api/cart/${cartId}`, {
                    products : updatedProducts
                }) 
                alert('Product has been added')
            }
            else {
                // CREATE THE CART
                await axios.post(`http://localhost:8000/api/cart`, {
                    products: [{
                        productId: productId,
                        quantity: productQuantity,
                        price: productPrice
                    }]
                })
                alert('Product has been added')
            }

        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)