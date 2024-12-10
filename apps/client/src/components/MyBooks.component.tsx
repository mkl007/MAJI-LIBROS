import { useBook } from "../hooks/useBook"
import { AddNewBookCard } from "./AddNewBookCard"
import { FeedItem } from "./Feeds.compoment"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"


export const MyBooksComponent = () => {
    const { books, showAllMyBooks } = useBook()
    const { isLoggedIn, user, isLoading } = useAuth()

    useEffect(() => {
        // setIsLoading
        if (user && !isLoading) {
            if (user) {
                // userId = user.userInfo._id
                showAllMyBooks(user.userInfo._id)
                // console.log(userId)
            }
            // setIsLoading(true)
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
                                    <FeedItem
                                        key={book._id}
                                        author={book.author}
                                        availabilityStatus={book.availabilityStatus}
                                        bookTitle={book.bookTitle}
                                        coverImage={book.coverImage}
                                    />
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