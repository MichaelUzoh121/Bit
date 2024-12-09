import React from "react";
import image from "../image/box.webp";

function Row3() {
  return (
    <div className=" min-h-[120vh] md:min-h-[90vh] lg:min-h-[85vh] w-full bg-[#E6F0FE] grid grid-cols-1  lg:grid-cols-2 ">
      <div className="  grid lg:grid-rows-[0.5fr_2fr_0.6fr] ">
        <div className="  grid ">
          <div className=" h-full w-[30%] md:w-[20%] lg:w-[20%] bg-sky-300 rounded-se-xl "></div>
        </div>
        <div className=" grid items-center ">
          <div className=" flex flex-col gap-2 pl-3 ">
            <p className=" text-md  font-bold text-sky-700 uppercase ">
              What we offer
            </p>
            <p className=" text-3xl font-medium text-sky-900 ">
              Accredited Technology Training Programs
            </p>
            <p>
              Discover our wide range of in-demand, beginner-friendly tech
              courses, thoughtfully crafted to equip and motivate learners at
              every stage of their learning journey.
            </p>
          </div>
        </div>
        <div className=" hidden lg:grid justify-items-end ">
          <div
            className=" h-full w-[25%] bg-no-repeat  "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
      <div className="  grid lg:grid-rows-[0.6fr_2fr_0.5fr] ">
        <div className=" hidden lg:grid justify-items-center ">
          <div
            className=" h-full w-[25%] bg-no-repeat  "
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className=" grid items-center justify-items-center ">
          {/* <div className=" min-h-[40vh] w-[90%] bg-white rounded-xl grid items-center justify-center ">
            <p className=" text-4xl ">add slider here</p>
          </div> */}
        </div>
        <div className="  grid justify-items-end ">
          <div className=" h-full w-[30%] md:w-[20%] lg:w-[20%] bg-sky-300 rounded-ss-xl "></div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
