# Pint Pal - Frontend

Pint Pal is the frontend part of the Pub Rating application, developed using React, Vite, and Tailwind CSS.  
It interacts with the Pub Rating API to provide pub listings, ratings, and user authentication.

## Features
- User registration and login
- Add and list pubs
- View detailed pub information
- Responsive design
- Interactive UI with ratings and reviews
- User-friendly interface with icons

## Technologies Used
- **React.js** for building user interfaces
- **Vite** for fast build and development
- **Tailwind CSS** for styling and responsive design
- **React Router DOM** for routing
- **Lucide React** for icons
- **Axios** for HTTP requests

## Getting Started

### 1. Install the necessary dependencies:
- npm install

### 2. Start the development server
- npm run dev
    The application will run at http://localhost:3000.


Project Structure
            frontend/
├── public/
│   └── index.html       # Main HTML file
├── src/
│   ├── assets/          # Contains images and static files
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Pages for routing (Home, AddPub, Profile, etc.)
│   ├── api/             # API calls (Axios functions)
│   ├── App.jsx          # Main App component
│   ├── index.jsx        # Entry point of the React application
│   ├── App.css          # Global styles (if any)
│   └── index.css        # Tailwind CSS styles
├── vite.config.js       # Vite configuration
├── .gitignore           # Git ignore configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Documentation for the project

Authors
Rafael Tavares - 22266
Caue Fabiano - 25655

Notes:
The application uses React Router for navigation between pages.

Tailwind CSS is used for styling, and the layout is fully responsive.

The frontend communicates with the back-end API for user authentication and pub data.