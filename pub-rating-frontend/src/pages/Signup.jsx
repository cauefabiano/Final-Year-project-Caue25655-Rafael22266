import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api"; // ✅ Ensure correct import

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      alert("✅ Signup successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      setError("❌ Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 max-w-md w-full bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-400 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-700 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 p-2 rounded-lg font-bold text-black"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-300 mt-3">
          Already have an account? <a href="/login" className="text-yellow-400">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
