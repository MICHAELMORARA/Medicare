import React from "react";
import radio from "../images/radio.png";
import Logy from "../images/Logy.png";
import chemo from "../images/chemo.png";
import Labo from "../images/Labo.png";

export const Services = () => {
  const services = [
    {
      image: radio,
      title: "Radiography",
      description:
        "Our hospital's radiography services utilize advanced X-ray technology to capture detailed images of internal structures, aiding in the swift and accurate diagnosis of fractures, illnesses, and dental conditions.",
    },
    {
      image: Logy,
      title: "Cardiology",
      description:
        "Our cardiology department provides comprehensive care for heart-related conditions, offering diagnostic tests, treatment procedures, and ongoing management plans to promote heart health and well-being.",
    },
    {
      image: chemo,
      title: "Cancer Treatment Center",
      description:
        "Our hospital's cancer treatment center offers personalized care plans, incorporating advanced therapies such as chemotherapy, radiation therapy, and immunotherapy, to combat cancer and support patients throughout their journey to recovery.",
    },
    {
      image: Labo,
      title: "Laboratory Tests",
      description:
        "Our hospital's laboratory conducts a wide range of diagnostic tests, including blood tests, urine analysis, and genetic screenings, utilizing state-of-the-art equipment to provide accurate and timely results for informed medical decision-making.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50 mt-24 md:mt-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-serif">
            Our Medical Services
          </h2>
          <div className="w-0 h-1 bg-blue-500 mx-auto mt-4 mb-6 animate-line"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services using advanced medical technology
            and compassionate care to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-blue-800 font-serif mb-4">
                    {service.title}
                  </h3>
                  <div className="w-0 h-1 bg-blue-300 mb-6 animate-line-card"></div>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulseLine {
          0% { width: 0; }
          50% { width: 96px; }
          100% { width: 0; }
        }
        
        @keyframes pulseLineCard {
          0% { width: 0; }
          50% { width: 64px; }
          100% { width: 0; }
        }
        
        .animate-line {
          animation: pulseLine 3s ease-in-out infinite;
        }
        
        .animate-line-card {
          animation: pulseLineCard 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;