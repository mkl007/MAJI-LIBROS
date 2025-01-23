import { createContext } from "react";
import { CartItemInterface } from "./ShoppingCartProvider";

export interface CartContextInterface {
    addToCart: (bookId: string, availabilityStatus: string) => void;
    isLoadingCart: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    status: number;
    showAllMyItemsInCart: () => Promise<void>
    itemCarts: CartItemInterface[]
    removeItemFromCart: (bookId: string) => void;
    setItemsCart: React.Dispatch<React.SetStateAction<CartItemInterface[]>>
}

export const ShoppingCartContext = createContext<CartContextInterface | null>(null);


