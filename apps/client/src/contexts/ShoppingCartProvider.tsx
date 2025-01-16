import { ReactNode, useEffect, useMemo, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCart.context";
import instanceAxiosBooks from "../services/AxiosBooksSetUp";
import { useAuth } from "../hooks/useAuth";
import { LoadingSpinner } from "../utils/LoadingSnipper";
import { BookFormData } from "../components/AddNewBookForm";
import { FeedItemProps } from "../interfaces/User.interface";

// export interface itemsCartProps {
//     items: BookFormData | BookFormData[]
// }



export interface CartItemInterface extends BookFormData {
    createdAt: string;
    updatedAt: string;
}

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>()
    const [status, setStatus] = useState<number>(0)
    const [itemCarts, setItemsCart] = useState<CartItemInterface[]>([])


    let userId: string = '';

    useEffect(() => {
        if (user) {
            userId = user.userInfo._id
        }
    })

    const addToCart = async (bookId: string, availabilityStatus: string) => {
        try {
            const resp = await instanceAxiosBooks.post('/carts/add-to-cart', { bookId, userId, availabilityStatus });
            setMessage(resp.data.message)
            setStatus(resp.status)

        } catch (err) {
            console.error('Error adding book to cart', error);
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    const showAllMyItemsInCart = async () => {

        try {
            setIsLoading(true)
            const response = await instanceAxiosBooks.get(`/carts/${userId}/my-items-cart`)
            setItemsCart(response.data.items)
        } catch (error) {
            console.error('Error fetching items in cart:', error);
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <ShoppingCartContext.Provider value={{ message, addToCart, isLoading, setIsLoading, status, showAllMyItemsInCart, itemCarts }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

