import React from "react";
import selfie3 from "../assets/selfie3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const socialLinks = [
    { icon: faInstagram, url: "https://www.instagram.com/mikelpfeifer/" },
    { icon: faGithub, url: "https://github.com/mdpfeifer1" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/mikel-pfeifer-690035175",
    },
  ];

  const skills = [
    "React",
    "Tailwind",
    "JavaScript",
    "HTML",
    "CSS",
    "NodeJs",
    "Bootstrap",
    "Wix",
    "WordPress",
    "MySQL",
    "MongoDB", 
    "Python",
    "Git",
    "Figma",
    "Cisco"
  ];


  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 min-h-screen font-mono">
      <div className="container mx-auto py-8">
        <div className="text-center text-yellow-300">
          <img
            src={selfie3}
            alt="Mikel Pfeifer"
            className="rounded-md h-64 w-44 mx-auto mb-8 shadow-lg shadow-black"
          />
          <h1 className="text-4xl font-bold mb-4">Mikel Pfeifer</h1>
          <p className="text-2xl text-[#4c0479] font-bold">
            Full Stack Developer
          </p>
          <p className="p-4">
            Pronounced Michael Fi Fur, for now I’m a freelance Web Developer,
            Software Engineer and UI/UX Designer pursuing an opportunity to
            shine, grow and challenge myself within a company. I'm an artist at heart
            whether the medium be writing, music, painting, drawing or here with 
            developing applications I bring forth passion in it all.{" "}
          </p>
        </div>

        {/* Skills Section */}
        <section className="mt-8  ">
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="neon-skill text-white px-4 py-2 m-2 font-bold rounded-md shadow-lg shadow-black hover:scale-105 hover:duration-300 hover:cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#4c0479]">
            Social Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 text-yellow-300 font-bold bg-black rounded-lg shadow-lg shadow-black hover:scale-105 hover:duration-300 hover:cursor-default"
              >
                <FontAwesomeIcon icon={link.icon} className="text-3xl mr-4" />
                <span>{link.url.replace(/^https?:\/\//, "")}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;


