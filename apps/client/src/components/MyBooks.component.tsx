import { useEffect } from "react"
import { useBook } from "../hooks/useBook"
import { AddNewBookCard } from "./AddNewBookCard"
import { FeedItem } from "./Feeds.compoment"
import { useAuth } from "../hooks/useAuth"


export const MyBooksComponent = () => {
    const { isLoading } = useAuth()
    const { showAllMyBooks, books } = useBook()
    // 1 ver si el arreglo esta vacio => console.log(arreglo vacio)
    // 2 si no esta vacio => console.log(arreglo)
    // useEffect(()=>{
    //     if(books.length > 0) console.log(books)
    // })
    return (
        // <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">

            <div>
                <AddNewBookCard />
            </div>
            <div>
                {
                    books && (books.length > 0) ? (
                        <div>
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
                        <div>No books yet...</div>
                    )
                }

            </div>

        </div>

    )
}