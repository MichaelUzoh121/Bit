import React, { useState, useEffect } from "react";
import { FaCalendar } from "react-icons/fa6";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoIosAlert } from "react-icons/io";

const CourseCard = ({ courses }) => {
  let [acc, setAcc] = useState("0px");

  const showAcc = () => {
    if (acc === "0px") {
      setAcc("250px");
    } else {
      setAcc("0px");
    }
  };

  return (
    <div className=" bg-white shadow-[1px_1px_5px_#0002] hover:shadow-lg rounded-lg duration-700 ">
      <div className=" transition-all duration-[0.7s] rounded-lg grid ">
        <div className=" h-[35vh] w-full grid ">
          <div className="rounded-ss-lg rounded-se-lg  h-full w-full">
            {/* <img  
              src={courses.courseImage}
              className=" w-full h-[200px] rounded-ss-lg rounded-se-lg"
              loading="lazy"
            /> */}
            <div className=" h-full w-full bg-cover bg-center rounded-ss-lg rounded-se-lg " style={{backgroundImage: `url(${courses.courseImage})`}} loading="lazy"></div>
          </div>
        </div>
        <div className="p-3 grid items-center ">
          <div className="flex flex-col gap-3 ">
            <p className=" text-sky-500 text-xl font-semibold ">{courses.courseName}</p>
            <p>{courses.courseHint}</p>
            <div className=" relative">
              {/* Button to toggle accordion */}
              <button
                className="h-[40px] w-full flex justify-between px-4 font-bold text-white  items-center bg-sky-500"
                onClick={showAcc}
              >
                <span>Course Contents</span>
                <span><FiChevronDown/></span>
                
              </button>

              <div
                className="bg-sky-200 w-full z-50 overflow-y-scroll scrollbar-thumb-sky-800 scrollbar-thin scrollbar-track-transparent duration-200 absolute"
                style={{ height: acc }}
              >
                {acc !== "0px" && (
                  <div className="mt-2 text-gray-700 text-sm">
                    {Array.isArray(courses.courseContent) &&
                    courses.courseContent.length > 0 ? (
                      typeof courses.courseContent[0] === "string" ? (
                        // Case 1: Array of strings
                        <ul className="list-disc pl-6">
                          {courses.courseContent.map((content, idx) => (
                            <li key={idx} className="mb-2">
                              {content}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        // Case 2: Array of objects
                        courses.courseContent.map((content, idx) => (
                          <div key={idx} className="mb-4">
                            {content.track && (
                              <h4 className="text-md font-semibold text-gray-800">
                                {content.track}
                              </h4>
                            )}
                            {Array.isArray(content.modules) && (
                              <ul className="list-disc pl-6">
                                {content.modules.map((module, moduleIdx) => (
                                  <li key={moduleIdx} className="mb-2">
                                    {module}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))
                      )
                    ) : (
                      <p className="text-red-500">
                        Invalid course content format.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-10">
              <div className=" flex gap-2 items-center ">
                <FaCalendar />
                <p>{courses.courseDuration}</p>
              </div>
              <div className=" flex gap-1 items-center ">
                <IoIosAlert />
                <p>Three times a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
