import { Link, Outlet } from 'react-router-dom'
import { menuRoutes } from '../router/sideNav.route'
import { BookOpenIcon, FlagIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline'



export const SideBar = () => {
  return (
    <main className=" border-2 border-yellow-600 flex flex-row mt-7">
      <nav className="border-2 border-pink-700 hidden sm:flex flex-col ml-5 w-1/3 h-screen bg-white bg-opacity-10 p-5 rounded-3xl">

        <div >
          {
            menuRoutes.map(routeTo => (
              <Link
                to={routeTo.to}
                key={routeTo.title}
                about={`${routeTo.description}`}
              >
                <span>{routeTo.icon}</span>
                {routeTo.title}
              </Link>
            ))
          }
        </div>
      </nav>

      {/* <section className=" border-2 border-green-700 mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section> */}
    </main>
  )
}
