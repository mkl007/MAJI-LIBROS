import { useEffect } from "react"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { ButtonComponent } from "./ui/ButtonComponent"
import { useAuth } from "../hooks/useAuth"
import { FeedItem } from "./FeedItem"
import {FaDeleteLeft, FaShop } from "react-icons/fa6"
import { FaShoppingCart } from "react-icons/fa"

export const MyCartComponent = () => {
  const { user } = useAuth()
  const { showAllMyItemsInCart, itemCarts, isLoadingCart, removeItemFromCart } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [user])


  return (

    <div>
      <h1 className="text-xl font-bold mb-4">Shopping Cart:</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      lg:grid-cols-4 gap-2 xl:grid-cols-5 
                      xl:gap-0">
        {/* <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0"> */}
        {
          itemCarts.length > 0 ? itemCarts.map((item) => (
            <div key={item._id} >

              <div className=" flex items-center 
                                 justify-between rounded-md mb-2 text-xs sm:text-sm
                                md:text-md  lg:text-base xl:text-lg">


                <ButtonComponent
                  onClick={() => removeItemFromCart(item._id!)}
                  text="Remove"
                  type="button"
                  className="pr-2 pl-1 ml-4 bg-red-500 flex items-center 
                            justify-center text-white  
                            rounded-sm hover:bg-red-700 transition duration-200  "
                  icon={<FaDeleteLeft className="icon" />}
                />




                <ButtonComponent
                  onClick={() => console.log("Buy")}
                  text="Buy"
                  type="button"
                  className="bg-gradient-to-r from-orange-500 to-green-500 hover:from-red-500 
                               hover:to-orange-500 flex items-center
                            justify-center text-white pl-2 pr-2 mr-4
                            transition
                            duration-2000 rounded-sm"
                  icon={<FaShoppingCart className="icon" />}
                />

              </div>

              <FeedItem key={item._id} {...item} />
            </div>
          )) : (
            <h1 className="flex align-center items-center p-2 text-white bg-slate-400">No items in cart</h1>
          )
        }
        {
          isLoadingCart && <div className="flex justify-center items-center"><LoadingSpinner /></div>
        }
      </div>
    </div>
  )
}


