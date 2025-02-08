
import {BookOpenIcon, FlagIcon, ArchiveBoxIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'


export const menuRoutes = [
    {
      to: "/mybooks",
      icon: <BookOpenIcon className="h-6 w-6 mr-2 " aria-hidden="true" />,
      title: "My Books",
      description: "List of my books",
      },
    {
      to: "/addNewBook",
      icon: <FlagIcon className="h-6 w-6 mr-2" aria-hidden="true" />,
      title: "New Book",
      description: "Add new book",
      },
    {
      to: "/settings",
      icon: <ArchiveBoxIcon className="h-6 w-6 mr-2" aria-hidden="true" />,
      title: "Settings",
      description: "Customize my account",
      },
      {
        to: "/cart",
        icon: <ShoppingCartIcon className="h-6 w-6 mr-2" aria-hidden="true" />,
        title: "My Cart",
        description: "View Cart",
        },
          
  ];
