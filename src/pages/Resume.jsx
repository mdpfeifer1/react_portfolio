import React from 'react';

const Resume = () => {
  const resumePdfUrl = '../assets/Mikel_Pfeifer_Resume (13).pdf';

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Resume</h1>
      <p className="text-lg text-gray-700 mb-8">Download my resume in PDF format:</p>
      <a href={resumePdfUrl} download="Mikel_Pfeifer_Resume.pdf" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;