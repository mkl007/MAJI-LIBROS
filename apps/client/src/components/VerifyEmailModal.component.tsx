
export interface VerifyEmailModalInterface {
  message: string;
  onClose: () => void;
}

export const VerifyEmailModalComponent: React.FC<VerifyEmailModalInterface> = ({ message, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute  bg-gray-900 opacity-50"></div>
        <div className="bg-white p-8 rounded shadow-lg z-50">
          <h2 className="text-lg font-bold mb-4">Hi, Welcome to MajiBooks</h2>
          <p className="mb-4">{message}</p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
