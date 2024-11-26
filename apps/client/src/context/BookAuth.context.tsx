import { createContext } from "react";
import { BookFormData } from "../components/AddNewBookForm";

export interface BookContextInterface {
    onSubmitBookForm: (newBook: BookFormData) => Promise<void>
}

export const BookContext = createContext<BookContextInterface | undefined>(undefined)