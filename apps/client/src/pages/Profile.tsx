import { FaEdit } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export const Profile = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center border-2 border-green-600">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-xl">
        <MyDescription />
        <TradedBooks />
      </div>
    </div>
  );
};

export const MyDescription = () => {
  const { user } = useAuth();

  return (
    // <div className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-6 border-2 border-gray-200 ">
    <div className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-6 ">
      <div className="flex items-center gap-6">
        <ImageEditCircle imageUrl={user?.userInfo.userAvatar} />

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p>
            <strong className="text-gray-600">Name:</strong>{" "}
            {user?.userInfo.fullname}
          </p>
          <p>
            <strong className="text-gray-600">Email:</strong>{" "}
            {user?.userInfo.email}
          </p>
          <p>
            <strong className="text-gray-600">Provider:</strong>{" "}
            {user?.userInfo.provider.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ImageEditCircle = ({
  imageUrl,
}: {
  imageUrl: string | undefined;
}) => {
  function onEdit() {
    console.log("onEdit clicked");
  }

  return (
    <div className="relative w-44 h-44 border-4 border-slate-300 rounded-full overflow-hidden">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-full h-full object-cover"
      />
      <button
        onClick={onEdit}
        className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform"
        title="Edit Profile Picture"
      >
        <FaEdit className="text-gray-600" />
      </button>
    </div>
  );
};

export const TradedBooks = () => {
  return (
    <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Traded Books</h2>
      <p className="text-gray-600">There's no traded books yet.</p>
    </div>
  );
};
