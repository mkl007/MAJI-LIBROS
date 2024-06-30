import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FeedItemProps } from '../interfaces/User.interface';
import { myApi } from '../api/MyApiBooks';

export const Feeds = () => {

  return (
    <div className="container mx-auto border-2 border-red-600 mb-7 pb-2 ">
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

// me quede en la parte: el usuario puede ver el feed pero cuando clickea en la imagen, 
// ,si no esta autenticado pues lo manda a loguearse, si esta autenticado pues se abre la pagina deseada
const FeedItem: React.FC<FeedItemProps> = ({ bookTitle, authors, image, id, availabilityStatus }) => {
  const { isLoggedIn } = useAuth()

  return (
    <div>

      <div className="flex shadow-lg  shadow-cyan-500/50 h-90 border-2 border-slate-950 ">
        <div className="flex flex-col justify-center p-2">

          <Link
            onClick={() => isLoggedIn ? (<div>hi frist</div>) : (<Navigate to={`/books/${id}`} />)}
            to={'/login '}
          >
            <img
              src={image}
              className=" xl:h-48 2xl:h-48 sm:h-89"
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
