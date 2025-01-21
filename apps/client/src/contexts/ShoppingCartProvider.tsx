import { ReactNode, useEffect, useMemo, useState, useCallback } from 'react';
import { ShoppingCartContext } from "./ShoppingCart.context";
import instanceAxiosBooks from "../services/AxiosBooksSetUp";
import { useAuth } from "../hooks/useAuth";
import { BookFormData } from "../components/AddNewBookForm";

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

        } catch (err: any) {
            console.error('Error adding book to cart', error);
            setError(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    const showAllMyItemsInCart = useCallback(async () => {

        try {
            setIsLoading(true)
            const response = await instanceAxiosBooks.get(`/carts/${userId!}/my-items-cart`)
            setItemsCart(response.data.items)
        } catch (error) {
            console.error('Error fetching items in cart:', error);
        } finally {
            setIsLoading(false)
        }

    }, [])

    const removeItemFromCart = async (bookId: string) => {
        try {
            setIsLoading(true)
            const response = await instanceAxiosBooks.delete(`/carts/${userId}/remove-from-cart/${bookId}`)
            setItemsCart(itemCarts.filter(item => item._id !== bookId))
            setMessage(response.data.message)
        } catch (error) {
            console.error('Error removing item from cart:', error);
        } finally {
            setIsLoading(false)
            alert(message)

        }
    }


    return (
        <ShoppingCartContext.Provider value={{ message, addToCart, isLoading, setIsLoading, status, showAllMyItemsInCart, itemCarts, removeItemFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

