import React from "react";
import gif from "../image/ec.gif";
import { Link } from "react-router-dom";

function Row7() {
  return (
    <div className=" min-h-[100vh] md:min-h-[80vh] lg:min-h-[80vh] w-full grid items-center justify-items-center ">
      <div className=" min-h-[80vh] md:min-h-[60vh] lg:min-h-[60vh] w-[90%] grid-rows-[1.5fr_2fr] grid  lg:grid-rows-none lg:grid-cols-2 ">
        <div className=" grid lg:p-5 ">
          <div
            className=" bg-no-repeat md:bg-center bg-contain "
            style={{ backgroundImage: `url(${gif})` }}
          ></div>
        </div>
        <div className=" grid items-center ">
          <div className=" flex flex-col gap-10 md:gap-12 lg:gap-6 ">
            <p className=" text-3xl font-medium text-sky-900 ">
              Discover Learning Like Never Before
            </p>
            <p>
              {/* Experience a transformative approach to education at Bitxbase
              Technology. With innovative programs, hands-on training, and
              expert guidance, we make learning exciting, practical, and
              tailored to your success. Explore cutting-edge technologies and
              gain the skills to thrive in today’s competitive tech landscape.
              Your journey to excellence starts here! */}
              Experience a transformative journey at Bitxbase Technology and
              earn certificates that showcase your expertise. With innovative
              programs, hands-on training, and expert guidance, we equip you
              with the skills to excel in today’s tech-driven world. Your
              certified success starts here!
            </p>
            <div>
              <button className=" h-[7vh] lg:min-h-[7vh] w-[40%] md:w-[25%] lg:w-[20%] bg-sky-500 rounded-md hover:bg-green-700 transition-all duration-[0.5s] ">
                <Link to="/courses" className="grid">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row7;
