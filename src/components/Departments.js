import React from "react";
import inpatient from "../images/inpatient.png"
import service from "../images/service.png"
import telemedicine from "../images/telemedicine.png"
import emergency from "../images/emergency.png"
import patient from "../images/patient.png"
import administrative from "../images/administrative.png"

export const Departments = () => {
    return (
    <div class=" md:pt-0 pt-96">
        <div>
        <h2 class="md:mt-44 font-bold font-serif text-center text-2xl md:text-6xl capitalize bg-gray-100 md:p-6 ml-4 md:ml-0 mr-4 md:mr-0 hover:text-blue-900 ">welcome to our medicare departments</h2>
        </div>
        <div class=" bg-gray-100 p-8 m-4 " id="innpatient">
            <img class="mx-auto mt-8" src={inpatient} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Inpatient Units</h2>
            <p class="text-black font-semibold text-lg text-center mt-3">Experience compassionate care in our state-of-the-art inpatient units. With expert medical attention and a focus on comfort, we ensure your well-being throughout your stay.</p>
        </div>
        <div class="mt-4 bg-gray-100 p-8 m-4 ">
            <img class="mx-auto" src={service} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Support Services</h2>
            <p class="text-black font-semibold text-lg text-center mt-2">Discover our comprehensive support services designed to enhance your journey to wellness. From counseling to nutritional guidance, we provide personalized care to meet your unique needs and promote holistic healing.</p></div>
        <div class="mt-4 bg-gray-100 p-8 m-4 ">
            <img class="mx-auto" src={telemedicine} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Telemedicine Services</h2>
            <p class="text-black font-semibold text-lg text-center mt-2">Access quality healthcare from the comfort of your home with our telemedicine services. Connect with experienced healthcare professionals remotely for consultations, prescriptions, and personalized treatment plans, ensuring convenient and timely care.</p> </div>
        <div class="mt-4 bg-gray-100 p-8 m-4  ">
            <img class="mx-auto" src={emergency} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Emergency Department</h2>
            <p class="text-black font-semibold text-lg text-center mt-2">Receive prompt and expert care in our emergency department. Our dedicated team is available 24/7, equipped to handle a wide range of medical emergencies with compassion and efficiency, prioritizing your health and safety.</p></div>
        <div class="mt-4 bg-gray-100 p-8 m-4 ">
            <img class="mx-auto" src={patient} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Patient Support Services</h2>
            <p class="text-black font-semibold text-lg text-center mt-2">Our Patient Support Services department offers comprehensive assistance to ensure your comfort and well-being throughout your healthcare journey. From scheduling appointments to coordinating resources, we're here to support you every step of the way.</p> </div>
        <div class="mt-4 bg-gray-100 p-8 m-4  ">
            <img class="mx-auto" src={administrative} alt=""/>
            <h2 class="font-bold text-2xl text-center mt-2 font-serif">Administrative Departments</h2>
            <p class="text-black font-semibold text-lg text-center mt-2">Our administrative departments work diligently behind the scenes to keep operations running smoothly, ensuring efficient processes and seamless experiences for our patients and staff alike. Discover how we prioritize excellence in every aspect.</p>
        </div>
    </div>
)}
