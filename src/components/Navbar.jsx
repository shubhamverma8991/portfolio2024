import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiMail, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4  sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="md:hidden text-3xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          Shubham
        </Link>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8 items-center mx-auto bg-white dark:bg-black  p-2 rounded-lg 
              shadow-md dark:shadow-white dark:border dark:border-white transition-colors duration-300"
        >
          <li>
            <Link
              to="/"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={() => {
            toggleTheme();
            darkMode();
          }}
          className="hidden md:block text-gray-700 dark:text-gray-300 focus:outline-none ml-4 bg-white dark:bg-black dark:shadow-white dark:border dark:border-white  p-2 rounded-full shadow-md transition-colors duration-300"
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none transition-colors duration-300"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white dark:bg-black p-4 space-y-4 transition-colors duration-300">
          <li>
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center text-lg text-gray-700 dark:text-gray-300 focus:outline-none transition-colors duration-300"
            >
              {isDarkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />} Toggle Theme
            </button>
          </li>
          <li>
            <Link to="/" className="flex items-center text-lg text-gray-700 dark:text-gray-300" onClick={handleMenuToggle}>
              <FiHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center text-lg text-gray-700 dark:text-gray-300" onClick={handleMenuToggle}>
              <FiUser className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center text-lg text-gray-700 dark:text-gray-300" onClick={handleMenuToggle}>
              <FiBriefcase className="mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-lg text-gray-700 dark:text-gray-300" onClick={handleMenuToggle}>
              <FiMail className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
