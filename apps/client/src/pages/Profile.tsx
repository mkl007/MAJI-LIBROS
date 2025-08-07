import { ProfileDescription } from "../components/profile/ProfileDescription";
import { TradedBooks } from "../components/profile/TradedBooks";


export const Profile = () => {
  return (
    <div className=" h-screen w-full bg-gray-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        < ProfileDescription/>
        <TradedBooks />
      </div>
    </div>
  );
};

