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
    if (!token) {
      setError("❌ You must be logged in to add a review.");
      return;
    }

    try {
      await addReview(id, { rating, comment }, token);
      alert("✅ Review added successfully!");
      setComment("");
      setRating(5);
      window.location.reload();
    } catch (err) {
      setError("❌ Error submitting review. Try again.");
    }
  };

  return pub ? (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold">{pub.name}</h1>
      <p className="text-gray-300">{pub.location}</p>
      <p className="text-yellow-400 text-lg mt-2">
        ⭐ {pub.rating.toFixed(1)} ({pub.numReviews} Reviews)
      </p>

      <h2 className="text-2xl mt-6">Reviews</h2>
      {pub.reviews.length > 0 ? (
        pub.reviews.map((review) => (
          <div key={review._id} className="bg-gray-800 p-4 rounded-lg my-2">
            <p className="text-yellow-400">⭐ {review.rating}/5</p>
            <p className="text-gray-300">{review.comment}</p>
            <p className="text-gray-500 text-sm">- {review.name}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}

      {/* ✅ Add Review Form */}
      {token ? (
        <form onSubmit={handleSubmitReview} className="mt-6 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-xl">Add a Review</h2>
          {error && <p className="text-red-500">{error}</p>}
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 my-2 bg-gray-700 rounded"
          >
            {[5, 4, 3, 2, 1].map((num) => (
              <option key={num} value={num}>
                {num} Stars
              </option>
            ))}
          </select>
          <textarea
            placeholder="Write a review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 my-2 bg-gray-700 rounded"
          />
          <button type="submit" className="bg-yellow-500 px-5 py-2 rounded-lg">
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Login to add a review.</p>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default PubDetails;
