import React from "react";
import images2 from "../images/image2.png";

const About = () => {


  return (
    <div className="mt-20 md:mt-48">
      <div className="bg-gray-50 block md:flex p-6">
        <img className="rounded-md mt-24 md:mt-0 h-48 md:h-auto md:auto" src={images2} alt="" />
        <div className="ml-6">
          <h2 className="font-bold text-lg mt-3 md:mt-0 font-serif">ABOUT US</h2>
          <p>
            Mecare was established as a State Corporation in 2024 through Legal
            Notice No. 109 of 6th April 2024 as amended by the Mecare Amendment
            Order 2024 with the following mandate:
          </p>
          <ul className="mt-6 ml-6">
            <li>
              1. To receive patients on referral from other hospitals or
              institutions within or outside Kenya for specialized health care;
            </li>
            <li>
              2. To provide facilities for medical education for the University
              of Nairobi and for research either directly or through other
              co-operating health institutions;
            </li>
            <li>
              3. To provide facilities for education and training in nursing and
              other health and allied institutions;
            </li>
            <li>
              4. To participate, as a national referral hospital, in national
              health planning
            </li>
          </ul>
        </div>
      </div>
      <div className="block md:grid grid-cols-3 justify-between mt-6 mb-6 p-6 ">
        <div className="bg-gray-200 p-12 mt-3  md:mr-3 hover:bg-blue-100" id="motto">
          <h2 className="font-bold font-serif">~Our Vision~</h2>
            <p className="md:ml-3">
              In Care, Excellence in Healing where Every Heart Finds
              Hope. We dedicate ourselves to the pursuit of
              unparalleled healthcare.
            </p>
          </div>
        <div className="hover:bg-blue-100 bg-gray-200 p-10 mt-3 md:mr-3" id="vision">
          <h2 className="font-bold font-serif">~Our Vision~</h2>
          <p className="md:ml-3">
            Pioneering a healthier future, our vision is to be a beacon of
            excellence, innovation, and compassion in healthcare delivery.
          </p>
        </div>
        <div className="bg-gray-200 p-10 mt-3 md:mr-3 hover:bg-blue-100" id="mission">
          <h2 className="font-bold font-serif">~Our Mission~</h2>
          <p className="md:ml-3">
            Empower lives through compassionate care, advanced medical
            expertise, and community collaboration, ensuring health and
            well-being for all
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
