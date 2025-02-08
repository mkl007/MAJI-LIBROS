import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";


export const AppLayout = () => {
  return (
    <div className=" border-2 border-yellow-600 flex ">
      <div className="hidden sm:block container mt-16 pt-2 w-60 h-full ">
        <SideBar />
      </div>
      <div className=" flex-1 mt-16 pt-2 h-full">
        <Outlet />
      </div>
    </div>
  );
};



