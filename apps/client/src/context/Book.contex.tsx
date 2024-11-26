import { ReactNode } from "react";
import { BookContext } from "./BookAuth.context";
import { BookFormData } from "../components/AddNewBookForm";
import { useAuth } from "../hooks/useAuth";
import { AxiosResponse } from "axios";
import instanceAxiosBooks from "../api/AxiosBooksSetUp";


interface BookApiResponse {
    message: string
}

export const BookContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { setIsLoading, data } = useAuth()
    const user = data?.userInfo


    const onSubmitBookForm = async (newBook: BookFormData) => {
        try {
            setIsLoading(true)
            console.log(user?._id)
            const response: AxiosResponse<BookApiResponse> = await instanceAxiosBooks.post(`/newbook/${user?.id}`, newBook)
            // Create a component that loads and show the confirmation of new book created. Should be green mark
            console.log(response)
        } catch (error) {
            console.log('here from try onSubmitBookForm, Error:  ', error)

        } finally {
            console.log('here from finally')
            setIsLoading(false)

        }
    };

    

    return (
        <BookContext.Provider value={{ onSubmitBookForm }}>
            {children}
        </BookContext.Provider>
    )
}
