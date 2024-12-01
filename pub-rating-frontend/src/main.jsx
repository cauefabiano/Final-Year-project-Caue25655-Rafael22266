import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter to handle routing
import "./index.css"; // Import global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the App component with BrowserRouter to enable routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
