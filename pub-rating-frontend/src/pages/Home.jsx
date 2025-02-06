import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPubs } from "../api";
import { Star } from "lucide-react";

function Home() {
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    const fetchPubs = async () => {
      try {
        const { data } = await getPubs();
        setPubs(data);
      } catch (err) {
        console.error("❌ Error fetching pubs:", err);
      }
    };
    fetchPubs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">🏆 Top Rated Pubs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pubs.length > 0 ? (
            pubs.map((pub) => (
              <Link to={`/pub/${pub._id}`} key={pub._id} className="block">
                <div className="bg-gray-800 p-5 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700">
                  <img src={pub.image} alt={pub.name} className="w-full h-56 object-cover rounded-md border border-yellow-400" />
                  <h2 className="text-2xl font-bold text-yellow-400 mt-3">{pub.name}</h2>
                  <p className="text-gray-300">{pub.location}</p>
                  <p className="text-yellow-400 flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-400" /> {pub.rating.toFixed(1)} ⭐ ({pub.numReviews} Reviews)
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-400 text-xl">🚫 No pubs available. Add one now!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
