import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  const navLinks = [
    { path: "/", label: "About" },
    { path: "/Resume", label: "Resume" },
    { path: "/Work", label: "Projects" },
    { path: "/Contact", label: "Contact" },
  ];

  // bg-gradient-to-r from-purple-500 via-green-500 to-purple-500 animate-gradient
  return (
    <ul className="flex justify-center space-x-4 p-4 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
      {navLinks.map(({ path, label }) => (
        <li key={path} className="nav-item">
          <Link
            to={path}
            className={`text-yellow-300 font-bold text-lg font-mono hover:text-white ${
              currentPage === path ? "font-bold text-black text-xl" : ""
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
