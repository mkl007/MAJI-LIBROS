import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginModalProps {
  message: string
}


const ModalPromptingToLogin2 = () => {
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
            <Link to={'/login'}>

              <button
                onClick={toggleModal}
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
              >
                x
              </button>
            </Link >
            <h2 className="text-lg font-bold mb-4"> Welcome to MajiBooks </h2>
            <p>Your email is verified. Now login to access to the content</p>
            <Link to={'/login'}>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleModal}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export const Userverificationsuccess = () => {
  return (
    <div>
      <ModalPromptingToLogin2 />
    </div>
  )
}
