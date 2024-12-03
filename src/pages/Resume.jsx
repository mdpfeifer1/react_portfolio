import React, { useState } from "react";
import resumePdfUrl from "../assets/resume.io_app_resumes_47271252_edit (1).png";
import resumePdfUrl2 from "../assets/resume.io_app_resumes_47271252_edit (2).png";

const Resume = () => {
  const [isSecondResume, setIsSecondResume] = useState(false); 

  return (
    <div className="text-center min-h-screen flex-col justify-center px-4 bg-gradient-to-r from-black via-purple-500 to-black">
      {/* Embedded Resume */}
      <div className="">
        <iframe
          src={isSecondResume ? resumePdfUrl2 : resumePdfUrl}
          title="Resume"
          className="w-full h-[900px] shadow-white shadow-lg rounded-lg"
        ></iframe>
        <button
          className="mt-4 p-2 bg-purple-600 text-white rounded"
          onClick={() => setIsSecondResume(!isSecondResume)}
        >
          Toggle Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
