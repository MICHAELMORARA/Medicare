import React from "react";
import bllog from "../images/bllog.png";

export const Blog = () => {
  return (
    <div className="mt-20 md:mt-32 py-16 px-4 sm:px-6 lg:px-8 bg-white"> {/* Added margin top here */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <img 
              className="w-full h-64 md:h-full object-cover object-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              src={bllog} 
              alt="Hospital blog illustration"
            />
          </div>
          
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-8 md:p-10 lg:p-12">
            <div className="text-center md:text-left">
              <span className="inline-block text-indigo-600 font-medium text-sm uppercase tracking-wider mb-2">
                ~ Our Blog ~
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Insights & Healthcare Updates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a healthcare institution, our hospital is dedicated to providing
                exemplary medical care with a patient-centric approach. Our
                experienced team of medical professionals is committed to delivering
                compassionate and personalized treatments. From state-of-the-art
                facilities to cutting-edge technology.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Read Our Articles
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};