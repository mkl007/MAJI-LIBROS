import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBook } from '../hooks/useBook'
import { FeedItem } from './FeedItem'
import { ButtonComponent } from './ui/ButtonComponent'

// export const BookItemComponent = () => {
//     const params = useParams()
//     const { getSingleBook, singleBook } = useBook()

//     useEffect(() => {
//         console.log(params.bookId)
//         if (params.bookId) {
//             getSingleBook(params.bookId)
//             console.log(singleBook)
//         }

//     }, [])


//     return (
//         <div className='container border-2 border-red-400 flex'>
//             <div className=''>
//                 <FeedItem
//                     author={singleBook.author}
//                     availabilityStatus={singleBook.availabilityStatus}
//                     bookTitle={singleBook.bookTitle}
//                     coverImage={singleBook.coverImage}
//                 />
//             </div>

//             <div className=' container w-1/3 border-2 border-yellow-500'>
//             <ButtonComponent 
//                 key={singleBook._id}
//                 onClick={()=> console.log('Buying...')}
//                 text='Buy'
//                 type='button'
//                 className='bg-blue-900 hover:bg-blue-600 px-4'
//             />
//                 <span>Desc: {singleBook.description}</span>
//             </div>
//         </div>
//     )
// }


interface BookItemProps {
    title: string;
    image: string;
    rating: number;
    price: number;
}

export const BookItemComponent = () => {
    const params = useParams()
    const { getSingleBook, singleBook } = useBook()

    useEffect(() => {
        console.log(params.bookId)
        if (params.bookId) {
            getSingleBook(params.bookId)
            console.log(singleBook)
        }

    }, [])



    return (

        <div className="flex flex-col items-center text-center w-full px-4">
            {/* Background Container */}

            <div
                className="h-60 w-full flex justify-center items-center relative"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Default fallback color
                    backgroundImage: `url(${singleBook.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                {/* Book Cover Image */}
                <img
                    src={singleBook.coverImage}
                    alt="Item"
                    className="w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 relative"
                />
                {/* Buy Button in Upper Right */}
                <div className="absolute top-4 right-1">
                    <ButtonComponent
                        onClick={() => console.log(singleBook._id)}
                        text="Buy Now"
                        type="button"
                        className="text-white px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition duration-200 shadow-lg"
                    />
                </div>
            </div>

            {/* Book Details */}
            <div className="mt-3 text-center">
                <p className="text-lg font-semibold">{singleBook.bookTitle}</p>
                <span className="text-gray-500">by {singleBook.author}</span>
            </div>

            {/* Book Description - Left Aligned */}
            <span className="mt-2 text-gray-700 text-left w-full px-4">
                {singleBook.description}
            </span>
        </div>


    )
}