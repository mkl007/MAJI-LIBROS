import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from './Modal.login.component';
import { useAuth } from '../hooks/useAuth';

interface Book {
  id: number;
  bookTitle: string;
  authors: string;
  description?: {
    publishedYear: number;
  };
  gender?: string;
  image: string;
  availabilityStatus?: string;
  precio?: number;
}

const myApi: Book[] = [
  {
    id: 1,
    bookTitle: 'El sonido del silencio',
    authors: 'Alex Campos',
    description: { publishedYear: 2005 },
    gender: 'Poesia',
    image: "https://picsum.photos/200",
    availabilityStatus: 'Available',
    precio: 200
  },
  {
    id: 2,
    bookTitle: 'Cien años de soledad',
    authors: 'Gabriel García Márquez',
    description: { publishedYear: 1967 },
    gender: 'Novela',
    image: "https://picsum.photos/201",
    availabilityStatus: 'Available',
    precio: 350
  },
  {
    id: 3,
    bookTitle: 'Don Quijote de la Mancha',
    authors: 'Miguel de Cervantes',
    description: { publishedYear: 1605 },
    gender: 'Novela',
    image: "https://picsum.photos/202",
    availabilityStatus: 'Out of Stock',
    precio: 500
  },
  {
    id: 4,
    bookTitle: 'La sombra del viento',
    authors: 'Carlos Ruiz Zafón',
    description: { publishedYear: 2001 },
    gender: 'Ficción',
    image: "https://picsum.photos/203",
    availabilityStatus: 'Available',
    precio: 250
  },
  {
    id: 5,
    bookTitle: 'El amor en los tiempos del cólera',
    authors: 'Gabriel García Márquez',
    description: { publishedYear: 1985 },
    gender: 'Novela',
    image: "https://picsum.photos/204",
    availabilityStatus: 'Available',
    precio: 300
  },
  {
    id: 6,
    bookTitle: 'Rayuela',
    authors: 'Julio Cortázar',
    description: { publishedYear: 1963 },
    gender: 'Novela',
    image: "https://picsum.photos/205",
    availabilityStatus: 'Out of Stock',
    precio: 280
  }
];

export const Feeds = () => {
  return (
    <div className="container mx-auto border-3 border-red-500 p-4">
      <h1 className="text-xl font-bold mb-4">Feeds</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {myApi.map(book => (
          <FeedItem
            key={book.id}
            id={book.id}
            authors={book.authors}
            bookTitle={book.bookTitle}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}

interface FeedItemProps {
  id: number;
  bookTitle: string;
  authors: string;
  image: string
}

const FeedItem: React.FC<FeedItemProps> = ({ bookTitle, authors, image, id }) => {
  const {isLoggedIn, setIsLoggedIn} = useAuth()

  return (
    <div className="flex border-3 border-red-500 h-80 p-4">
      <div className="flex flex-col justify-between">
        {
          isLoggedIn===true ? (
            <Link to={`/books/${id}`}>
              <h2 className="text-lg font-semibold mb-2">{bookTitle}</h2>
              <img
                src={image}
                className=""
                alt="image desc"
              />
              <p>{authors}</p>
            </Link>
          ) : (
            // <ModalLogin message='Login first to access content' />
            <Link onClick={() => console.log('hi')} to={'#'}>
              <h2 className="text-lg font-semibold mb-2">{bookTitle}</h2>
              <img
                src={image}
                className=""
                alt="image desc"
              />
              <p>{authors}</p>
            </Link>
          )
        }
      </div>
    </div>
  );
}
