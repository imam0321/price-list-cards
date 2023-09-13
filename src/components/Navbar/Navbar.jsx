import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routers = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Service", path: "/service" }
  ];
  
  return (
    <nav className="bg-red-400">
       <div onClick={()=> setOpen(!open)} className="md:hidden py-3 pl-3">
        {/* <span>{open === true ? 'open': 'close'}</span> */}
        <span>
          {
            open === true ? 
               <XMarkIcon className="h-6 w-6 text-black"/> 
               : <Bars3Icon className="h-6 w-6 text-black" />
          }
        </span>
       </div>

      <ul className={`md:flex md:static absolute duration-700 bg-red-400 md:py-4 md:px-12 pl-11 py-6 ${open ? 'top-10' : '-top-48'}`}>
      {
        routers.map(route => <Link 
          key={route.id}
          route={route}
          ></Link>)
      }
      </ul>
    </nav>
  );
};

export default Navbar;