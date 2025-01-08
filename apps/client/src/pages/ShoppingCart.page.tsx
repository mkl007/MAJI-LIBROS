import { MyCartComponent } from "../components"

export const ShoppingCartPage = () => {
  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center border-2 border-red-600">

      <h1>My Cart</h1>
      <MyCartComponent />

    </div>
  )
}
