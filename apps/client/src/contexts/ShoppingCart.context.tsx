import { createContext, ReactNode } from "react";
import { BookFormData } from "../components/AddNewBookForm";
import { CartItemInterface, itemsCartProps } from "./ShoppingCartProvider";
import { FeedItemProps } from "../interfaces/User.interface";
import { any } from "zod";

export interface CartContextInterface {
    addToCart: (bookId: string, availabilityStatus: string) => void;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    status: number;
    showAllMyItemsInCart: () => Promise<void>
    itemCarts: CartItemInterface[]
}

export const ShoppingCartContext = createContext<CartContextInterface | null>(null);


