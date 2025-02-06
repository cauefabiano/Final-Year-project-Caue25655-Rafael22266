import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // ✅ Make sure backend is running

// ✅ Register a user
export const registerUser = async (userData) => {
    return axios.post(`${API_BASE_URL}/users/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });  };
// ✅ Log in a user
export const loginUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/users/login`, userData, {
    headers: { "Content-Type": "application/json" },
  });
};

// ✅ Fetch all pubs
export const getPubs = async () => {
  return axios.get(`${API_BASE_URL}/pubs`);
};

// ✅ Fetch a single pub by ID
export const getPubById = async (pubId) => {
  return axios.get(`${API_BASE_URL}/pubs/${pubId}`);
};

// ✅ Add a new pub
export const addPub = async (pubData) => {
  return axios.post(`${API_BASE_URL}/pubs/add`, pubData, {
    headers: { "Content-Type": "application/json" },
  });
};

// ✅ Add a review to a pub
export const addReview = async (pubId, reviewData) => {
  return axios.post(`${API_BASE_URL}/pubs/${pubId}/review`, reviewData, {
    headers: { "Content-Type": "application/json" },
  });
};
