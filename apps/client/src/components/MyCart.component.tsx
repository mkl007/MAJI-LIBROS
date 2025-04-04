import { useEffect } from "react"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { ButtonComponent } from "./ui/ButtonComponent"
import { useAuth } from "../hooks/useAuth"
import { FeedItem } from "./FeedItem"

export const MyCartComponent = () => {
  const { user } = useAuth()
  const { showAllMyItemsInCart, itemCarts, isLoadingCart, removeItemFromCart } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [user])


  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
      {
        itemCarts.length > 0 ? itemCarts.map((item) => (
          <div key={item._id} >

            <div className="border-t-2 border-gray-200 flex items-center justify-content-around px-2 ">
            {/* <div className="border-t-2 border-gray-200 flex items-center p-2 justify-between bg-slate-200 rounded-md mb-2"> */}
              <ButtonComponent
                onClick={() => removeItemFromCart(item._id!)}
                text="Remove"
                type="button"
                className="pr-4 bg-red-500 flex items-center 
                            justify-center w-full text-white px-2 py-2 
                            rounded-md hover:bg-red-700 transition duration-200 md:w-2/4"
              />

           

              <ButtonComponent
                onClick={() => console.log("Buy Now")}
                text="Buy Now"
                type="button"
                className="bg-green-500 flex items-center
                            justify-center w-full text-white px-2 py-2 pl-4
                            hover:bg-green-700 transition
                            duration-200 md:w-2/4"
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
  )
}


