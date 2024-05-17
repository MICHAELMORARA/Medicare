import React from "react";
import {} from "react-router-dom";
import "tailwindcss/tailwind.css";
import logo from "./images/logo.png";
export const Footer = () => {
  return (
    <div>
      <div class="block p-10 md:pb-0 md:flex pt-10 md:mt-20 md:m-0  md:p-4 justify-between bg-blue-100 mt-10">
        <div class="block ">
          <img class="w-36 -mx-2 md:mx-0" src={logo}alt="" />
          <p class=" md:ml-6 mt-6 text-start md:text-start md:w-56 font-semibold" >
            The presentation of the information in this website in no way
            represents the expression of a political opinion whatsoever on the
            part of Mecare.
          </p>
          <div class="md:flex md:ml-6 md:mt-6 md:mb-6 mb-4 flex mt-4">
            <span>
              <i class="fab fa-facebook p-1 mr-2"></i>
            </span>
            <span>
              <i class="fab fa-twitter p-1 mr-2"></i>
            </span>
            <span>
              <i class="fab fa-linkedin p-1 mr-2"></i>
            </span>
          </div>
        </div>
        <div>
          <h2 class="font-bold text-lg text-left md:text-start font-serif">OUR LINKS</h2>
          <ul class="ml-6 mt-1 md:mt-6 font-semibold text-left md:text-start ">
            <li>1.Partners</li>
            <li>2.About Us</li>
            <li>3.Careers</li>
            <li>4.Reviews</li>
            <li>5.Terms & Conditions</li>
            <li>6.Help</li>
          </ul>
        </div>
        <div class="block md:0 mt-2">
          <h2 class="font-bold text-lg text-start md:text-start font-serif">CONTACT US</h2>
          <p class="ml-6 mt-1 md:mt-6 font-semibold"><i class="fas fa-envelope mr-2 mt-1"></i>mecare@gmail.com</p>
          <p class="ml-6 mt-1 md:mt-3 font-semibold"><i class="fas fa-phone mr-2 mt-1"></i>+254708627172</p>
          <p class="ml-6 mt-1 md:mt-3 font-semibold"><i class="fas fa-map-marker mr-2 mt-1"></i>Location</p>
          </div>
      </div>
      <div class=" bg-slate-100 p-8 text-center">
        <span>
          <i class="fas fa-copyright mr-2"></i>2024 Mecare National Hospital. All
          Rights Reserved
        </span>
      </div>
    </div>
  );
};
