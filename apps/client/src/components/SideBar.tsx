import { Link } from 'react-router-dom';
import { menuRoutes } from '../router/sideNav.route';

export const SideBar = () => {
  return (
    <div>
      <nav className="fixed mt-10 w-60 h-screen bg-white border-r border-gray-300 p-4 z-50">
        <h1 className="text-2xl font-bold pb-6">Settings</h1>
        {menuRoutes.map((routeTo) => (
          <div className="hover:bg-gray-300" key={routeTo.title}>
            <Link
              className="inline-flex items-center space-x-2 text-slate-950 hover:text-blue-950 transition duration-300 text-sm"
              to={routeTo.to}
              about={routeTo.description}
            >
              <i className="text-xs">{routeTo.icon}</i>
              <span>{routeTo.title}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
