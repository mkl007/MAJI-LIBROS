import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBook } from "../hooks/useBook";
import { ButtonComponent } from "./ui/ButtonComponent";
import { FaShop } from "react-icons/fa6";

export const BookItemComponent = () => {
    const params = useParams();
    const { getSingleBook, singleBook } = useBook();

    useEffect(() => {
        if (params.bookId) {
            getSingleBook(params.bookId);
        }
    }, [params.bookId]);

    return (
        <div className="flex flex-col items-center text-center w-full h-auto px-4 
                        border-2 border-red-500 sm:border-yellow-500 md:border-green-500 md:w-4/6 lg:border-orange-700">

            {/* Book Cover Section */}
            <div className="relative w-full sm:w-1/2 h-60 sm:h-72 flex justify-center items-center 
                            bg-gray-200 sm:rounded-lg sm:overflow-hidden sm:shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-md"
                    style={{ backgroundImage: `url(${singleBook.coverImage})` }}
                ></div>
                <img
                    src={singleBook.coverImage}
                    alt="Book Cover"
                    className="w-40 sm:w-52 md:w-60 lg:w-64 relative"
                />
            </div>

            {/* Cart Button (Only on Mobile) */}
            <div className="absolute top-3 right-3 md:hidden">
                <button
                    onClick={() => console.log("cart")}
                    className="flex items-center px-3 py-2 rounded-md font-semibold leading-6 
                               shadow-sm bg-red-600 text-white hover:bg-red-700 transition duration-200"
                >
                    <FaShop className="mr-2" />
                    <span>Cart</span>
                </button>
            </div>

            {/* Book Details Section */}
            <div className="w-full text-right space-y-3 pt-3">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-left">{singleBook.bookTitle}</span>
                    <ButtonComponent
                        onClick={() => console.log(singleBook._id)}
                        text="Buy Now"
                        type="button"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 
                                   hover:to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-gray-500">By {singleBook.author}</p>
                    <span className="text-gray-500 pt-2 pr-8">
                        {singleBook.price && singleBook.price !== 0 ? `Price: $${singleBook.price}` : "Price: Exchange"}
                    </span>
                </div>

                {/* Book Description */}
                <p className="w-full text-left">
                    <span className="text-black font-semibold">Description: </span>
                    <span className="text-gray-700">{singleBook.description}</span>
                </p>
            </div>
        </div>
    );
};
