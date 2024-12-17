import React from 'react';

export const MiniLoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div className="w-10 h-10 border-4 border-indigo-900 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 top-0 left-0 w-10 h-10 border-4 border-indigo-600 border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
        <p className="text-sm text-stone-950">...</p>
      </div>
    </div>
  );
};
