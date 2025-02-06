import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPub from "./pages/AddPub";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // ✅ Ensure this is imported correctly

import Profile from "./pages/Profile";
import PubDetails from "./pages/PubDetails";
import Navbar from "./components/Navbar"; // ✅ Ensure Navbar is included

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar /> {/* ✅ Keeps Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-pub" element={<AddPub />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pub/:id" element={<PubDetails />} />
      </Routes>
    </div>
  );
}

export default App;
