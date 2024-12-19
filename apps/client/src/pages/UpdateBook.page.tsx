import { useEffect } from "react"
import { AddNewBookForm } from "../components/AddNewBookForm"
import { useBook } from "../hooks/useBook"
import { useParams } from "react-router-dom"


export const UpdateBook = () => {
    const { getSingleBook } = useBook()
    const params = useParams()
    useEffect(() => {
        if (params.bookId) {
            getSingleBook(params.bookId)
        }
    })
    return (
        <div className="container h-screen mb-8">
            <h2> Edit Book</h2>
            <div className="container flex ">
                <AddNewBookForm />
            </div>
        </div>
    )
}
