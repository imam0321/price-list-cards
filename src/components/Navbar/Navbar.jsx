import Link from "../Link/Link";
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const routers = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Service", path: "/service" }
  ];
  
  return (
    <nav>
       <div>
        <Bars3Icon className="h-6 w-6 text-blue-500" />
       </div>
      <ul className="md:flex">
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