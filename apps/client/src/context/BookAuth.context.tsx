import { createContext } from "react";
import { BookFormData } from "../components/AddNewBookForm";
import { BooksFromDb } from "./Book.contex";

export interface BookContextInterface {
    onSubmitBookForm: (newBook: BookFormData) => Promise<void>
    showAllMyBooks: (userId: string) => Promise<void>
    books: BooksFromDb[]
    resStatus: number
    allBooks: () => Promise<void>
    removeBook: (bookId: string) => Promise<void>
    setIsLoadingBook: React.Dispatch<React.SetStateAction<boolean>>
    isLoadingBook: boolean
    getSingleBook: (bookId: string) => Promise<void>
    singleBook: BooksFromDb
    updateBookFunction: ( editBook: BookFormData) => Promise<void>
}

export const BookContext = createContext<BookContextInterface | undefined>(undefined)