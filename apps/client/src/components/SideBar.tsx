
import { Link } from "react-router-dom";
import { menuRoutes } from "../routers/sideNav.route";

export const SideBar = () => {
  return (
    <div className="">
      <nav>
        <h1 className="hidden sm:block text-2xl font-bold pb-6">Settings</h1>

        <div className="flex sm:hidden gap-4 overflow-x-auto whitespace-nowrap px-4 py-2">
          {menuRoutes.map((routeTo) => (
            <Link key={routeTo.title} to={routeTo.to} about={routeTo.description}>
              <i className="text-xl">{routeTo.icon}</i>
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          {menuRoutes.map((routeTo) => (
            <div className="hover:bg-gray-300" key={routeTo.title}>
            
              <Link
                className=" flex items-center space-x-2 text-slate-950 hover:text-blue-950 transition duration-300 text-sm"
                to={routeTo.to}
                about={routeTo.description}
              > 
                <i className="text-xs text-center">{routeTo.icon} </i> 
                
                <span>{routeTo.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
