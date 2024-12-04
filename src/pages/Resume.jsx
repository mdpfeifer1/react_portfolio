import React, { useState } from "react";
import resumePdfUrl from "../assets/resume.io_app_resumes_47271252_edit (3).png";
import resumePdfUrl2 from "../assets/resume.io_app_resumes_47271252_edit (2).png";

const Resume = () => {
  const [isSecondResume, setIsSecondResume] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-black via-purple-500 to-black text-white">
      <h1 className="text-3xl font-bold mb-8">My Resume</h1>

      {/* Resume Display */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          src={isSecondResume ? resumePdfUrl2 : resumePdfUrl}
          title="Resume"
          className="w-full h-[600px] md:h-[900px]"
        ></iframe>
      </div>

      {/* Toggle Button */}
      <button
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded text-lg font-semibold transition-all duration-200"
        onClick={() => setIsSecondResume(!isSecondResume)}
      >
        {isSecondResume ? "View First Resume" : "View Second Resume"}
      </button>
    </div>
  );
};

export default Resume;
