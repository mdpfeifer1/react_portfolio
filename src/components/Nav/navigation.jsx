import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navigation.css";

function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Resume", label: "Resume" },
    { path: "/#work", label: "Projects" },
    { path: "/Contact", label: "Contact" },
    { path: "/#education", label: "Education" },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith("/#")) {
      const sectionId = path.split("#")[1];
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(path);
    }
    setIsOpen(false); // Close the menu after clicking
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg shadow-black">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        {/* Hamburger Menu */}
        <button
          className="text-yellow-300 font-bold text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
        {/* Header Text */}
        <h1 className="text-xl font-bold text-violet-400 text-center flex-grow">
          Mikel Pfeifer{" "}
          <span className="text-green-400">| Full Stack Developer</span>
        </h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg shadow-black">
        <div className="container mx-auto py-4 flex justify-center">
          <h1 className="text-2xl font-bold text-violet-400">
            Mikel Pfeifer{" "}
            <span className="text-green-400">| Full Stack Developer</span>
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute lg:static w-full lg:w-auto bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 transition-all duration-300 shadow-xl shadow-black ${
          isOpen ? "top-14 left-0" : "top-[-1000px]"
        } lg:top-0 lg:left-0`}
      >
        <ul className="flex flex-col lg:flex-row items-center lg:justify-center py-2">
          {navLinks.map(({ path, label }) => (
            <li key={path} className="nav-item my-2 lg:my-0">
              <button
                onClick={() => handleNavClick(path)}
                className="block text-yellow-300 font-bold text-lg hover:text-white hover:rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-300 transition-transform duration-300 px-4"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
