import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

function Row2() {
  return (
    <div className=" min-h-[160vh] md:min-h-[85vh] lg:min-h-[60vh] w-full flex justify-center">
      {/* <div className=" min-h-[230vh] grid-rows-[0.3fr_2fr] bg-yellow-200 md:min-h-[130vh] lg:min-h-[70vh] w-[90%] grid md:grid-rows-[0.5fr_2fr] lg:grid-rows-[1fr_2fr] gap-5  "> */}
      <div className=" flex flex-col gap-8 w-[90%]  ">
        <div className=" relative">
          <h2 className=' text-center mt-4 font-semibold text-sky-900 before:h-[2px] before:w-[200px] before:top-7 before:bg-sky-900 before:absolute before:ml-[-30px] after:h-[2px] after:w-[250px] after:top-9 after:bg-sky-900 after:absolute after:ml-[-200px]'>
            <span className=' leading-8 px-3 relative py-3 bg-white z-10 uppercase'>Why Bitxbase?</span>
          </h2>
          {/* <h1 className=" text-center font-bold text-3xl uppercase md:text-3xl lg:text-4xl mt-3">Cus why not us??</h1> */}
          {/* <h1>Diverse Course Offerings</h1> */}
        </div>
        
        <div className=" grid  md:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-[1s]  ">
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
