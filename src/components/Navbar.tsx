import logo from '../assets/C&C logo2.png';
import { Breadcrumb } from "./Breadcrumb";

export const Navbar = () => {
  return (
    <header className="bg-opacity-75">
      <div className="flex items-center px-4 py-2">
        <img src={logo} alt="Logo" className="h-20" />
      </div>

      {/* Navbar Principal */}
      <nav className="bg-gray-600 text-white p-2">
        <Breadcrumb />
      </nav>
    </header>
  );
};

export default Navbar;
