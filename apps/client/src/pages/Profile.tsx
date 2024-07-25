import axios from "axios";
import { BookReal } from "../interfaces/User.interface";
import { useAuth } from "../hooks/useAuth";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";



export const Profile = () => {
  const { data } = useAuth()

  return (
    <div className="container h-screen mt-4 mb-4 border-2 border-late-600">
      <h1>Profile</h1>
      <div className="flex">

        <MyDescription />
        <MyBooksProfileComponent />
        <TradedBooks />

      </div>
    </div>
  )
}


// export const MyDescription = ({imageUrl}: {imageUrl: string | undefined}) => {
export const MyDescription = () => {
  return (
    <div className=" w-1/3 container">
      <ImageEditCircle imageUrl={'https://picsum.photos/200/300'} />
      <h1>My Description</h1>

    </div>
  )
}

export const ImageEditCircle = ({ imageUrl }: { imageUrl: string | undefined }) => {
  // const imageUrl =''
  function onEdit() {
    console.log('onEdit clicked')
  }

  return (
    <div className="relative w-44 h-42  border-4 border-slate-300 rounded-full ">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-full rounded-full object-cover"
        style={{ width: '168px', height: '168px' }}
      />
      <button
        onClick={onEdit}
        className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg"
      >
        <FaEdit className="text-gray-700" />
      </button>
    </div>
  );
};


export const MyBooksProfileComponent = () => {
  return (
    <div className=" container w-1/3 border-2 ">
      <h1>My Books</h1>
      <AddCard />

    </div>
  )
}

export const AddCard = () => {
  // export const AddCard = ({ onAdd }: { onAdd: MouseEventHandler<HTMLButtonElement> }) => {
  const onAdd = () => {
    console.log('Add clicked')
  }
  return (
    <Link to={"/addNewBook"}>
      <div
        className="flex justify-center items-center w-24 h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
      >
        <button
          onClick={onAdd}
        >
          <FaPlus className="text-gray-500 text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export const TradedBooks = () => {
  return (
    <div className="w-1/3 container">
      <h1>Traded Books</h1>
      <p>There's no traded books yet.</p>
    </div>
  )
}


