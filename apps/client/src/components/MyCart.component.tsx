import { useEffect } from "react"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { ButtonComponent } from "./ui/ButtonComponent"
import { useAuth } from "../hooks/useAuth"
import { FeedItem } from "./FeedItem"
import { FaShoppingCart } from "react-icons/fa"
import { TrashIcon } from "@heroicons/react/16/solid"

export const MyCartComponent = () => {
  const { user } = useAuth()
  const { showAllMyItemsInCart, itemCarts, isLoadingCart, removeItemFromCart } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [user])


  return (

    <div>
      <h1 className="text-xl font-bold mb-4">Shopping Cart:</h1>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
        {
          itemCarts.length > 0 ? itemCarts.map((item) => (
            <div key={item._id} >

              <div
                className="flex"
              >

                <ButtonComponent
                  onClick={() => removeItemFromCart(item._id!)}
                  text="Remove"
                  type="button"
                  className="flex items-center justify-center w-1/3 bg-red-500
                            text-white ml-2 mr-4 px-2 py-2 rounded-md hover:bg-red-900 
                            transition duration-200 md:w-1/2 md:text-xs"
                  icon={<TrashIcon className="h-6 w-6 text-white " />}
                />

                <ButtonComponent
                  onClick={() => alert("You are buying this item {}".replace("{}", item.bookTitle))}
                  text="Buy"
                  type="button"
                  className="flex items-center justify-center w-1/3 bg-orange-500
                            text-white ml-2 mr-2 lg:ml-0  px-2 py-2 md:px-1 md:py-1 
                            md:ml-1 md:mr-1 rounded-md hover:bg-orange-900 
                            transition duration-200 md:w-1/2 md:text-xs"
                  icon={<FaShoppingCart className="h-4 w-4 text-white mr-2 " />}
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


