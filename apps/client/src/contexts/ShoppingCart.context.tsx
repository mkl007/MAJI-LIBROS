import { createContext, ReactNode } from "react";

export interface CartContextInterface {
    addToCart: (bookId: string, availabilityStatus: string) => void;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    status: number;
}

export const ShoppingCartContext = createContext<CartContextInterface | null>(null);


