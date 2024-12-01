import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

//  Register a new user
export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/users/register`, userData, {
    headers: { "Content-Type": "application/json" },
  });
};

//  Log in a user
export const loginUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/users/login`, userData, {
    headers: { "Content-Type": "application/json" },
  });
};

//  Fetch all pubs
export const getPubs = async () => {
  return axios.get(`${API_BASE_URL}/pubs`);
};

//  Fetch a single pub by ID
export const getPubById = async (pubId) => {
  return axios.get(`${API_BASE_URL}/pubs/${pubId}`);
};

//  Add a new pub (authenticated)
export const addPub = async (pubData) => {
  const token = localStorage.getItem("token");
  return axios.post(`${API_BASE_URL}/pubs/add`, pubData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//  Add a review to a pub (authenticated)
export const addReview = async (pubId, reviewData) => {
  const token = localStorage.getItem("token");
  return axios.post(`${API_BASE_URL}/reviews`, { pubId, ...reviewData }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
