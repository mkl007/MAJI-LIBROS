
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCart.context";



export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error("useShoppingCart must be used within ShoppingCartProvider");
    }
    return context;
}