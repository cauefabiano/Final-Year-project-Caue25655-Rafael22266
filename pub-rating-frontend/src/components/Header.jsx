import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-yellow-500 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer space-x-3"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-yellow-500"
          />
          <h1 className="text-2xl font-extrabold text-yellow-500 tracking-wide hover:text-yellow-400 transition">
            PubRatings
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-yellow-500 font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/add-pub" className="hover:text-yellow-300 transition">Add Pub</Link>
          {user ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-yellow-500 font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/add-pub" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Add Pub</Link>
          {user ? (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
                className="block w-full text-left hover:text-yellow-300"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left text-red-400 hover:text-red-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Login</Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
