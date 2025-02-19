import React, { useRef, useEffect, useState } from "react";
import "./About.css"
import { useLocation } from "react-router-dom";
import selfie3 from "../assets/selfie3.jpg";
import SkillsSection from "../components/Skills/SkillsSection";
import Bio from "../components/Bio/Bio";
import CardList from "../components/Work/project";
import Education from "../components/Education/Education";
import Contact from "../pages/Contact";


const Home = () => {
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  // Refs for fade-in sections
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // State to track visibility
  const [isVisible, setIsVisible] = useState({
    bio: false,
    skills: false,
    projects: false,
    education: false,
    contact: false,
  });

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    // Observe each section
    if (bioRef.current) observer.observe(bioRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (educationSectionRef.current)
      observer.observe(educationSectionRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Cleanup
    return () => {
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (educationSectionRef.current)
        observer.unobserve(educationSectionRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  // Scroll to section logic
  useEffect(() => {
    const { state } = location;
    if (state?.scrollTo) {
      const targetElement =
        state.scrollTo === "work"
          ? workRef.current
          : state.scrollTo === "education"
            ? educationRef.current
            : state.scrollTo === "contact"
            ? contactRef.current
            : null;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen pt-16 lg:pt-24">
      <div className="container mx-auto px-4">
        {/* Centered Image and Bio Section */}
        <div
          ref={bioRef}
          data-section="bio"
          className={`flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left py-8 lg:py-12 ${
            isVisible.bio ? "fade-in" : ""
          }`}
        >
          {/* Image */}
          <img
            src={selfie3}
            alt="Mikel Pfeifer"
            className="rounded-2xl h-48 w-48 lg:h-64 lg:w-64 mb-4 lg:mb-0 shadow-xl shadow-black hover:scale-105 duration-300"
          />
          {/* Bio */}
          <Bio />
        </div>

        {/* Skills and Projects */}
        <div className="flex flex-col gap-8 lg:gap-12">
          <div
            ref={skillsRef}
            data-section="skills"
            className={`bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-4 lg:p-6 ${
              isVisible.skills ? "fade-in" : ""
            }`}
          >
            {/* Header */}
            <div className="mb-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-violet-400 hover:underline hover:cursor-progress">
                Technologies
              </h2>
            </div>
            <div className="py-2">
              <SkillsSection />
            </div>
          </div>

          <div
            ref={projectsRef}
            data-section="projects"
            className={`bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-4 lg:p-6 ${
              isVisible.projects ? "fade-in" : ""
            }`}
          >
            {/* Header */}
            <section id="work" ref={workRef}>
              <div className="mb-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-violet-400 hover:underline hover:cursor-progress">
                  Projects
                </h2>
              </div>

              <div className="py-2">
                <CardList />
              </div>
            </section>
          </div>

          <div
            ref={educationSectionRef}
            data-section="education"
            className={` ${isVisible.education ? "fade-in" : ""}`}
          >
            <section id="education" ref={educationRef}>
              <Education />
            </section>
          </div>

          <div
            ref={contactSectionRef}
            data-section="contact"
            className={`bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-4 lg:p-6 mb-16 ${
              isVisible.contact ? "fade-in" : ""
            }`}
          >
            <section id="Contact" ref={contactRef}>
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import selfie3 from "../assets/selfie3.jpg";
// import SkillsSection from "../components/Skills/SkillsSection";
// import Bio from "../components/Bio/Bio";
// import CardList from "../components/Work/project";
// import Education from "../components/Education/Education";

// const Home = () => {
//   const workRef = useRef(null);
//   const educationRef = useRef(null);
//   const location = useLocation(); // Grab the hash from the URL

//   useEffect(() => {
//     const { state } = location;
//     if (state?.scrollTo) {
//       const targetElement =
//         state.scrollTo === "work"
//           ? workRef.current
//           : state.scrollTo === "education"
//             ? educationRef.current
//             : null;

//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen mt-24">
//       <div className="container mx-auto">
//         {/* Centered Image and Bio Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 text-center lg:text-left py-12">
//           {/* Image */}
//           <img
//             src={selfie3}
//             alt="Mikel Pfeifer"
//             className="rounded-2xl h-64 w-64 mb-6 lg:mb-0 shadow-xl shadow-black hover:scale-105 duration-300"
//           />
//           {/* Bio */}
//           <Bio />
//         </div>

//         {/* Skills and Projects */}
//         <div className="flex flex-col gap-12">
//           <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-6">
//             {/* Header */}
//             <div className="mb-2">
//               <h2 className="text-3xl font-bold text-violet-400 hover:underline">
//                 Technologies
//               </h2>
//             </div>
//             <div className="py-2">
//               <SkillsSection />
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 rounded-2xl shadow-xl shadow-black p-6">
//             {/* Header */}
//             <section id="work" ref={workRef}>
//               <div className="mb-2">
//                 <h2 className="text-3xl font-bold text-violet-400 hover:underline">
//                   Projects
//                 </h2>
//               </div>

//               <div className="py-2">
//                 <CardList />
//               </div>
//             </section>
//           </div>

//           <div className="mb-2">
//             <section id="education" ref={educationRef}>
//               <Education />
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
