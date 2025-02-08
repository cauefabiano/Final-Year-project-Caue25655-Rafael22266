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
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr", // ✅ Keeps left, center, and right aligned
        alignItems: "center",
        padding: "0 10px"
      }}>

        {/* ✅ Logo and Site Name (Left) */}
        <div style={{ justifySelf: "start", display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "16px" }}>
            <img 
              src={logo} 
              alt="PubRatings Logo" 
              style={{
                width: "60px",  // ✅ Smaller logo for mobile
                height: "auto",
                objectFit: "contain",
                display: "inline-block"
              }} 
            />
            <span style={{ marginLeft: "5px", color: "#FFC700", fontSize: "14px" }}>PubRatings</span>
          </Link>
        </div>

        {/* ✅ Navigation Links (Centered) */}
        <div style={{ textAlign: "center", display: "flex", gap: "12px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "14px" }}>
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/add-pub" style={{ color: "white", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" }}>
              <PlusCircle style={{ width: "14px", height: "14px", verticalAlign: "middle" }} /> Add Pub
            </Link>
          )}
        </div>

        {/* ✅ User Authentication Buttons (Right) */}
        <div style={{ justifySelf: "end", display: "flex", gap: "8px" }}>
          {isLoggedIn ? (
            <>
              <Link to="/profile" style={{
                backgroundColor: "#6B46C1",
                color: "white",
                padding: "6px 10px",
                borderRadius: "6px",
                fontSize: "12px",
                textDecoration: "none"
              }}>
                <User style={{ width: "12px", height: "12px", verticalAlign: "middle" }} /> Profile
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: "#E53E3E",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                <LogOut style={{ width: "12px", height: "12px", verticalAlign: "middle" }} /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{
              backgroundColor: "#3182CE",
              color: "white",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "12px",
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
