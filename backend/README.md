/**
# Pub Rating API - Backend

This is the backend for the Pub Rating project, developed using Node.js, Express, and MongoDB.
It handles user authentication, pub listing, and reviews.

## Features
- User registration and login (with JWT authentication)
- Add, list, and view pubs
- Add reviews to pubs

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password encryption

## Getting Started

### 1. Clone the repository
```bash
cd Final\ Project/backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file based on `.env.example`:
```env
MONGO_URI=mongodb://localhost:27017/pub-rating
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Start the server
```bash
npm run dev
```
The server will run on `http://localhost:5000`

## Project Structure
```
backend/
├── config/
│   └── db.js            # MongoDB connection setup
├── controllers/
│   ├── pubController.js # Pub CRUD operations
│   └── userController.js# User auth operations
├── models/              # Mongoose models
├── routes/              # API routes
├── .env.example         # Environment variables sample
├── server.js            # Entry point
```

## Notes
- MongoDB must be running locally (default: `mongodb://localhost:27017`)
- All data is stored dynamically when API calls are made
- Secure `.env` file is not included in version control (see `.gitignore`)

## Authors
- Rafael Tavares - 22266
- Caue Fabiano - 25655

*/
