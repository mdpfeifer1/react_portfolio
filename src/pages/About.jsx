import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import selfie3 from "../assets/selfie3.jpg";
import SkillsSection from "../components/Skills/SkillsSection";
import Bio from "../components/Bio/Bio";
import CardList from "../components/Work/project";
import Education from "../components/Education/Education";

const Home = () => {
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const { hash } = useLocation(); // Grab the hash from the URL

  useEffect(() => {
    // Scroll to the appropriate section when the hash changes
    if (hash === "#work") {
      workRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#education") {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]); // Re-run this effect whenever the hash changes

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto">
        {/* Centered Image and Bio Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left py-12">
          {/* Image */}
          <img
            src={selfie3}
            alt="Mikel Pfeifer"
            className="rounded-2xl h-64 w-64 mb-6 lg:mb-0 shadow-xl shadow-black hover:scale-105 duration-300"
          />
          {/* Bio */}
          <Bio />
        </div>

        {/* Skills and Projects */}
        <div className="flex flex-col gap-12">
          <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-6">
            {/* Header */}
            <div className="mb-2">
              <h2 className="text-3xl font-bold text-violet-400 hover:underline">
                Technologies
              </h2>
            </div>
            <div className="py-2">
              <SkillsSection />
            </div>
          </div>

          <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-6">
            {/* Header */}
            <section id="work" ref={workRef}>
              <div className="mb-2">
                <h2 className="text-3xl font-bold text-violet-400 hover:underline">
                  Projects
                </h2>
              </div>

              <div className="py-2">
                <CardList />
              </div>
            </section>
          </div>

          <div className="mb-2">
            <section id="education" ref={educationRef}>
              <Education />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
