import React from "react";
import bllog from "../images/bllog.png"
export const Blog = () => {
  return (
<div class=" pt-56 md:pt-32">
    <div class="md:bg-gray-100 md:flex  items-center justify-center ml-6 mr-6 md:ml-0 md:mr-0">
            <div>
              <img class="  -mt-10 md:h-96 md:mt-1 md:mb-12 md:pl-3 rounded-lg md:rounded-none " src={bllog} alt=""/>
            </div>
        <div>
          <div class="mb-12 md:mt-28 md:mb-40 md:h-96 text-center bg-gray-200 text-black p-8  md:text-wrap md:w-96 md:ml-10 ">
              <h2 class="text-bold font-extralight text-black">~Our Blog~</h2>
              <p class="md:w-80" >
                  As a healthcare institution, our hospital is dedicated to providing
                  exemplary medical care with a patient-centric approach. Our
                  experienced team of medical professionals is committed to delivering
                  compassionate and personalized treatments. From state-of-the-art
                  facilities to cutting-edge technology.
              </p>
          </div>
        </div>
    </div>
 </div>
  );
    
};
