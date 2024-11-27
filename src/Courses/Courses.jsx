import React from "react";
import CourseCard from "./CourseCard";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className=" grid ">
      <div className=" bg-black text-white  min-h-[60vh] grid grid-rows-[2fr_1fr] ">
        <div className=" flex flex-col justify-center pl-5 ">
          <h1 className=" text-3xl md:text-4xl lg:text-7xl font-poppings font-semibold">
            Step Into the Future of Tech
          </h1>
          <p className="mt-4 text-lg font-poppings  ">
            Explore courses designed to give you in-demand skills for today and
            tomorrow.
          </p>
        </div>
        <div className=" grid  items-center "> 
          <div className=" h-[70px] bg-sky-950 w-[95%] rounded-r-xl  font-semibold flex items-center pl-5 ">
            <FaHome className="inline" />
            <span>
              <Link to="/" className=" ml-2 hover:text-sky-500 duration-500">
                HOME
              </Link>{" "}
              / COURSES
            </span>
          </div>
        </div>
      </div>
      <div>
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
