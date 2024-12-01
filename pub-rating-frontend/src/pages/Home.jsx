import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPubs } from "../api";
import { Star } from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    const fetchPubs = async () => {
      try {
        const { data } = await getPubs();
        setPubs(data);
      } catch (err) {
        console.error("Error fetching pubs:", err);
      }
    };
    fetchPubs();
  }, []);

  let imageurl = [
    'https://media.istockphoto.com/id/519728153/photo/mug-of-beer.jpg?s=1024x1024&w=is&k=20&c=MshWATPRKAoD5_uARUvqjVMD5f5LFS1Ar2I-p6nLwX0=',
    'https://media.istockphoto.com/id/453744721/photo/glass-of-cold-beer-with-condensation.jpg?s=1024x1024&w=is&k=20&c=b-cn65jBp0Yae_K4BEMc4EEHFpFZ9u19gj-OahCNw38=',
    'https://media.istockphoto.com/id/1432122645/photo/selective-focus-on-a-selection-of-red-rose-and-white-wines-during-a-wine-tasting-event-on-the.jpg?s=1024x1024&w=is&k=20&c=cv3EX9jGPA1T0FiHNUKbGL3IN_1IIvjtLJLXBrjnSnY=',
    'https://media.istockphoto.com/id/1184016689/photo/close-up-of-young-couple-toasting-with-glasses-of-red-wine-at-restaurant.jpg?s=1024x1024&w=is&k=20&c=Nya6ueFqBn7X2VfwqW_oqnAshbIMcmhScvXYy_mqbEc=',
    'https://media.istockphoto.com/id/1371317396/photo/assortment-of-hard-strong-alcoholic-drinks-and-spirits.jpg?s=1024x1024&w=is&k=20&c=HnbrSi2fF_VO9kTlEvjNgddpb-0EFcqjW9rqkrYAHi0=',
    'https://media.istockphoto.com/id/531178414/photo/carlsberg-beer-on-ice.jpg?s=1024x1024&w=is&k=20&c=WG94SlbvVF6EmR5eOoZlXpCe33Qk9Bla364vi4rU18w=',
    'https://media.istockphoto.com/id/534477974/photo/bottles-of-heineken-beer.jpg?s=1024x1024&w=is&k=20&c=9dyzRx81t8uhNDoFV8_Olkj8hk1a1D8avgqldNGNvZM=',
    'https://media.istockphoto.com/id/483481481/photo/birra-moretti-beer-bottles.jpg?s=1024x1024&w=is&k=20&c=UKdKHYJ0y4qipC1AZHewnIVwZ7rJ5Cv8LxVP5-rdvr0=',
    'https://media.istockphoto.com/id/458381607/photo/peroni-beer-bottle-studio-shot.jpg?s=1024x1024&w=is&k=20&c=bVhM-CkHg0JkAUo8RJ58N91yl1GulVXkn4q_GqH4KvA=',
    'https://media.istockphoto.com/id/959062328/photo/a-glass-of-cool-paulaner-german-beer-on-a-wooden-table.jpg?s=1024x1024&w=is&k=20&c=WwtrhVUAPdK4m0SEMwZmNmAagTKkPcqqsaSZcY5T4H0=',
    'https://media.istockphoto.com/id/538477439/photo/paulaner-wheat-beer-from-germany.jpg?s=1024x1024&w=is&k=20&c=mALjKdBSkib6r2kPnqEDu2NCv-xjR2gHiHriMnfESFE='
  ];

  let i = 0;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-1 relative max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6 flex items-center justify-center gap-2">
          <span role="img" aria-label="trophy">🏆</span> Top Rated Pubs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pubs.length > 0 ? (
            pubs.map((pub) => (
              <Link to={`/pub/${pub._id}`} key={pub._id} className="block">
                <div className="bg-black border border-yellow-500 p-5 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-900">
                  <img src={ i<imageurl.length? imageurl[i++]:pub.image} alt={pub.name} className="w-full h-56 object-cover rounded-md border border-yellow-500" />
                  <h2 className="text-2xl font-bold text-yellow-500 mt-3">{pub.name}</h2>
                  <p className="text-yellow-500">{pub.location}</p>
                  <p className="text-yellow-500 flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-500" /> {pub.rating.toFixed(1)} ⭐ ({pub.numReviews} Reviews)
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-yellow-500 text-xl">🚫 No pubs available. Add one now!</p>
          )}
        </div>

        <button
          onClick={() => navigate("/add-pub")}
          className="fixed bottom-10 right-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 border border-yellow-700 shadow-md"
        >
          <img src="/beer-icon.png" alt="beer" className="w-5 h-5" />
          Add Pub
        </button>
      </div>

      <footer className="bg-[#0f172a] text-yellow-500 text-sm text-center py-4 border-t border-yellow-600">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/add-pub">Add Pub</Link>
          <Link to="/about-us">About Us</Link>
        </div>
        <p className="mt-2">© 2025 Pint Pal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
