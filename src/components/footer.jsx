import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faInstagram, url: "https://www.instagram.com/mikelpfeifer/" },
  { icon: faGithub, url: "https://github.com/mdpfeifer1" },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mikel-pfeifer-690035175",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl shadow-black py-2 ">
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 text-4xl neon-skill p-2 rounded-md shadow-xl shadow-black hover:scale-110 hover:duration-300"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
