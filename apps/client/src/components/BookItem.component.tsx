import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBook } from '../hooks/useBook'
import { FeedItem } from './FeedItem'
import { ButtonComponent } from './ui/ButtonComponent'
import { FaGoogle } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'

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

        <div className="flex flex-col items-center text-center w-full h-auto px-4 pt-2">
            {/* Background Container */}

            <div className="relative w-full md:w-2/3 h-60 flex justify-center items-cente">
                {/* Add to car */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-md"
                    style={{
                        backgroundImage: `url(${singleBook.coverImage})`,
                    }}
                ></div>

                <img
                    src={singleBook.coverImage}
                    alt="Book Cover"
                    className="w-40 max-h- sm:w-52 md:w-60 lg:w-72 xl:w-80 relative"
                />
            </div>
            <div className='absolute justify-items-end items-center w-full px-3 py-2'>
                <button
                    onClick={() => console.log('cart')}
                    className="flex items-center px-3 py-2  justify-center 
                    rounded-md font-semibold leading-6  shadow-sm  focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-indigo-600 bg-red-600 text-white 
                      hover:bg-red-700 transition duration-200 ">
                    <FaShop className='icon' />
                    <span className="lg:text-md">Cart</span>
                </button>
            </div>

            {/* Right Side: Details */}
            <div className="flex flex-col text-right space-y-3">

                {/* Book Details */}
                <div className="w-full pt-3 ">
                    <div className='flex justify-between items-center'>
                        <span className="text-lg font-semibold text-left ">{singleBook.bookTitle}</span>
                        {/* Buy Button */}
                        <ButtonComponent
                            onClick={() => console.log(singleBook._id)}
                            text="Buy Now"
                            type="button"
                            className="bg-gradient-to-r from-orange-500
                         to-red-500 hover:from-red-500 hover:to-orange-500
                          text-white px-4 py-2 rounded-lg shadow-lg"
                        />

                    </div>

                    <div className='flex justify-between items-center'>
                        <p className="text-gray-500 ">By {singleBook.author}</p>
                        {singleBook.price && singleBook.price !== 0 ? (
                            <span className="text-gray-500 pt-2 pr-8">Price: ${singleBook.price}</span>
                        ) : (
                            <span className="text-gray-500 pt-2">Price: Exchange</span>
                        )}

                    </div>
                </div>

                {/* Description */}
                <p className='w-full text-left'>
                    <span className="text-black font-semibold">Description: </span>
                    <span className="text-gray-700 text-left">{singleBook.description}</span>
                </p>
            </div>

        </div>


    )
}