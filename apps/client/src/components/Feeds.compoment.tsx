import { useEffect, } from 'react';
import { useBook } from '../hooks/useBook';
import { FeedItem } from './FeedItem';

export const Feeds = () => {
  const { allBooks, books } = useBook()

  useEffect(() => {
    allBooks()
    console.log(books)
  }, [])

  return (
    <div className="container  mb-7 pb-2  w-full ">
      <h1 className="text-xl font-bold mb-4">Feeds: Last published Books</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 
                      lg:grid-cols-4 gap-2 xl:grid-cols-5 
                      xl:gap-0">


        {
          !books ? <div><h2>No Books available</h2> </div> : (
            books.map((book) => (


              <FeedItem
                key={book._id}
                _id={book._id}
                author={book.author}
                bookTitle={book.bookTitle}
                coverImage={book.coverImage}
                availabilityStatus={book.availabilityStatus}
                price={book.price}
              />

            ))

          )
        }


      </div>
    </div>
  );
};

