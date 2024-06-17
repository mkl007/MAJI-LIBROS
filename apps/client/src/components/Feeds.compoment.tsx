import { Link } from 'react-router-dom';
import ModalLogin from './Modal.login.component';
import { useAuth } from '../hooks/useAuth';
import { Book, FeedItemProps } from '../interfaces/User.interface';



const myApi: Book[] = [
  {
    id: 1,
    bookTitle: 'El sonido del silencio',
    authors: 'Alex Campos',
    description: { publishedYear: 2005 },
    gender: 'Poesia',
    image: "https://picsum.photos/300/300?random=1",
    availabilityStatus: 'Available',
    precio: 200
  },
  {
    id: 2,
    bookTitle: 'Cien años de soledad',
    authors: 'Gabriel García M.',
    description: { publishedYear: 1967 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=2",
    availabilityStatus: 'Available',
    precio: 350
  },
  {
    id: 3,
    bookTitle: 'Don Quijote de la Mancha',
    authors: 'Miguel de Cervantes',
    description: { publishedYear: 1605 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=3",
    availabilityStatus: 'Out of Stock',
    precio: 500
  },
  {
    id: 4,
    bookTitle: 'La sombra del viento',
    authors: 'Carlos Ruiz Z.',
    description: { publishedYear: 2001 },
    gender: 'Ficción',
    image: "https://picsum.photos/300/300?random=4",
    availabilityStatus: 'Available',
    precio: 250
  },
  {
    id: 5,
    bookTitle: 'El amor en tiempos..',
    authors: 'Gabriel García Márquez',
    description: { publishedYear: 1985 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=5",
    availabilityStatus: 'Available',
    precio: 300
  },
  {
    id: 6,
    bookTitle: 'Rayuela',
    authors: 'Julio Cortázar',
    description: { publishedYear: 1963 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=6",
    availabilityStatus: 'Out of Stock',
    precio: 280
  },
  {
    id: 7,
    bookTitle: 'La casa de los espíritus',
    authors: 'Isabel Allende',
    description: { publishedYear: 1982 },
    gender: 'Ficción',
    image: "https://picsum.photos/300/300?random=7",
    availabilityStatus: 'Available',
    precio: 220
  },
  {
    id: 8,
    bookTitle: 'Pedro Páramo',
    authors: 'Juan Rulfo',
    description: { publishedYear: 1955 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=8",
    availabilityStatus: 'Available',
    precio: 180
  },
  {
    id: 9,
    bookTitle: 'La ciudad y los perros',
    authors: 'Mario Vargas Llosa',
    description: { publishedYear: 1963 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=9",
    availabilityStatus: 'Out of Stock',
    precio: 260
  },
  {
    id: 10,
    bookTitle: 'La tregua',
    authors: 'Mario Benedetti',
    description: { publishedYear: 1960 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=10",
    availabilityStatus: 'Available',
    precio: 190
  },
  {
    id: 11,
    bookTitle: 'El túnel',
    authors: 'Ernesto Sabato',
    description: { publishedYear: 1948 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=11",
    availabilityStatus: 'Available',
    precio: 210
  },
  {
    id: 12,
    bookTitle: 'Fervor de Buenos Aires',
    authors: 'Jorge Luis Borges',
    description: { publishedYear: 1923 },
    gender: 'Poesia',
    image: "https://picsum.photos/300/300?random=12",
    availabilityStatus: 'Out of Stock',
    precio: 230
  },
  {
    id: 13,
    bookTitle: 'Los detectives salvajes',
    authors: 'Roberto Bolaño',
    description: { publishedYear: 1998 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=13",
    availabilityStatus: 'Available',
    precio: 320
  },
  {
    id: 14,
    bookTitle: 'El Aleph',
    authors: 'Jorge Luis Borges',
    description: { publishedYear: 1949 },
    gender: 'Cuento',
    image: "https://picsum.photos/300/300?random=14",
    availabilityStatus: 'Available',
    precio: 240
  },
  {
    id: 15,
    bookTitle: 'Sobre héroes y tumbas',
    authors: 'Ernesto Sabato',
    description: { publishedYear: 1961 },
    gender: 'Novela',
    image: "https://picsum.photos/300/300?random=15",
    availabilityStatus: 'Out of Stock',
    precio: 290
  }
];



export const Feeds = () => {

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">Feeds</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        {
          (
            myApi.map(book => (
              <FeedItem
                key={book.id}
                id={book.id}
                authors={book.authors}
                bookTitle={book.bookTitle}
                image={book.image}
              />
            ))
          )

        }
      </div>
    </div>
  );
}


const FeedItem: React.FC<FeedItemProps> = ({ bookTitle, authors, image, id }) => {
  const { isLoggedIn } = useAuth()

  return (
    <div className="flex shadow-lg  shadow-cyan-500/50 h-80 p-1">
      <div className="flex flex-col justify-center  p-2">

 {/* Working on adding the conditinoal to show book information */}
        <Link to={`/books/${id}`}>
          <img
            src={image}
            className=""
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

          </div>
          <div>
            <span>
              <button type='button'>
                Carrito
              </button>
            </span>
          </div>
        </div>
        {/* {
          isLoggedIn === true ? (
            <Link to={`/books/${id}`}>
              <img
                src={image}
                className=""
                alt="image desc"
              />
              <h2 className="text-lg font-semibold mb-2">{bookTitle}</h2>
              <p>{authors}</p>
            </Link>
          ) : (
            <div>
              <Link to={'/login'}>
                <h2 className="text-lg font-semibold mb-2">{bookTitle}</h2>
                <img
                  src={image}
                  className=""
                  alt="image desc"
                />
                <p>{authors}</p>
              </Link>
            </div>
          )
        } */}
      </div>
    </div>
  );
}
