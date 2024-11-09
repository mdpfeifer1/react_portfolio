import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  const navLinks = [
    { path: "/", label: "About" },
    { path: "/Resume", label: "Resume" },
    { path: "/Work", label: "Projects" },
    { path: "/Contact", label: "Contact Me" },
  ];

  // bg-gradient-to-r from-purple-500 via-green-500 to-purple-500 animate-gradient
  return (
    <ul className="flex justify-center space-x-4 p-4 neon-skill border-b-2 border-black">
      {navLinks.map(({ path, label }) => (
        <li key={path} className="nav-item">
          <Link
            to={path}
            className={`text-black font-medium hover:text-white ${
              currentPage === path ? "font-bold text-black underline" : ""
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
