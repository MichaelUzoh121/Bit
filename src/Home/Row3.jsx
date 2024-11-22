import React from "react";

function Row3() {
  return (
    <div className=" min-h-[85vh] w-full bg-[#E6F0FE] grid  grid-cols-2 ">
      <div className="  grid grid-rows-[0.7fr_2fr_0.8fr] ">
        <div className="  grid ">
          <div className=" h-full w-[20%] bg-sky-300 rounded-se-xl "></div>
        </div>
        <div className=" grid items-center ">
          <div className=" flex flex-col gap-2 pl-3 ">
            <p className=" text-md  font-bold text-sky-700 uppercase ">What we offer</p>
            <p className=" text-3xl font-medium text-sky-900 ">Certified Tech Training Courses and</p>
            <p>
              Explore our extensive selection of highly sought-after
              beginner-friendly tech courses, meticulously designed to empower
              and inspire learners at every step of their educational journey.
            </p>
          </div>
        </div>
        <div className=" grid ">
          <div className=" h-full w-[25%]  "></div>
        </div>
      </div>
      <div className="  grid grid-rows-[0.8fr_2fr_0.7fr] ">
        <div className=" grid justify-items-end ">
          <div className=" h-full w-[25%]  "></div>
        </div>
        <div className=" grid items-center justify-items-center ">
          <div className=" min-h-[40vh] w-[90%] bg-white rounded-xl "></div>
        </div>
        <div className="  grid justify-items-end ">
          <div className=" h-full w-[20%] bg-sky-300 rounded-ss-xl "></div>
        </div>
      </div>
    </div>
  );
}

export default Row3;
