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
        <div className="md:visible invisible rounded-sm md:flex bg-gradient-to-r from-blue-900 to-blue-500 text-white md:ml-64 p-2 md:justify-between text-sm">
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
          <div className="flex items-center justify-between w-full md:w-auto">
            <img src={logo} alt="logo" className="w-28" />
            <div className="cursor-pointer md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-200" onClick={toggleMenu}>
              {isMenuOpen ? (
                <i className="fas fa-times text-xl text-blue-600"></i>
              ) : (
                <i className="fas fa-bars text-xl text-gray-700"></i>
              )}
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