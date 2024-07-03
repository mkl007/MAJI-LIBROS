import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FeedItemProps } from '../interfaces/User.interface';
import { myApi } from '../api/MyApiBooks';
import { useEffect } from 'react';

export const Feeds = () => {
  return (
    <div className="container mx-auto mb-7 pb-2 ">
      <h1 className="text-xl font-bold mb-4 ">Feeds: Last published Books</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0 '>

        {
          (
            myApi.map(book => (
              <FeedItem
                key={book.id}
                id={book.id}
                authors={book.authors}
                bookTitle={book.bookTitle}
                image={book.image}
                availabilityStatus={book.availabilityStatus}
              />
            ))
          )

        }
      </div>
    </div>
  );
}

const FeedItem: React.FC<FeedItemProps> = ({ bookTitle, authors, image, id, availabilityStatus }) => {
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    console.log(isLoggedIn)

  }, [isLoggedIn])
  return (
    <div>

      {/* <div className="flex shadow-lg  shadow-cyan-500/50 h-90 "> */}
      <div className='bg-slate-100 shadow-md rounded-lg '>
        <div className="flex flex-col justify-center p-2">


          <Link
            // onClick={() => isLoggedIn ? (<div>hi frist</div>) : (<Navigate to={`/books/${id}`} />)}
            to={`/books/${id}`}
          >
            <img
              src={image}
              // className=" xl:h-48 2xl:h-48 sm:h-89"
              className="w-full h-48 object-cover rounded-t-lg"
              alt="image desc"

            />
            <h2 className="text-base font-semibold mb-1">{bookTitle}</h2>
          </Link>
          <div className='flex justify-between'>
            <div>
              <p>{authors}</p>
              <p>Price: </p>
              {/* add here a dinamic div which shows the rate and the Book's desc */}
              <p>Rate:</p>
              <p>Available for: <b>{availabilityStatus}</b></p>

            </div>
            <div>
              <span>
                <button type='button'>
                  Carrito
                </button>
              </span>
            </div>
          </div>


        </div>
      </div>


    </div>
  );
}
