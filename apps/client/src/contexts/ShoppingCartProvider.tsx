import { ReactNode, useEffect } from "react";
import { ShoppingCartContext } from "./ShoppingCart.context";
import instanceAxiosBooks from "../services/AxiosBooksSetUp";
import { useAuth } from "../hooks/useAuth";

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth()
    let userId: string = '';

    useEffect(() => {
        if (user) {
            userId = user.userInfo._id
        }
    }, [user])


    const addToCart = async (bookId: string, availabilityStatus: string) => {
        try {
            const cart = await instanceAxiosBooks.post('/cart/add-to-cart', { bookId, userId, availabilityStatus });
            console.log('Book added to cart', cart.data);
        } catch (error) {
            console.error('Error adding book to cart', error);

        }
    }

    return (
        <ShoppingCartContext.Provider value={{ addToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}