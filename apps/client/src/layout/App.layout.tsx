import { Link, Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { menuRoutes } from "../routers/sideNav.route";
import { Navbar } from '../components/NavBar.component';
import { Footer } from "../components";


export const AppLayout = () => {
  return (
    <div>
      <div className="flex ">
        {/* <div className="hidden sm:block container mt-16 pt-2 w-60 h-full "> */}
        <div className="block">
          <div className="hidden md:block container mt-16 pt-2 w-60 h-full">
            <SideBar />

          </div>
          <Navbar />
          {/* <SideBarFake /> */}
        </div>
        <div className=" flex-1 mt-28 my-10 md:flex-1 md:mt-16 md:pt-2 md:h-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const SideBarFake = () => {

  return (
    // <div className="hidden sm:block">
    <div>
      {menuRoutes.map((routeTo) => (
        <div key={routeTo.title}>

          <Link
            to={routeTo.to}
            about={routeTo.description}
          >
            <i className="text-xs text-center">{routeTo.icon} </i>

            <span>{routeTo.title}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

