import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AddNewBookCard = () => {
    // export const AddCard = ({ onAdd }: { onAdd: MouseEventHandler<HTMLButtonElement> }) => {
    const onAdd = () => {
      console.log('Add clicked')
    }
    return (
      <Link to={"/addNewBook"}>
        <div
          className="flex justify-center items-center w-auto h-40 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
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