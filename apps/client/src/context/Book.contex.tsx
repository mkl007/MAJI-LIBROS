import { ReactNode, useCallback, useEffect, useState } from "react";
import { BookContext } from "./BookAuth.context";
import { BookFormData } from "../components/AddNewBookForm";
import { useAuth } from "../hooks/useAuth";
import { AxiosResponse } from "axios";
import instanceAxiosBooks from "../api/AxiosBooksSetUp";


interface BookApiResponse {
    message: string,
    reqBooks: BooksFromDb[]
}

export interface BooksFromDb {
    author: string,
    availabilityStatus: string,
    bookTitle: string,
    coverImage: string,
    createdAt: string,
    description: number,
    isbn: number
    ownerId: string,
    updatedAt?: string,
    _id: string,
    gender: string,
    backCoverImage?: string,
    uploadContentPdf?: string
    price: number
}

export const BookContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isLoading, user, isLoggedIn } = useAuth();
    const [books, setBooks] = useState<BooksFromDb[]>([])
    const [resStatus, setResStatus] = useState<number>(0)
    const [isLoadingBook, setIsLoadingBook] = useState<boolean>(false)

    let userId = '';

    useEffect(() => {
        if (user && !isLoading) {
            userId = user.userInfo._id
        }
    }, [user, isLoggedIn]);

    const onSubmitBookForm = async (newBook: BookFormData) => {
        try {
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.post(`/newbook/${userId || user?.userInfo._id}`, newBook)
            if (response.status === 201) {
                setResStatus(201)
            }
        } catch (error) {
            console.log('here from try onSubmitBookForm, Error:  ', error)
            setBooks([])

        } finally {
            setIsLoadingBook(false)

        }
    };

    const showAllMyBooks = useCallback(async (userId: string) => {
        try {
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.get<BookApiResponse>(`/${userId}/books`)
            setBooks(response.data.reqBooks)
            setResStatus(0)
        } catch (error) {
            console.log(error)
            setBooks([])
        } finally {
            setIsLoadingBook(false)
        }
    }, [])

    const allBooks = useCallback(async () => {
        try {
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.get(`/showbooks`)
            setBooks(response.data.reqBooks)
            // console.log(response.data.reqBooks.slice(0, 10))
        } catch (error) {
            console.log(error)
        }
    }, [])

    const removeBook = useCallback(async (bookId: string) => {
        try {
            const deleteBook = await instanceAxiosBooks.delete(`/removebook/${bookId}`)
            setIsLoadingBook(true)
            console.log(deleteBook.data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoadingBook(false)
        }
    }, [])


    return (
        <BookContext.Provider value={{
            onSubmitBookForm,
            showAllMyBooks,
            books,
            resStatus,
            allBooks,
            removeBook,
            isLoadingBook,
            setIsLoadingBook
        }}>
            {children}
        </BookContext.Provider>
    )
}
