import { useBook } from "../hooks/useBook"
import { AddNewBookCard } from "./AddNewBookCard"
import { FeedItem } from "./Feeds.compoment"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"


export const MyBooksComponent = () => {
    const { books, showAllMyBooks, removeBook } = useBook()
    const { isLoggedIn, user, isLoading } = useAuth()

    useEffect(() => {
        if (user && !isLoading) {
            if (user) {
                showAllMyBooks(user.userInfo._id)
            }
        }
    })
    
    return (
        <div className=" container flex flex-col justify-center p-2 border-1 border-red-800">

            <div className="  pb-2 grid sm:grid-cols-7 md:grid-cols-8" >
                <AddNewBookCard />
            </div >

            <div>
                {
                    books && (books.length > 0) ? (
                        <div className="  border-x-orange-500 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
                            {
                                books.map((book) => (
                                    <div key={book._id}>
                                        <button
                                            onClick={() => removeBook(book._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            Delete
                                        </button>
                                        <FeedItem
                                            key={book._id}
                                            author={book.author}
                                            availabilityStatus={book.availabilityStatus}
                                            bookTitle={book.bookTitle}
                                            coverImage={book.coverImage}

                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            {/* <LoadingSpinner /> */}
                            <span>No books to show</span>
                        </div>
                    )
                }

            </div>
        </div >

    )
}