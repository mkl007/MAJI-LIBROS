import { ReactNode, useCallback, useEffect, useId, useState } from "react";
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
    const { setIsLoading, isLoading, data } = useAuth();
    const [books, setBooks] = useState<BooksFromDb[]>([])
    const [resStatus, setResStatus] = useState<number>(0)

    const userId = data?.userInfo._id;
    useEffect(() => {
        if (userId) {
            showAllMyBooks(userId)
            setIsLoading(true)
        }

    }, [userId])

    const onSubmitBookForm = async (newBook: BookFormData) => {
        try {
            setIsLoading(true)
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.post(`/newbook/${userId}`, newBook)
            // Create a component that loads and show the confirmation of new book created. Should be green mark
            if (response.status === 201) {
                setResStatus(201)
            }
        } catch (error) {
            console.log('here from try onSubmitBookForm, Error:  ', error)

        } finally {
            setIsLoading(false)

        }
    };

    const showAllMyBooks = useCallback(async (userId: string) => {
        try {
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.get<BookApiResponse>(`/${userId}/books`)
            setBooks(response.data.reqBooks)

        } catch (error) {
            console.log(error)
            setBooks([])
        } finally {
            setIsLoading(false)
        }
    }, [])

    const allBooks = async () => {
        try {
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.get(`/showbooks`)
            // setBooks(respon.data.re)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <BookContext.Provider value={{ onSubmitBookForm, showAllMyBooks, books, resStatus, allBooks }}>
            {children}
        </BookContext.Provider>
    )
}
