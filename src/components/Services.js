import React from "react";
import radio from "../images/radio.png";
import Logy from "../images/Logy.png";
import chemo from "../images/chemo.png";
import Labo from "../images/Labo.png";
export const Services = () => {
  return (
    <div class="mt-36 md:ml-0 ml-6 ">
      <div class="p-6">
        <div class=" block md:flex justify-between md:m-24 items-center">
          <div>
            <img class="w-72 md:w-96 h-60" src={radio}alt="" />
          </div>
          <div>
            <div class="w-72 md:w-80 bg-gray-100 p-6">
              <h2 class="pl-12 font-bold font-serif">~Radiography~</h2>
              <p class="text-center">
                Our hospital's radiography services utilize advanced X-ray
                technology to capture detailed images of internal structures,
                aiding in the swift and accurate diagnosis of fractures,
                illnesses, and dental conditions.
              </p>
            </div>
          </div>
        </div>
        <div class="md:mt-0 mt-4 block md:flex justify-between md:m-24 items-center">
          <div>
            <img class="w-72 md:w-96 h-60 " src={Logy} alt="" />
          </div>
          <div>
            <div class="w-72 md:w-80 bg-gray-100 p-6">
              <h2 class="pl-12 font-bold font-serif">~Cardiology~</h2>
              <p class="text-center">
                Our cardiology department provides comprehensive care for
                heart-related conditions, offering diagnostic tests, treatment
                procedures, and ongoing management plans to promote heart health
                and well-being.
              </p>
            </div>
          </div>
        </div>
        <div class="md:mt-0 mt-4 block md:flex justify-between md:m-24 items-center">
          <div>
            <img class="w-72 md:w-96 h-60" src={chemo}alt="" />
          </div>
          <div>
            <div class=" w-72 md:w-80 bg-gray-100 md:p-6">
              <h2 class="pl-12 font-bold md:mt-0 mt-6 font-serif"> ~Cancer Treatment Center~</h2>
              <p class="text-center">
                Our hospital's cancer treatment center offers personalized care
                plans, incorporating advanced therapies such as chemotherapy,
                radiation therapy, and immunotherapy, to combat cancer and
                support patients throughout their journey to recovery.
              </p>
            </div>
          </div>
        </div>
        <div class="md:mt-0 mt-4 block md:flex justify-between md:m-24 items-center">
          <div>
            <img class="w-72 md:w-96 h-60" src={Labo} alt="" />
          </div>
          <div>
            <div class="w-72 md:w-80 bg-gray-100 p-6">
              <h2 class="pl-12 font-bold font-serif">~Laboratory Tests~</h2>
              <p class="text-center">
                Our hospital's laboratory conducts a wide range of diagnostic
                tests, including blood tests, urine analysis, and genetic
                screenings, utilizing state-of-the-art equipment to provide
                accurate and timely results for informed medical
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
