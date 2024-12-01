import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPubById, addReview } from "../api";
import { Star } from "lucide-react";

function PubDetails() {
  const { id } = useParams();
  const [pub, setPub] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPub = async () => {
      try {
        const { data } = await getPubById(id);
        setPub(data);
      } catch (err) {
        console.error("❌ Error fetching pub:", err);
      }
    };
    fetchPub();
  }, [id]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("❌ You must be logged in to add a review.");
      return;
    }

    try {
      await addReview(id, { rating, comment });

      const newReview = {
        rating,
        comment,
        name: user?.name || "Anonymous",
        photo: user?.photo || null,
        _id: Date.now(),
      };

      setPub((prev) => ({
        ...prev,
        reviews: [newReview, ...prev.reviews],
        numReviews: prev.numReviews + 1,
      }));

      setComment("");
      setRating(5);
    } catch (err) {
      setError("❌ Error submitting review. Try again.");
    }
  };

  return pub ? (
    <div className="container mx-auto mt-16 p-6 text-white max-w-3xl">
      <h1 className="text-4xl font-bold">{pub.name}</h1>
      <p className="text-gray-300">{pub.location}</p>
      <p className="text-yellow-400 text-lg mt-2 flex items-center">
        <Star className="w-5 h-5 inline mr-1" />
        {pub.rating.toFixed(1)} ({pub.numReviews} Reviews)
      </p>

      <h2 className="text-2xl mt-6 mb-2">Reviews</h2>
      {pub.reviews.length > 0 ? (
        pub.reviews.map((review) => (
          <div key={review._id} className="flex items-start gap-4 my-2">
            {review.photo && (
              <img
                src={review.photo}
                alt="User"
                className="w-10 h-10 rounded-full border border-yellow-400"
              />
            )}
            <div className="bg-gray-800 p-4 rounded-lg w-full">
              <p className="text-yellow-400 font-semibold">⭐ {review.rating}/5</p>
              <p className="text-gray-300">{review.comment}</p>
              <p className="text-gray-500 text-sm italic mt-1">- {review.name}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic">No reviews yet.</p>
      )}

      {token ? (
        <form onSubmit={handleSubmitReview} className="mt-6 bg-gray-900 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Add a Review</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}

          <div className="flex gap-2 my-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setRating(num)}
                className={`text-yellow-400 ${rating >= num ? "opacity-100" : "opacity-40"}`}
              >
                <Star className="w-6 h-6" fill={rating >= num ? "#facc15" : "none"} />
              </button>
            ))}
          </div>

          <textarea
            placeholder="Write a review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 my-2 bg-gray-700 border border-gray-600 rounded"
            rows={3}
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-black font-semibold transition"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-gray-500 mt-4 italic">Login to add a review.</p>
      )}
    </div>
  ) : (
    <p className="text-center text-white mt-10">Loading...</p>
  );
}

export default PubDetails;
