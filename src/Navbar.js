import React, { useState} from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "./images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [DropdownVisibility, setDropdownVisibility] = useState({
    aboutUs: false,
    departments: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const closeDropdowns = () => {
    setDropdownVisibility({
      aboutUs: false,
      departments: false,
    });
  };


  return (
    <div className="-mt-20 md:-mt-0 fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="overflow-hidden">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* top nav start */}
        <div className=" md:visible invisible md:flex bg-gradient-to-r from-blue-900 to-blue-500 text-white md:ml-64 p-3 md:justify-between">
          <div className="flex items-center">
            <div>
              <p className="text-white mr-8 flex">
                <i className="fas fa-envelope mr-2 mt-1"></i>
                medicare@gmail.com
              </p>
            </div>
            <div>
              <p className="text-white mr-8 flex">
                <i className="fas fa-phone mr-2 mt-1"></i> +254708627172
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-100 text-black rounded-full p-1 justify-center">
              <i className="fab fa-facebook p-1"></i>
            </span>
            <span className="bg-gray-100 text-black rounded-full p-1 justify-center">
              <i className="fab fa-twitter p-1"></i>
            </span>
            <span className="bg-gray-100 text-black rounded-full p-1 justify-center">
              <i className="fab fa-linkedin p-1"></i>
            </span>
          </div>
        </div>
        {/*logo and menu icon */}
        <div className="md:flex w-full p-8 justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-36" />
            <div
              className="cursor-pointer md:hidden"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 ml-36 text-black md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul className={`menu ${isMenuOpen ? "block" : "hidden"} md:flex  md:w-[55%]  h-auto md:h-5 justify-between space-x-4 md:space-x-0 md:mt-0 mt-4 md:ml-14 md:mr-0 mr-5`}>
            <li className="hover:bg-blue-200 font-serif">
              <Link to="/Home" onClick={closeDropdowns}>Home</Link>
            </li>
            <li>
              <Link className="hover:bg-blue-200 font-serif" to="/AboutUs" onClick={() => { closeDropdowns(); toggleDropdown("aboutUs"); }}>
                About Us{" "}
                <i className="fas fa-caret-down"></i>
              </Link>
              {DropdownVisibility.aboutUs && (
                <ul className="absolute to-zinc-200 md:z-50 font-bold md:font-thin" onMouseLeave={closeDropdowns}>
                  <li className={`hover:bg-blue-200  bg-white p-2 -ml-1 md:ml-0 font-serif" : ""
                    }`}>
                        <Link to="/AboutUs#motto" onClick={() => { closeDropdowns(); toggleDropdown("aboutUs"); }}> Our Motto</Link></li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-1 md:ml-0 font-serif"><Link><a href="#vision">Our Vision</a></Link></li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-1 md:ml-0 font-serif"><Link to="/aboutUs#mission">Our Mission</Link></li>
                </ul>
              )}
            </li>
            <li className="hover:bg-blue-200 font-serif">
              <Link to="/Services" onClick={closeDropdowns}>Services</Link>
            </li>
            <li className="hover:bg-blue-200 font-serif">
              <Link to="/Otherpages" onClick={closeDropdowns}>Other pages</Link>
            </li>
            <li className="hover:bg-blue-200 font-serif">
              <Link to="/Departments" onClick={() => { closeDropdowns(); toggleDropdown("departments"); }}>
                Departments{" "}
                <i className="fas fa-caret-down"></i>
              </Link>
              {DropdownVisibility.departments && (
                <ul className="absolute to-zinc-200  md:z-50 md:font-thin font-bold" onMouseLeave={closeDropdowns}>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0"><Link to="/departments#innpatient"                
                  onClick={() => {
                      closeDropdowns();
                      toggleDropdown("Departments");
            
                    }}>Inpatient Units</Link></li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0 font-serif">Support Services</li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0 font-serif">Telemedicine Services</li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0 font-serif">Emergency Department</li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0 font-serif">Patient Support Services</li>
                  <li className="bg-white p-2 hover:bg-blue-200 -ml-4 md:ml-0 font-serif">Administrative Departments</li>
                </ul>
              )}
            </li>
            <li className="hover:bg-blue-200 font-serif">
              <Link to="/Blog" onClick={closeDropdowns}>Blog</Link>
            </li>
          </ul>
          <button className="hidden md:inline-block w-auto md:w-[15%] -mt-0 md:-mt-4 mr-35 bg-gradient-to-r from-blue-800 to-blue-400 text-white rounded-full p-3 shadow-md shadow-blue-500 ">
            Get A Quote
            <span className="bg-blue-300 font-bold p-3 rounded-full ml-3">
              <i className="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;