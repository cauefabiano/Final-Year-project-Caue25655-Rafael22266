import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pintpal-logo.png";
import { Home, PlusCircle, Info, LogIn, LogOut, User } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 border-b border-yellow-500 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Nome */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Pint Pal Logo"
            className="w-10 h-10 rounded-full border border-yellow-500"
          />
          <span className="text-3xl font-extrabold text-yellow-500 tracking-wide">
            Pint Pal
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/add-pub"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <PlusCircle size={18} />
            <span>Add Pub</span>
          </Link>
          <Link
            to="/about-us"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Info size={18} />
            <span>About Us</span>
          </Link>

          {/* Profile Link */}
          {token ? (
            <Link
              to="/profile"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <User size={18} />
              <span>Profile</span>
            </Link>
          ) : null}

          {/* Logout/ Login Button */}
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
