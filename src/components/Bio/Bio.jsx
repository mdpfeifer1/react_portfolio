import React, { useState, useEffect } from "react";

// Typewriter effect component
const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(""); // Displayed text state
  const [typingIndex, setTypingIndex] = useState(0); // Keeps track of the index
  const speed = 100; // Typing speed (in ms)

  useEffect(() => {
    // Start the typing animation
    if (typingIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[typingIndex]); // Append next character
        setTypingIndex((prev) => prev + 1); // Increment the index
      }, speed);

      // Cleanup the timeout on unmount or text change
      return () => clearTimeout(timer);
    }
  }, [typingIndex, text]); // Re-run when typingIndex changes

  return <p>{displayedText}</p>;
};

const Bio = () => {
  const bioText =
    "Freelance Web Developer with a strong foundation in both technical and creative disciplines, I bring a unique blend of artistry and precision to every project. Whether through writing, music, painting, drawing, or developing applications, I infuse passion and creativity into everything I do, striving to deliver innovative and user-centric solutions.";

  return (
    <div className="bio-card bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black h-64 w-96 p-4 flex flex-col justify-center items-center overflow-hidden hover:scale-105 duration-300">
      {/* <h2 className="text-lg font-semibold mb-2">About Me</h2> */}
      <div className="text-green-400 flex mt-4 justify-center text-center font-semibold overflow-hidden h-full">
        <Typewriter text={bioText} />
      </div>
    </div>
  );
};

export default Bio;
