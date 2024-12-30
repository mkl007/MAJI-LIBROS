import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { SearchInput } from './SearchInput.component'
import { useAuth } from '../hooks/useAuth'



const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'Settings', href: '/settings', current: false },
    { name: 'Admin', href: '/adminpage', current: false },
]

const noLogingNavi = [
    { name: 'Home', href: '/', current: false },
    { name: 'Login', href: '/login', current: false },
    { name: 'Signup', href: '/signup', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    const { isLoggedIn } = useAuth()

    return (
        <div className='relative' >
            {isLoggedIn ? (
                <Disclosure as="nav" className="fixed top-0 left-0 right-0 w-full bg-gray-800 z-50 ">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className=" flex h-16 items-center justify-between">
                                    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center">
                                            {/* <img
                                            className="h-8 w-auto"
                                            src='/logoMaji.webp'
                                            alt="MajiBooks"
                                        /> */}
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-7/12 ml-6 '>
                                            <SearchInput />
                                        </div>
                                    </div>
                                    <div className="absolute mr-4 inset-y-0 right-0 flex space-x-4 items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {/* <div className="absolute inset-y-0 right-0 flex space-x-4 items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}

                                        <div>
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <Menu as="div" className="ml-3 absolute inset-y-0 right-0 flex space-x-4 items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <div>
                                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="/logo.jpeg"
                                                        alt="UserLogo"
                                                    />
                                                </MenuButton>
                                            </div>
                                            <Transition
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-24 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/profile"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                My Profile
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Sign out
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                            <DisclosurePanel className="sm:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ) : (
                <Disclosure as="nav" className="fixed top-0 left-0 right-0 w-full bg-gray-800 z-50">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </DisclosureButton>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                        <div className="flex flex-shrink-0 items-center">
                                            {/* <img
                                            className="h-8 w-auto"
                                            src='/logoMaji.webp'
                                            alt="MajiBooks"
                                        /> */}
                                        </div>
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                {noLogingNavi.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-7/12 ml-6  '>
                                            <SearchInput />
                                        </div>
                                        {/* Aqui deben haber dos componentes, el de las notificaciones, 
                                     y el del profile or user settings */}
                                        <div className="absolute inset-y-0 right-0 flex space-x-4 items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                            <div className=' flex'>
                                                <button
                                                    type="button"
                                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                    <span className="sr-only">View notifications</span>
                                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                            {/* Set a component which shows the the user information if user is loggedin, if no show no user and
                                            a avatar
                                           */}

                                        </div>
                                    </div>


                                </div>
                            </div>
                            {/* this is the hidden menu */}
                            <DisclosurePanel className="sm:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {noLogingNavi.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            )}
        </div>
    );
};
