import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg shadow-black">
      <div className="container mx-auto py-4 flex justify-center">
        <h1 className="text-2xl font-bold text-yellow-300">
          Mikel Pfeifer{" "}
          <span className="text-violet-600">| Full Stack Developer</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
