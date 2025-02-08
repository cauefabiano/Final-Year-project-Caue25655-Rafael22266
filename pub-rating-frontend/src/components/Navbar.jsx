import { Link, useNavigate } from "react-router-dom";
import { LogOut, User, PlusCircle } from "lucide-react";
import logo from "/src/assets/logo.jpeg"; // ✅ Ensure correct path

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav style={{
      position: "fixed", // ✅ Sticks navbar to the top
      top: 0,
      left: 0,
      width: "100%", 
      backgroundColor: "#1A202C", // Dark Gray
      padding: "10px 0",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      zIndex: 1000 // Ensures it stays on top
    }}>
      
      {/* ✅ Main Layout (Keeps everything in a row) */}
      <div style={{ width: "100%", height: "60px", position: "relative" }}>
        
        {/* ✅ Logo and Site Name (Left) */}
        <div style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "20px" }}>
            <img 
              src={logo} 
              alt="PubRatings Logo" 
              style={{
                width: "80px", // ✅ Keeping YOUR original size
                height: "auto",
                objectFit: "contain",
                display: "inline-block",
                verticalAlign: "middle",
              }} 
            />
            <span style={{ marginLeft: "10px", color: "#FFC700" }}>PubRatings</span>
          </Link>
        </div>

        {/* ✅ Navigation Links (Centered) */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
          <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontSize: "18px" }}>
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/add-pub" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              <PlusCircle style={{ width: "20px", height: "20px", verticalAlign: "middle" }} /> Add Pub
            </Link>
          )}
        </div>

        {/* ✅ User Authentication Buttons (Right) */}
        <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)" }}>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{
                backgroundColor: "#6B46C1",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                marginRight: "10px"
              }}>
                <User style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> Profile
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#E53E3E",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <LogOut style={{ width: "16px", height: "16px", verticalAlign: "middle" }} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{
              backgroundColor: "#3182CE",
              color: "white",
              padding: "8px 16px",
              borderRadius: "6px",
              textDecoration: "none"
            }}>
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
