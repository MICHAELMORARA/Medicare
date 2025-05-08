import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import images2 from "../images/image2.png";

const About = () => {
  const location = useLocation();

  // Scroll to the hash target on route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="mt-20 md:mt-28">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-4">
              About Medicare
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Medicare was established as a State Corporation in 2024 through Legal
              Notice No. 109 of 6th April 2024 as amended by the Medicare Amendment
              Order 2024 with the following mandate:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                To receive patients on referral from other hospitals or institutions
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                To provide facilities for medical education and research
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                To provide training in nursing and health sciences
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                To participate in national health planning
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover" 
              src={images2} 
              alt="About Medicare Hospital" 
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500"
            id="motto"
          >
            <h2 className="text-xl font-bold text-gray-800 font-serif mb-4">Our Motto</h2>
            <p className="text-gray-600 italic">
              "In Care, Excellence in Healing where Every Heart Finds Hope."
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500"
            id="vision"
          >
            <h2 className="text-xl font-bold text-gray-800 font-serif mb-4">Our Vision</h2>
            <p className="text-gray-600">
              "Pioneering a healthier future through innovation and compassion."
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500"
            id="mission"
          >
            <h2 className="text-xl font-bold text-gray-800 font-serif mb-4">Our Mission</h2>
            <p className="text-gray-600">
              "Empowering lives through compassionate care and collaboration."
            </p>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 font-serif mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600 mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                We prioritize the needs and comfort of our patients above all else, 
                ensuring personalized treatment plans and compassionate service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600 mb-3">Innovative Solutions</h3>
              <p className="text-gray-600">
                Our team continuously adopts cutting-edge medical technologies and 
                treatment methodologies to provide the best possible care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;