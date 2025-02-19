import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./SuccessPage.css"; // Import the CSS for the animation

const SuccessPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBackToHome = () => {
    navigate("/about"); // Redirect to the About page
  };

  return (
    <div className="success-container bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="checkmark-circle">
        <div className="checkmark"></div>
      </div>
      <h1 className="success-message">Email Sent Successfully!</h1>
      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-2 bg-green-400 text-gray-900 font-bold rounded-lg shadow-lg shadow-black hover:bg-green-500 hover:scale-105 transition-transform duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;
