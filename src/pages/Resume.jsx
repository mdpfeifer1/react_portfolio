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
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Resumes Display */}
      <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-[1100px]">
        {/* Resume 1 */}
        <div className="flex flex-col items-center w-full sm:w-[45%]">
          <iframe
            src={resumePdfUrl}
            title="Resume 1"
            className="w-full h-[80vh] rounded-lg"
          ></iframe>
        </div>

        {/* Resume 2 */}
        <div className="flex flex-col items-center w-full sm:w-[45%]">
          <iframe
            src={resumePdfUrl2}
            title="Resume 2"
            className="w-full h-[80vh] rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Download All Button */}
      <button
        className="mt-8 px-6 py-3 bg-black shadow-xl shadow-black hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-xl text-lg font-semibold transition-all duration-300"
        onClick={handleDownloadAll}
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
