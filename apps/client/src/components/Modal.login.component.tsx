import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { Link, redirect } from "react-router-dom";
import { ButtonComponent } from "./ui/ButtonComponent";

interface LoginModalProps {
  message: string
}

export const ModalLogin: React.FC<LoginModalProps> = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => {
    console.log('hi from toggleModal')
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg z-50">
            <button
              onClick={toggleModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
            >
              x
            </button>
            <h2 className="text-lg font-bold mb-4"> {message} </h2>
           
            <Link
              to={"/login"}
            >
              <ButtonComponent
                onClick={() =>{} }
                text="Login"
                type="button"
                icon={<LuLogIn className="h-5 w-5" />}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-70 bg-slate-600
                           hover:bg-gray-900 rounded-md"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

