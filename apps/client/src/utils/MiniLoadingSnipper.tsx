import React from 'react';

export const MiniLoadingSpinner: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div className="w-10 h-10 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-10 h-10 border-4 border-gray-600 border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
        {/* <p className="text-sm text-stone-950">...</p> */}
      </div>
    </div>
  );
};
