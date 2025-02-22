import { ReactNode, useEffect, useState } from 'react';
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
    const [isLoadingCart, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [error, setError] = useState<string>()
    const [status, setStatus] = useState<number>(0)
    const [itemCarts, setItemsCart] = useState<CartItemInterface[]>([])


    let userId: string = '';

    useEffect(() => {
        if (user) {
            userId = user.userInfo._id
        }
    }, [user, isLoadingCart])

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

    const showAllMyItemsInCart = async () => {

        try {
            setIsLoading(true)
            if (user?.userInfo._id) {
                const response = await instanceAxiosBooks.get(`/carts/${user.userInfo._id}/my-items-cart`)
                setItemsCart(response.data.items)
            }
            console.log('There is no user info to Show all Items cart')
        } catch (error) {
            console.error('Error fetching items in cart:', error);
        } finally {
            setIsLoading(false)
        }

    }

    const removeItemFromCart = async (bookId: string) => {
        try {
            setIsLoading(true)
            if (user?.userInfo._id) {
                const response = await instanceAxiosBooks.delete(`/carts/${user.userInfo._id}/remove-from-cart/${bookId}`)
                setItemsCart(itemCarts.filter(item => item._id !== bookId))
                setMessage(response.data.message)
            }
            console.log('There is no user info to delete Items cart')

        } catch (error) {
            console.error('Error removing item from cart:', error);
        } finally {
            setIsLoading(false)
            alert(message)

        }
    }


    return (
        <ShoppingCartContext.Provider value={{ message, addToCart, isLoadingCart, setIsLoading, status, showAllMyItemsInCart, itemCarts, removeItemFromCart, setItemsCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

