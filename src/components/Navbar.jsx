import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPic from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1C1B1B]">
      <nav className="px-10 mx-auto border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoPic} className="w-32 h-12 object-cover" alt="Car Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="text-lg font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-[#E82129]"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
               to="/about"
                className="block py-2 px-3 text-white rounded-sm hover:text-[#E82129] md:p-0"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 px-3 text-white rounded-sm hover:text-[#E82129] md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block py-2 px-3 text-white rounded-sm hover:text-[#E82129] md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className="block py-2 px-3 text-white rounded-sm hover:text-[#E82129] md:p-0"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;