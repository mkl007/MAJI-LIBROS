import { createContext } from "react";
import { BookFormData } from "../components/AddNewBookForm";
import { BooksFromDb } from "./Book.contex";

export interface BookContextInterface {
    onSubmitBookForm: (newBook: BookFormData) => Promise<void>
    showAllMyBooks: (userId: string) => Promise<void>
    books: BooksFromDb[]
    resStatus: number
}

export const BookContext = createContext<BookContextInterface | undefined>(undefined)