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
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#1A202C",
      padding: "10px 0",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      zIndex: 1000
    }}>
      
      <div style={{
        width: "100%",
        height: "60px",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr", // ✅ Keeps left, center, and right aligned
        alignItems: "center",
        padding: "0 20px",
      }}>
        
        {/* ✅ Logo and Site Name (Left) */}
        <div style={{ justifySelf: "start" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "16px", display: "flex", alignItems: "center" }}>
            <img 
              src={logo} 
              alt="PubRatings Logo" 
              style={{
                width: "80px",  // ✅ Keeping YOUR original size
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
        <div style={{ textAlign: "center" }}>
          <Link to="/" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontSize: "14px" }}>
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/add-pub" style={{ margin: "0 15px", color: "white", textDecoration: "none", fontSize: "14px" }}>
              <PlusCircle style={{ width: "18px", height: "18px", verticalAlign: "middle" }} /> Add Pub
            </Link>
          )}
        </div>

        {/* ✅ User Authentication Buttons (Right) */}
        <div style={{ justifySelf: "end", display: "flex", gap: "10px" }}>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{
                backgroundColor: "#6B46C1",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none"
              }}>
                <User style={{ width: "14px", height: "14px", verticalAlign: "middle" }} /> Profile
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#E53E3E",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <LogOut style={{ width: "14px", height: "14px", verticalAlign: "middle" }} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{
              backgroundColor: "#3182CE",
              color: "white",
              padding: "6px 12px",
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
