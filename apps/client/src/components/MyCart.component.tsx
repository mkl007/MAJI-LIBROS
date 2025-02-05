import { useEffect } from "react"
import { FeedItem } from "./Feeds.compoment"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { ButtonComponent } from "./ui/ButtonComponent"
import { useAuth } from "../hooks/useAuth"

export const MyCartComponent = () => {
  const {user} = useAuth()
  const { showAllMyItemsInCart, itemCarts, isLoadingCart, removeItemFromCart } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [user])


  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
      {
        itemCarts.length > 0 ? itemCarts.map((item) => (
          <div key={item._id} >

            <div className="border-t-2 border-gray-200 flex items-center p-2">
              <ButtonComponent 
                onClick={() => removeItemFromCart(item._id!)} 
                text="Remove" 
                type="button" 
                className="bg-red-500"
                />

              <ButtonComponent
                onClick={() => console.log("Buy Now")}
                text="Buy Now"
                type="button"
                className="bg-green-500"
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


