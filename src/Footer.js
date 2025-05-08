import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-400 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div className="space-y-6">
          <img 
            className="w-36 h-auto" 
            src={logo} 
            alt="Mecare Hospital Logo" 
          />
          <p className="text-blue-100 text-sm leading-relaxed">
            The presentation of the information in this website in no way
            represents the expression of a political opinion whatsoever on the
            part of Mecare.
          </p>
          <div className="flex space-x-3">
            <a 
              href="https://facebook.com" 
              className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a 
              href="https://twitter.com" 
              className="bg-white text-blue-400 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              className="bg-white text-blue-700 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h2 className="font-bold text-lg font-serif pb-2 relative">
            OUR LINKS
            <span className="absolute bottom-0 left-0 h-0.5 bg-blue-300 animate-line"></span>
          </h2>
          <ul className="space-y-3">
            {[
              { label: "Partners", path: "/partners" },
              { label: "About Us", path: "/about" },
              { label: "Careers", path: "/careers" },
              { label: "Reviews", path: "/reviews" },
              { label: "Terms & Conditions", path: "/terms" },
              { label: "Help", path: "/help" }
            ].map((item) => (
              <li key={item.path} className="text-white">
                <Link to={item.path} className="flex items-center hover:underline">
                  <span className="text-blue-300 mr-2"><span className="text-white">•</span></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="font-bold text-lg font-serif pb-2 relative">
            CONTACT US
            <span className="absolute bottom-0 left-0 h-0.5 bg-blue-300 animate-line"></span>
          </h2>
          <div className="space-y-4 text-white">
            <div className="flex items-center">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-envelope text-blue-600"></i>
              </div>
              <a href="mailto:mecare@gmail.com" className="hover:underline">
                mecare@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-phone text-blue-600"></i>
              </div>
              <a href="tel:+254708627172" className="hover:underline">
                +254 708 627 172
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
              </div>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h2 className="font-bold text-lg font-serif pb-2 relative">
            NEWSLETTER
            <span className="absolute bottom-0 left-0 h-0.5 bg-blue-300 animate-line"></span>
          </h2>
          <p className="text-blue-100 text-sm">Subscribe to our newsletter for updates</p>
          <form className="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 bg-white border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <button 
              type="submit" 
              className=" bg-gradient-to-r from-blue-800 to-blue-400 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center shadow-md shadow-blue-900"
            >
              Subscribe
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-900 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-blue-200 text-sm">
          <i className="fas fa-copyright mr-1"></i> 
          2024 Mecare National Hospital. All Rights Reserved
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes pulseLine {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }
        
        .animate-line {
          animation: pulseLine 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};