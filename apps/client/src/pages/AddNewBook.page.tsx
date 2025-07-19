import { AddNewBookForm } from "../components/AddNewBookForm"

export const AddNewBook = () => {

  return (
    <div className="container ">
      <h2 className=" flex flex-col items-center Text-subtitle  "> Add new book</h2>
      <div className="container max-w-2xl mx-auto mt-10 p-4 ">
        <AddNewBookForm />
      </div>
    </div>
  )
}
