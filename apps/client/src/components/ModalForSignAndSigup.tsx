import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Abrir Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded shadow-lg z-50">
            <h2 className="text-lg font-bold mb-4">Modal Title</h2>
            <p className="mb-4">Contenido del modal...</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
