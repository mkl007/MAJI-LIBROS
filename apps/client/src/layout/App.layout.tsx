import { Link, Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { menuRoutes } from "../routers/sideNav.route";
import { Navbar } from '../components/NavBar.component';
import { Footer } from "../components";


export const AppLayout = () => {
  return (
    <div className=" ">

      <div className="flex container">
        <div className="block">
          <Navbar />

          <div className="hidden md:block container mt-16 pt-2 w-44 h-full
          border-2 border-yellow-300
          ">
            <SideBar />

          </div>

        </div>
        <div className=" flex-1 mt-28 my-10 md:flex-1 md:mt-16 md:pt-2 md:h-full 
                        border-2 border-red-600 lg
        ">
          <Outlet />
        </div>
        <div>
          <section className="hidden lg:block container mt-16 pt-2 w-44 h-full
          border-2 border-green-600

          ">

            This is for the section
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

