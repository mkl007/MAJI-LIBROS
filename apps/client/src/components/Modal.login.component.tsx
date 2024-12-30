import { useState } from "react";

interface LoginModalProps{
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
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </>
    );
  };
  
