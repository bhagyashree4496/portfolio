import React from "react";
import DarkModeToggle from "./darkmode/DarkModeToggle";
import logo from "../assets/logo3.png";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 bg-white"
              src={logo} // Replace with your logo URL
              alt="Logo"
            />
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-gray-900 dark:text-white font-medium hover:text-indigo-600"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-white font-medium hover:text-indigo-600"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-900 dark:text-white font-medium hover:text-indigo-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-white font-medium hover:text-indigo-600"
            >
              Contact
            </a>
          </nav>
          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
