import axios from "axios";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext()


export const OrderProvider = ({ children }) => {
    
    const [productsOrder, setProductsOrder] = useState([])
    console.log(productsOrder)

    return (
        <OrderContext.Provider value={{ productsOrder, setProductsOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder = () => useContext(OrderContext)