import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, PlusCircle } from "lucide-react";
import logo from "/src/assets/logo.jpeg"; // ✅ Fixed Import for `.jpeg`

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ✅ Logo and Site Name */}
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <img src={logo} alt="PubRatings Logo" className="w-5 h-5 rounded-md" /> {/* 🔥 Smaller Logo */}
          <span className="text-yellow-400 hover:text-yellow-300 transition">PubRatings</span>
        </Link>

        {/* ✅ Navigation Links */}
        <div className="flex space-x-6 text-white text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          {isLoggedIn && (
            <Link to="/add-pub" className="hover:text-yellow-300 transition flex items-center gap-1">
              <PlusCircle className="w-5 h-5" /> Add Pub
            </Link>
          )}
        </div>

        {/* ✅ User Authentication Buttons */}
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white flex items-center gap-2 shadow-md">
                <User className="w-5 h-5" /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white flex items-center gap-2 shadow-md"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white shadow-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
