import { ReactNode, useEffect, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCart.context";
import instanceAxiosBooks from "../services/AxiosBooksSetUp";
import { useAuth } from "../hooks/useAuth";
import { LoadingSpinner } from "../utils/LoadingSnipper";

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>()
    const [status, setStatus] = useState<number>(0)

    let userId: string = '';

    useEffect(() => {
        if (user) {
            userId = user.userInfo._id
        }
    })

    const addToCart = async (bookId: string, availabilityStatus: string) => {
        try {
            const resp = await instanceAxiosBooks.post('/cart/add-to-cart', { bookId, userId, availabilityStatus });
            setMessage(resp.data.message)
            setStatus(resp.status)

        } catch (error) {
            console.error('Error adding book to cart', error);
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <ShoppingCartContext.Provider value={{ message, addToCart, isLoading, setIsLoading, status }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}