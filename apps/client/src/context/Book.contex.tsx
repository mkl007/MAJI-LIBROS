import { ReactNode } from "react";
import { BookContext } from "./BookAuth.context";
import { BookFormData } from "../components/AddNewBookForm";


export const BookContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const onSubmitBookForm = async (newBook: BookFormData) => {
        try {
           console.log('here from try onSubmitBookForm', newBook)

        } catch (error) {
            console.log('here from try onSubmitBookForm, Error:  ', error)
           
        } finally {
           console.log('here from finally')
            
        }
    };


    return (
        <BookContext.Provider value={{onSubmitBookForm  }}>
            {children}
        </BookContext.Provider>
    )
}
