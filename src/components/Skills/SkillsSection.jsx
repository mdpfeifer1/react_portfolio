import React from "react";
import "./SkillsSection.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faCss3,
  faHtml5,
  faJs,
  faGit,
  } from "@fortawesome/free-brands-svg-icons";
import {
  SiMysql,
  SiMongodb,
  SiFigma,
  SiWix,
  SiWordpress,
  SiTailwindcss,
  SiBulma,
  SiBootstrap,
  SiHandlebarsdotjs,
  SiPython,
  SiHeroku,
  SiCisco,
  } from "react-icons/si";

const skills = [
  { name: "React", icon: <FontAwesomeIcon icon={faReact} />, color: "#61DAFB" },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    color: "#339933",
  },
  { name: "CSS3", icon: <FontAwesomeIcon icon={faCss3} />, color: "#1592B6" },
  { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} />, color: "#E34F26" },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
    color: "#F7DF1E",
  },
  { name: "MySQL", icon: <SiMysql />, color: "#4489F1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Wix", icon: <SiWix />, color: "#000000" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21969B" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
  { name: "Bulma", icon: <SiBulma />, color: "#00D1B2" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7956B3" },
  { name: "Handlebars", icon: <SiHandlebarsdotjs />, color: "#F0772B" },
  { name: "Python", icon: <SiPython />, color: "#3796AB" },
  { name: "Heroku", icon: <SiHeroku />, color: "#430098" },
  { name: "Git", icon: <FontAwesomeIcon icon={faGit} />, color: "#F05032" },
  { name: "CCNA", icon: <SiCisco />, color: "#1BA0D7" },
];

const SkillsSection = () => {
  const topRowSkills = skills.filter((_, index) => index % 2 === 0);
  const bottomRowSkills = skills.filter((_, index) => index % 2 !== 0);

  // Double the rows for seamless animation
  const topRowDoubled = [...topRowSkills, ...topRowSkills];
  const bottomRowDoubled = [...bottomRowSkills, ...bottomRowSkills];

  return (
    <div className="skills-container overflow-hidden relative h-52 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl shadow-black">
      <div className="skills-wrapper relative">
        {/* Top Row */}
        <div className="skills-row flex w-max animate-scroll">
          {topRowDoubled.map((skill, index) => (
            <div
              key={`top-${index}`}
              className="skill-card bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:scale-110 duration-300 flex flex-col items-center justify-center m-2 p-2 rounded-2xl shadow-lg shadow-black min-w-[150px]"
            >
              <div className="text-4xl mb-2" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span
                className="font-bold text-center
              "
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="skills-row flex w-max animate-scroll staggered">
          {bottomRowDoubled.map((skill, index) => (
            <div
              key={`bottom-${index}`}
              className="skill-card bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:scale-105 duration-300  flex flex-col items-center justify-center m-2 p-2 rounded-xl shadow-lg shadow-black min-w-[150px]"
            >
              <div className="text-4xl mb-2" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span
                className="font-bold text-center"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
