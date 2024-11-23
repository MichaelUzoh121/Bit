import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

function Row2() {
  return (
    <div className=" min-h-[250vh] md:min-h-[150vh] lg:min-h-[90vh] w-full grid items-center justify-items-center bg-white ">
      <div className=" min-h-[230vh] grid-rows-[0.3fr_2fr] md:min-h-[130vh] lg:min-h-[70vh] w-[90%] grid md:grid-rows-[0.5fr_2fr] lg:grid-rows-[1fr_2fr] gap-5  ">
        <div className="  grid items-center justify-center ">
          <p className=" text-3xl md:text-5xl lg:text-5xl uppercase font-bold ">Why Choose Us?</p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-[1s]  ">
          <div className=" bg-[#D8E1E2] rounded-xl z-50 lg:hover:translate-y-[-20px] duration-500 grid items-center justify-items-center ">
            <div className=" min-h-[35vh] lg:min-h-[40vh] w-[80%] grid grid-rows-[1fr_2fr] ">
              <div className="  grid items-center justify-center text-7xl text-sky-500 ">
                <FaGraduationCap />
              </div>
              <div className=" flex flex-col items-center justify-center gap-5 ">
                <p className=" text-xl font-semibold ">Skilled Instructors</p>
                <p className=" text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat quo itaque laboriosam.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#D8E1E2] rounded-xl lg:hover:translate-y-[-20px] duration-500 grid items-center justify-items-center ">
            <div className=" min-h-[35vh] lg:min-h-[40vh] w-[80%]  grid grid-rows-[1fr_2fr] ">
              <div className="  grid items-center justify-center text-6xl text-sky-500 ">
                <FaGlobe />
              </div>
              <div className=" flex flex-col items-center justify-center gap-5 ">
                <p className=" text-xl font-semibold ">Online Classes</p>
                <p className=" text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat quo itaque laboriosam.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#D8E1E2] rounded-xl  lg:hover:translate-y-[-20px] duration-500 grid items-center justify-items-center ">
            <div className=" min-h-[35vh] lg:min-h-[40vh] w-[80%]  grid grid-rows-[1fr_2fr] ">
              <div className="  grid items-center justify-center text-6xl text-sky-500 ">
                <FaSchool />
              </div>
              <div className=" flex flex-col items-center justify-center gap-5 ">
                <p className=" text-xl font-semibold ">Good Environment</p>
                <p className=" text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat quo itaque laboriosam.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#D8E1E2] rounded-xl  lg:hover:translate-y-[-20px] duration-500 grid items-center justify-items-center ">
            <div className=" min-h-[35vh] lg:min-h-[40vh] w-[80%]  grid grid-rows-[1fr_2fr] ">
              <div className="  grid items-center justify-center text-6xl text-sky-500 ">
                <IoLibrary />
              </div>
              <div className=" flex flex-col items-center justify-center gap-5 ">
                <p className=" text-xl font-semibold ">Career Support</p>
                <p className=" text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat quo itaque laboriosam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row2;
