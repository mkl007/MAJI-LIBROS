import React, { useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { FeedItemProps } from "../interfaces/User.interface";
import { BookFormData } from "./AddNewBookForm";
import { ViewContentLoginSuggest } from "./popups/ViewContentLoginPrompt";

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
            <div className=" bg-slate-50 hover:shadow-indigo-800/40 hover:shadow-2xl ">
                <div className="flex flex-col justify-center p-2 " >
                    <Link
                        to={`${_id == undefined ? '#' : '/bookItem/'}${_id}`}
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
