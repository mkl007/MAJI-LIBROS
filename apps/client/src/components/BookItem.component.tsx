import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useBook } from '../hooks/useBook'
import { FeedItem } from './FeedItem'
import { ButtonComponent } from './ui/ButtonComponent'

export const BookItemComponentes = () => {
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
        <div className='container border-2 border-red-400 flex'>
            <div className=''>
                <FeedItem
                    author={singleBook.author}
                    availabilityStatus={singleBook.availabilityStatus}
                    bookTitle={singleBook.bookTitle}
                    coverImage={singleBook.coverImage}
                />
            </div>

            <div className=' container w-1/3 border-2 border-yellow-500'>
            <ButtonComponent 
                key={singleBook._id}
                onClick={()=> console.log('Buying...')}
                text='Buy'
                type='button'
                className='bg-blue-900 hover:bg-blue-600 px-4'
            />
                <span>Desc: {singleBook.description}</span>
            </div>
        </div>
    )
}
