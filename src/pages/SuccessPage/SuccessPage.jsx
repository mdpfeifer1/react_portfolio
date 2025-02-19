import React from "react";
import "./SuccessPage.css"; // Import the CSS for the animation

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="checkmark-circle">
        <div className="checkmark"></div>
      </div>
      <h1 className="success-message">Email Sent Successfully!</h1>
    </div>
  );
};

export default SuccessPage;
