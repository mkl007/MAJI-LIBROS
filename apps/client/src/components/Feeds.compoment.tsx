import { Link } from 'react-router-dom';
import { FeedItemProps } from '../interfaces/User.interface';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import { ViewContentLoginSuggest } from './popups/ViewContentLoginPrompt';
import { BookFormData } from './AddNewBookForm'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useBook } from '../hooks/useBook';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const Feeds = () => {
  const { allBooks, books } = useBook()

  useEffect(() => {
    allBooks()
    console.log(books)
  }, [])

  return (
    <div className="container  mb-7 pb-2  w-full">
      <h1 className="text-xl font-bold mb-4">Feeds: Last published Books</h1>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">


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

export const FeedItem: React.FC<FeedItemProps | BookFormData> = React.memo(
  ({ bookTitle, author, coverImage, _id, availabilityStatus, price }) => {
    const { isLoggedIn } = useAuth()
    const { addToCart, setIsLoading, } = useShoppingCart()
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleLinkClick = (event: React.MouseEvent) => {
      if (!isLoggedIn) {
        event.preventDefault();
        setShowLoginModal(true);
      }
    };

    useEffect(() => {
      if (showLoginModal) {
        const timer = setTimeout(() => {
          setShowLoginModal(false);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [showLoginModal]);

    const onClickCartButton = (bookID: string, availabilityStatus: string) => {
      if (isLoggedIn) {
        addToCart(bookID, availabilityStatus)
        setIsLoading(true)
      } else {
        setShowLoginModal(true)
      }
    };


    return (
      <div className=" bg-slate-50 hover:shadow-indigo-800/40 hover:shadow-2xl">
        <div className="flex flex-col justify-center p-2 " >
          <Link
            to={`${_id == undefined ? '#' : '/books/'}${_id}`}
            onClick={handleLinkClick}
            className=''
          >

            <img
              src={coverImage instanceof File ? URL.createObjectURL(coverImage) : coverImage || undefined}
              className="w-full h-48 object-cover rounded-t-lg"
              alt="coverImage desc"
            />

          </Link>
          <p className="text-base mb-1 mt-1"><b>Title:</b> {bookTitle}</p>
          <div className="flex justify-between">
            <div>
              <p><b>Author:</b> {author}</p>
              <p><b>Price:</b> ${price} </p>
              <p><b>Rate:</b></p>
              <p><b>Available for:</b> <b>{availabilityStatus}</b></p>
            </div>
            <div className='mr-3'>
              <span className='hover:text-red-500' about='Shopping Car'>
                <button onClick={() => onClickCartButton(_id == undefined ? '#' : _id, availabilityStatus)} type="button" className='text-xl'>
                  <HiOutlineShoppingCart />
                </button>
              </span>
            </div>
          </div>
        </div>


        {showLoginModal && (
          <ViewContentLoginSuggest />
        )}

      </div>
    );
  }
);
