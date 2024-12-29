import { useContext } from "react";
import { BookContext } from "../contexts/BookAuth.context";


export const useBook = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error("useBook must be used within BookProvider");
    }
    return context;
}