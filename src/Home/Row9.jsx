import React from "react";
import image from "../image/help.png";
import { Link } from "react-router-dom";

function Row9() {
  return (
    <div className=" min-h-[80vh]  md:min-h-[45vh] bg-white lg:min-h-[70vh] w-full grid items-center justify-items-center  ">
      <div className=" min-h-[60vh] md:min-h-[30vh]  lg:min-h-[50vh] w-[90%] grid lg:grid-cols-2 ">
        <div className="  grid items-center">
          <div className=" flex flex-col gap-10 lg:gap-4 ">
            <p className=" text-md  font-bold text-sky-700 uppercase ">
              Stuck on Course Selection?
            </p>
            <p className=" text-3xl font-medium text-sky-900 ">
              Get Personalized Help
            </p>
            <p>
              Not sure which course aligns with your goals? Our experts are here
              to guide you. We offer one-on-one consultations to understand your
              aspirations, skills, and career goals, helping you choose the
              perfect program to kickstart your journey in tech. Your success
              starts with the right choice!
            </p>

            <div className=" grid justify-items-center md:justify-items-start lg:justify-items-start ">
              <button className=" h-[7vh] lg:min-h-[8vh] w-[40%] md:w-[25%] lg:w-[30%] bg-sky-500 rounded-md hover:bg-green-700 transition-all duration-[0.5s] ">
                <Link to="/contact" className="grid">
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden lg:grid items-center justify-items-center ">
          <div
            className=" h-[45vh] w-[50%] bg-cover bg-no-repeat "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Row9;
