import React from "react";
import resumePdfUrl from "../assets/resume.io_app_resumes_47271252_edit (3).png";
import resumePdfUrl2 from "../assets/resume.io_app_resumes_47271252_edit (2).png";

const Resume = () => {
  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const handleDownloadAll = () => {
    handleDownload(resumePdfUrl, "Resume_1.png");
    handleDownload(resumePdfUrl2, "Resume_2.png");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 text-white">
      {/* Resumes Display */}
      <div className="flex justify-evenly gap-4 w-full">
        {/* Resume 1 */}
        <div className="flex flex-col items-center">
          <iframe
            src={resumePdfUrl}
            title="Resume 1"
            className="w-[500px] h-[700px] rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Resume 2 */}
        <div className="flex flex-col items-center">
          <iframe
            src={resumePdfUrl2}
            title="Resume 2"
            className="w-[500px] h-[700px] rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Download All Button */}
      <button
        className="mt-8 px-6 py-3 bg-black shadow-lg shadow-black hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded text-lg font-semibold transition-all duration-200"
        onClick={handleDownloadAll}
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
