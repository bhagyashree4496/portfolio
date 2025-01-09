import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          <a href="#">MyPortfolio</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white">
            AboutMe
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#skill"
            className="text-gray-300 hover:text-white"
          >
            Skills
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#experience"
            className="text-gray-300 hover:text-white"
          >
            Experience
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#projects"
            className="text-gray-300 hover:text-white"
          >
            Projects
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with smooth transitions */}
      <div
        className={`${
          isOpen
            ? "max-h-screen opacity-100 absolute top-16 left-0 w-full"
            : "h-0 opacity-0"
        } overflow-hidden transition-all duration-500 ease-in-out md:hidden bg-gray-900`}
      >
        <a
          onClick={() => setIsOpen(false)}
          href="#about"
          className="block px-4 py-4 text-gray-300 hover:text-white border-t border-gray-700"
        >
          AboutMe
        </a>
        <a
          onClick={() => setIsOpen(false)}
          href="#skill"
          className="block px-4 py-4 text-gray-300 hover:text-white border-t border-gray-700"
        >
          Skills
        </a>
        <a
          onClick={() => setIsOpen(false)}
          href="#experience"
          className="block px-4 py-4 text-gray-300 hover:text-white border-t border-gray-700"
        >
          Experience
        </a>
        <a
          onClick={() => setIsOpen(false)}
          href="#projects"
          className="block px-4 py-4 text-gray-300 hover:text-white border-t border-gray-700"
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
