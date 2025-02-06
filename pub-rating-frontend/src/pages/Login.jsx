import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { loginUser } from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ Navigation Hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token); // ✅ Save token
      alert("Login successful!");

      // ✅ Redirect to Home page after login
      navigate("/");
    } catch (err) {
      setError("❌ Error: " + (err.response?.data?.message || "Something went wrong."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 border border-gray-600"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?  
          <button className="text-blue-400 ml-1" onClick={() => navigate("/signup")}>
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
