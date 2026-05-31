import { createContext, useState } from "react";
import axios from "axios";

export const cartContext = createContext();

export default function CartContextProvider({ children }) {

    const [cartCount, setCartCount] = useState(0);

    async function addToCart(productId) {
        try {
            const { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/cart",
                { productId },
                {
                    headers: {
                        token: localStorage.getItem("userToken")
                    }
                }
            );
            setCartCount(data.numOfCartItems);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async function getCart() {
        try {
            const { data } = await axios.get(
                "https://ecommerce.routemisr.com/api/v1/cart",
                {
                    headers: {
                        token: localStorage.getItem("userToken")
                    }
                }
            );
            setCartCount(data.numOfCartItems);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <cartContext.Provider value={{ cartCount, setCartCount, addToCart, getCart }}>
            {children}
        </cartContext.Provider>
    );
}