import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-300 border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
        <p className="text-xl text-gray-700">Cargando, por favor espera...</p>
      </div>
    </div>
  );
};



