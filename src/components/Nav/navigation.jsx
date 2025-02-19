import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";

function NavTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Resume", label: "Resume" },
    { path: "/#work", label: "Projects" },
    { path: "/#education", label: "Education" },
    { path: "/#Contact", label: "Contact" },
  ];

  // Handle navigation and scrolling
  const handleNavClick = (path) => {
    if (path === "/") {
      // Scroll to the top of the page when Home is selected
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
    } else if (path.startsWith("/#")) {
      const sectionId = path.split("#")[1];
      if (location.pathname !== "/") {
        // Navigate to the homepage first, then scroll to the section
        navigate("/", { state: { scrollTo: sectionId } });
      } else {
        // Scroll to the section directly
        scrollToSection(sectionId);
      }
    } else {
      // Navigate to other pages
      navigate(path);
    }
    setIsOpen(false); // Close the mobile menu after clicking
  };

  // Scroll to a section with a delay
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay to allow the DOM to update
  };

  // Handle scrolling after navigation to the homepage
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg shadow-black">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        {/* Hamburger Menu */}
        <button
          className="text-yellow-300 font-bold text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
                className="block text-yellow-300 font-bold text-lg hover:text-white hover:rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-300 transition-transform duration-300 px-4"
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
