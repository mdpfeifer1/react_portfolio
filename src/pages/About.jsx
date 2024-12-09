import React from "react";
import selfie3 from "../assets/selfie3.jpg";
import SkillsSection from "../components/Skills/SkillsSection";
import Bio from "../components/Bio/Bio";
import CardList from "../components/Work/project";
import Education from "../components/Education/Education";


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 min-h-screen ">
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
          <CardList />
        </div>
        <div className="py-4">
        <Education />
        </div>
      </div>
    </div>
  );
};

export default Home;
