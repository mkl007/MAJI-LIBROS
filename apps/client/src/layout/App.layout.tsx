import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";


export const AppLayout = () => {
  return (
    <div className=" border-2 border-yellow-600 flex ">
      <div className="mt-16 w-60 h-screen bg-white  p-4 ">
        <SideBar />
      </div>
      <div className=" container mt-6 pt-5 h-full">
        <Outlet />
      </div>
    </div>
  );
};



