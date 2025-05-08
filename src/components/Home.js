import React from "react";
import zcube from "../images/zcube.png";

const Home = () => {
  return (
    <div class="bg-gradient-to-r from-gray-200 to-gray-50 md:bg-sky-100 w-full mt-24">
      <div class="block md:flex w-11/12 m-auto pt-10 md:pt-56">
        <div class="w-full md:w-6/12">
          <h2 class="text-sky-950 pb-5 text-4xl md:text-6xl  font-bold">
            Get Better Care For Your <span class="text-indigo-900">Health</span>
          </h2>
          <p class="text-black leading-relaxed">
            Welcome to Mecare Hospital, where your health and well-being are our
            top priorities. At Mecare, we are dedicated to providing exceptional
            and compassionate care to our community. Our team of experienced
            healthcare professionals is committed to ensuring you receive the
            highest quality medical services in a warm and welcoming
            environment.
            {/*Whether you're seeking routine check-ups, specialized
            treatments, or emergency care, we are here for you. Trust us to be
            your partner in health, delivering personalized and comprehensive
            services to meet your unique needs. Your journey to better health
            begins with us. Welcome to a place where expertise meets compassion,
            and where your well-being is our mission. */}
          </p>
          <button class="mt-10 bg-gradient-to-r from-blue-800 to-blue-400 text-white rounded-full p-3  shadow-md shadow-blue-500">
            Learn More
            <span class="bg-blue-300 font-bold p-3 rounded-full ml-3">
              <i class="fas fa-arrow-right"></i>
            </span>
          </button>
        </div>
        <div class="mt-8 md:-mt-8 md:ml-4">
          <img src={zcube} alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Home;
