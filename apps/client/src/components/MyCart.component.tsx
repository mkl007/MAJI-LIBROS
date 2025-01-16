import { useEffect, useState } from "react"
import { FeedItem } from "./Feeds.compoment"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { LoadingSpinner } from "../utils/LoadingSnipper"

export const MyCartComponent = () => {
  const { showAllMyItemsInCart, itemCarts, isLoading } = useShoppingCart()

  useEffect(() => {
    showAllMyItemsInCart()
  }, [])

  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-0">
      {
        itemCarts ? itemCarts.map((item) => {
          return <div ><FeedItem key={item._id} {...item} /></div>
        }) : <p>No items in cart</p>
      }
      {
        isLoading && <div className="flex justify-center items-center"><LoadingSpinner /></div>
      }
    </div>
  )
}


