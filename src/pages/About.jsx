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
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#work") {
      workRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#education") {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]); 

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen ">
      <div className="container mx-auto py-4">
        {/* Centered Image and Bio Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left py-4">
          {/* Image */}
          <img
            src={selfie3}
            alt="Mikel Pfeifer"
            className="rounded-md h-64 w-64 mb-6 lg:mb-0 shadow-xl shadow-black hover:scale-105 duration-300 "
          />
          {/* Bio */}
          <Bio />
        </div>

        {/* Skills and Projects */}
        <div className="py-4">
          <SkillsSection />
        </div>
        <div className="py-4">
          <section id="work" ref={workRef}>
            <CardList />
          </section>
        </div>
        <div className="py-4">
          <section id="education" ref={educationRef}>
            <Education />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
