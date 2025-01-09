import { createContext, ReactNode } from "react";

export interface CartContextInterface {
    addToCart: (userId: string, bookID: string) => void;
}

export const CartContext = createContext<CartContextInterface | null>(null);

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const addToCart = (userId: string, bookID: string) => {
        console.log('Added to cart');
    }

    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
