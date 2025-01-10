import { createContext, ReactNode } from "react";

export interface CartContextInterface {
    addToCart: (bookId: string, availabilityStatus: string) => void;
}

export const ShoppingCartContext = createContext<CartContextInterface | null>(null);


