import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPub } from "../api";

function AddPub() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !location || !image) {
      setError("❌ All fields are required!");
      return;
    }

    try {
      await addPub({ name, location, rating, image });
      alert("✅ Pub added successfully!");
      navigate("/");
    } catch (err) {
      setError("❌ Error: " + (err.response?.data?.message || "Something went wrong."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md border border-yellow-400">
        <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400">🍺 Add a Pub</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Pub Name" className="w-full p-3 rounded bg-gray-700 border border-gray-600" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Location" className="w-full p-3 rounded bg-gray-700 border border-gray-600" onChange={(e) => setLocation(e.target.value)} />
          <input type="number" placeholder="Rating (1-5)" className="w-full p-3 rounded bg-gray-700 border border-gray-600" min="1" max="5" onChange={(e) => setRating(e.target.value)} />
          <input type="text" placeholder="Image URL" className="w-full p-3 rounded bg-gray-700 border border-gray-600" onChange={(e) => setImage(e.target.value)} />

          <button type="submit" className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition">
            Submit Pub
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPub;
