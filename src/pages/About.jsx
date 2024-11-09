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
    "PHP",
    "Wix",
    "WordPress",
    "MySQL",
    "MongoDB", 
    "Python",
    "Git",
    "Figma"
    

  ];


  return (
    <div className="bg-gradient-to-r from-black via-purple-500 to-black min-h-screen">
      <div className="container mx-auto py-16">
        <div className="text-center animate-bounce-in">
          <img
            src={selfie3}
            alt="My Girl"
            className="rounded-md h-64 w-44 mx-auto mb-12 shadow-lg shadow-black"
          />
          <h1 className="text-4xl font-bold mb-4">Mikel Pfeifer</h1>
          <p className="text-lg text-gray-700 font-bold">
            Full Stack Developer
          </p>
        </div>
        {/* Skills Section */}
        <section className="mt-12 animate-bounce-in ">
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="neon-skill text-white px-4 py-2 m-2 rounded-md shadow-lg shadow-black hover:scale-105 hover:duration-75"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Social Links Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
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

// I have a passion for art, I express that passion through web development, music, painting and writing. 
