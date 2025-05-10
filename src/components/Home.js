import React from "react";
import { Link } from "react-router-dom";
import zcube from "../images/zcube.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden mt-16 md:mt-24"> {/* Added margin top here */}
      {/* Background gradient - visible on mobile only */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 md:hidden -z-10"></div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Text content */}
          <div className="w-full md:w-1/2 space-y-6 animate-fadeIn mt-4 md:mt-0"> {/* Added margin top for mobile */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-2">
              Get Better Care For Your{" "}
              <span className="text-indigo-700 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Health
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mt-4"> {/* Added margin top */}
              Welcome to Medicare Hospital, where your health and well-being are our
              top priorities. At Medicare, we are dedicated to providing exceptional
              and compassionate care to our community.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mt-4"> {/* Added margin top */}
              Our team of experienced healthcare professionals is committed to ensuring 
              you receive the highest quality medical services in a warm and welcoming 
              environment.
            </p>
            
            <div className="mt-8"> {/* Wrapped button in div with margin top */}
              <Link to="/services">
                <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span>Learn More</span>
                  <span className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute h-0 w-0 rounded-full bg-white opacity-20 group-hover:h-32 group-hover:w-32 transition-all duration-500"></div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative animate-float mt-8 md:mt-0"> {/* Added margin top for mobile */}
            <div className="relative">
              <img 
                src={zcube} 
                alt="Healthcare illustration" 
                className="w-full max-w-md mx-auto rounded-full border-8 border-white shadow-2xl transform transition-transform duration-500 hover:rotate-3" 
              />
              <div className="absolute -z-10 w-full h-full bg-blue-200 rounded-full top-4 left-4 opacity-30"></div>
              <div className="absolute -z-20 w-full h-full bg-indigo-200 rounded-full top-8 left-8 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;