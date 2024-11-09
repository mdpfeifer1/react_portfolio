import React from "react";
import resumePdfUrl from "../assets/Mikel Pfeifer Resume.pdf"; // Importing PDF directly

const Resume = () => {
  return (
    <div className="text-center min-h-screen flex-col justify-center px-4 bg-gradient-to-r from-black via-purple-500 to-black">
  
      {/* Embedded PDF */}
      <div className="">
        <iframe
          src={resumePdfUrl} // Using the imported PDF URL
          title="Resume"
          className="w-full h-[900px] shadow-white shadow-lg rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
