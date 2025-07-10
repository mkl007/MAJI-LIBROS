
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { ArrowLeftStartOnRectangleIcon, Bars3Icon, BellIcon, Cog6ToothIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { SearchInput } from './ui/SearchInput'
import { useAuth } from '../hooks/useAuth'
import { SideBar } from './SideBar'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Settings', href: '/settings' },
    // { name: 'Admin', href: '/admin/dashboard' },
]

const noLogingNavi = [
    { name: 'Home', href: '/' },
    { name: 'Login', href: '/login' },
    { name: 'Signup', href: '/signup' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    const { isLoggedIn } = useAuth()
    const location = useLocation()

    const getPageName = () => {
        const match = [...navigation, ...noLogingNavi].find(item => item.href === location.pathname)
        return match ? match.name : 'Page'
    }

    return (
        <div className='relative'>
            <Disclosure as="nav" className="fixed top-0 left-0 right-0 w-full z-50 bg-gradient-to-b from-blue-900 to-sky-400">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                {/* Mobile menu button */}
                                <div className="sm:hidden">
                                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </DisclosureButton>
                                </div>

                                {/* Logo + Nav + Search */}
                                <div className="flex flex-1 items-center justify-start gap-4">
                                    <img className="h-8 w-auto" src="/logoMaji.webp" alt="MajiBooks" />

                                    {/* Nav Links */}
                                    <div className="hidden sm:flex space-x-4">
                                        {(isLoggedIn ? navigation : noLogingNavi).map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    location.pathname === item.href
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Page Name + Search */}
                                    <div className="ml-4 flex items-center gap-2 border-l border-gray-500 pl-4">
                                        <span className="text-white font-medium inline lg:hidden">{getPageName()}</span>
                                        <SearchInput />
                                    </div>
                                </div>

                                {/* Notifications + Avatar */}
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {isLoggedIn && (
                                        <Menu as="div" className="relative">
                                            <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src="/logo.jpeg" alt="User" />
                                            </MenuButton>
                                            <Transition
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <MenuItems>

                                                        <Link
                                                            to="/profile"
                                                            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                        >
                                                            <UserIcon className="h-5 w-5" />
                                                            My Profile
                                                        </Link>

                                                    </MenuItems>
                                                    <MenuItems>
                                                        <Link
                                                            to="#"
                                                            // className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'

                                                        >
                                                            <Cog6ToothIcon className="h-5 w-5" />
                                                            Settings
                                                        </Link>

                                                    </MenuItems>
                                                    <MenuItems>
                                                        <Link
                                                            to="#"
                                                            onClick={() => {
                                                                window.location.href = `${import.meta.env.VITE_API_URL}/logout`
                                                            }}
                                                            // className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'

                                                        >
                                                            <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                                                            Sign out
                                                        </Link>

                                                    </MenuItems>
                                                </MenuItems>
                                            </Transition>
                                        </Menu>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mobile panel */}
                        <DisclosurePanel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {(isLoggedIn ? navigation : noLogingNavi).map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </DisclosurePanel>
                        <div className="w-full bg-slate-100 h-10 md:hidden">
                            <SideBar />
                        </div>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
