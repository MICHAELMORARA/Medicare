import React from "react";
import inpatient from "../images/inpatient.png";
import service from "../images/service.png";
import telemedicine from "../images/telemedicine.png";
import emergency from "../images/emergency.png";
import patient from "../images/patient.png";
import administrative from "../images/administrative.png";

export const Departments = () => {
  return (
    <div className="pt-24 md:pt-16 px-4 md:px-8 mt-12"> {/* Added margin-top here */}
      <h2 className="font-bold text-center text-3xl md:text-5xl text-blue-800 mb-12">
        Welcome to Our Medicare Departments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={inpatient} alt="Inpatient Units" />
          <h3 className="font-bold text-lg text-center text-blue-900">Inpatient Units</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Experience compassionate care in our state-of-the-art inpatient units. With expert medical attention and a focus on comfort, we ensure your well-being throughout your stay.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={service} alt="Support Services" />
          <h3 className="font-bold text-lg text-center text-blue-900">Support Services</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Discover our comprehensive support services designed to enhance your journey to wellness. From counseling to nutritional guidance, we provide personalized care to meet your unique needs and promote holistic healing.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={telemedicine} alt="Telemedicine Services" />
          <h3 className="font-bold text-lg text-center text-blue-900">Telemedicine Services</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Access quality healthcare from the comfort of your home with our telemedicine services. Connect with experienced healthcare professionals remotely for consultations, prescriptions, and personalized treatment plans, ensuring convenient and timely care.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={emergency} alt="Emergency Department" />
          <h3 className="font-bold text-lg text-center text-blue-900">Emergency Department</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Receive prompt and expert care in our emergency department. Our dedicated team is available 24/7, equipped to handle a wide range of medical emergencies with compassion and efficiency, prioritizing your health and safety.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={patient} alt="Patient Support Services" />
          <h3 className="font-bold text-lg text-center text-blue-900">Patient Support Services</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Our Patient Support Services department offers comprehensive assistance to ensure your comfort and well-being throughout your healthcare journey. From scheduling appointments to coordinating resources, we're here to support you every step of the way.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
          <img className="mx-auto mb-4 w-24 h-24 object-cover" src={administrative} alt="Administrative Departments" />
          <h3 className="font-bold text-lg text-center text-blue-900">Administrative Departments</h3>
          <p className="text-center text-sm text-gray-600 mt-2">
            Our administrative departments work diligently behind the scenes to keep operations running smoothly, ensuring efficient processes and seamless experiences for our patients and staff alike. Discover how we prioritize excellence in every aspect.
          </p>
        </div>
      </div>
    </div>
  );
};
