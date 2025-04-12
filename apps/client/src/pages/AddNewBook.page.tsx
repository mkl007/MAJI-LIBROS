import { AddNewBookForm } from "../components/AddNewBookForm"

export const AddNewBook = () => {

  return (
    <div className="container ">
      <h2 className="  "> Add new book</h2>
      <div className="container max-w-2xl mx-auto mt-10 p-4 ">
        <AddNewBookForm />
      </div>
    </div>
  )
}
