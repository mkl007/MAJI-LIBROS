import { useAuth } from "../../hooks/useAuth";
import { UserAvatarProfile } from "./UserAvatarProfile";



export const ProfileDescription = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="flex items-center gap-6">
        {user?.userInfo.userAvatar ? (
          <UserAvatarProfile imageUrl={user.userInfo.userAvatar} />
        ) : (
          <div className="w-28 h-28 rounded-full border-4 border-slate-300 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

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
