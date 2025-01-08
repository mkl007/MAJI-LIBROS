import { useState } from "react"
import { FeedItemProps } from "../interfaces/User.interface"
import { FeedItem } from "./Feeds.compoment"

export const MyCartComponent = () => {

  const [isItemInCart, setisItemInCart] = useState<FeedItemProps | null>(null)
  return (
    <div>
      <p>This is my cart</p>
      {
        isItemInCart ? <FeedItem {...isItemInCart} /> : <p>No item in cart</p>
      }
    </div>
  )
}


