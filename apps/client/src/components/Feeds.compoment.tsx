import { Link } from 'react-router-dom';
import { Book, FeedItemProps } from '../interfaces/User.interface';
import { myApi } from '../api/MyApiBooks';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import React from 'react';
import { ViewContentLoginSuggest } from './popups/ViewContentLoginPrompt';


export const Feeds = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [limit, setLimit] = useState<number>(20);
  const { isLoggedIn } = useAuth();



  useEffect(() => {
    if (isLoggedIn) {
      setBooks(myApi);

    } else {
      setBooks(myApi.slice(0, limit));

    }
  }, [isLoggedIn, limit]);

  return (
    <div className="container mx-auto mb-7 pb-2 ">
      <h1 className="text-xl font-bold mb-4">Feeds: Last published Books</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
        {books.map((book) => (
          <FeedItem
            key={book.id}
            id={book.id}
            authors={book.authors}
            bookTitle={book.bookTitle}
            image={book.image}
            availabilityStatus={book.availabilityStatus}
          />
        ))}
      </div>
    </div>
  );
};

const FeedItem: React.FC<FeedItemProps> = React.memo(
  ({ bookTitle, authors, image, id, availabilityStatus }) => {
    const {  isLoggedIn } = useAuth()
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
        }, 3000); // Puedes ajustar el tiempo según sea necesario

        return () => clearTimeout(timer);
      }
    }, [showLoginModal]);
    return (
      <div className="bg-slate-100 shadow-md rounded-lg hover:border-2 border-red-500">
        <div className="flex flex-col justify-center p-2">
          <Link
            to={`/books/${id}`}
            onClick={handleLinkClick}
            className=''
          >

            <img
              src={image}
              className="w-full h-48 object-cover rounded-t-lg"
              alt="image desc"
            />
            <h2 className="text-base font-semibold mb-1">{bookTitle}</h2>
          </Link>
          <div className="flex justify-between">
            <div>
              <p>{authors}</p>
              <p>Price: </p>
              <p>Rate:</p>
              <p>Available for: <b>{availabilityStatus}</b></p>
            </div>
            <div>
              <span>
                <button type="button">Carrito</button>
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
