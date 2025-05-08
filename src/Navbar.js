import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "./images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="-mt-20 md:-mt-0 fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="overflow-hidden">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Top bar */}
        <div className="md:visible invisible md:flex bg-gradient-to-r from-blue-900 to-blue-500 text-white md:ml-64 p-2 md:justify-between text-sm">
          <div className="flex items-center">
            <p className="text-white mr-6 flex">
              <i className="fas fa-envelope mr-2 mt-1"></i> medicare@gmail.com
            </p>
            <p className="text-white mr-6 flex">
              <i className="fas fa-phone mr-2 mt-1"></i> +254708627172
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-100 text-black rounded-full p-1"><i className="fab fa-facebook p-1"></i></span>
            <span className="bg-gray-100 text-black rounded-full p-1"><i className="fab fa-twitter p-1"></i></span>
            <span className="bg-gray-100 text-black rounded-full p-1"><i className="fab fa-linkedin p-1"></i></span>
          </div>
        </div>

        {/* Logo and Nav */}
        <div className="md:flex w-full px-6 py-4 justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-28" />
            <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
              <svg className="w-6 h-6 ml-28 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <ul className={`menu ${isMenuOpen ? "block" : "hidden"} md:flex md:w-[60%] justify-between mt-4 md:mt-0`}>
            {[
              { path: "/home", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/otherpages", label: "Other Pages" },
              { path: "/departments", label: "Departments" },
              { path: "/blog", label: "Blog" },
            ].map((item) => (
              <li key={item.path} className="text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-100 rounded-md px-3 py-1 transition-all duration-200">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <button className="hidden md:inline-block bg-gradient-to-r from-blue-800 to-blue-400 text-white rounded-full px-5 py-2 text-sm shadow-md shadow-blue-500">
            Get A Quote
            <span className="bg-blue-300 font-bold p-2 rounded-full ml-2">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
