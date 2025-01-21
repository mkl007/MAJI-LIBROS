import { useEffect, useState } from "react"
import { FeedItem } from "./Feeds.compoment"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"
import { ButtonComponent } from "./Buttons/ButtonComponent"

export const MyCartComponent = () => {
  const { showAllMyItemsInCart, itemCarts, isLoading, removeItemFromCart, message } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [])


  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
      {
        itemCarts.length > 0 ? itemCarts.map((item) => (
          <div key={item._id} >

            <div className="border-t-2 border-gray-200 flex items-center p-2">
              <ButtonComponent onClick={() => removeItemFromCart(item._id!)} text="Remove" type="button" />
              <ButtonComponent
                onClick={() => console.log("Buy Now")}
                text="Buy Now"
                type="button"
                className="bg-green-500 text-white ml-3 px-2 py-2 rounded-md"
              />
            </div>

            <FeedItem key={item._id} {...item} />
          </div>
        )) : (
          <h1 className="flex align-center items-center p-2 text-white bg-slate-400">No items in cart</h1>
        )
      }
      {
        isLoading && <div className="flex justify-center items-center"><LoadingSpinner /></div>
      }
    </div>
  )
}


