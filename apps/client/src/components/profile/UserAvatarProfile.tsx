import { FaEdit } from "react-icons/fa";

interface Props {
  imageUrl: string | undefined;
}

export const UserAvatarProfile = ({ imageUrl }: Props) => {
  function onEdit() {
    console.log("onEdit clicked");
  }

  return (
    <div className="relative w-28 h-28 border-4 border-slate-300 rounded-full overflow-hidden">
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
