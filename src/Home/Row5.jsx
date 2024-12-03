import React from "react";
import { Link } from "react-router-dom";
import image from "../image/ai.jpeg";
import image2 from "../image/web.jpeg";
import image3 from "../image/software.jpeg";
import { FaCalendar } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";

function Row5() {
  return (
    <div className="grid bg-white gap-3">
      <div className="  w-full grid justify-items-center ">
        <div className="  min-h-[35vh] relative md:min-h-[20vh] lg:min-h-[25vh] w-[90%] lg:w-[50%] grid place-items-center content-center gap-2">
          <h2 className=' text-center mt-4 px-4 relative font-semibold text-sky-900 before:h-[2px] before:w-[180px] before:top-2 before:bg-sky-900 before:absolute before:ml-[-40px] after:h-[2px] after:w-[220px] after:top-4 after:bg-sky-900 after:absolute after:ml-[-150px]'>
            <span className=' px-3 relative bg-white pb-3 z-10 uppercase'>Courses</span>
          </h2>
          <p className=" text-center text-3xl font-semibold  md:grid items-center">
            Discover Your Ideal Program
          </p>
          <p className="  text-center ">
            Explore a variety of programs designed to match your passions and
            career goals. We help you find the perfect path to start or advance
            your tech career.
          </p>
        </div>
      </div>
      <div className=" min-h-[180vh] md:min-h-[120vh] lg:min-h-[90vh] w-full justify-items-center ">
        <div className=" min-h-[170vh] md:min-h-[110vh] w-[90%] lg:w-[90%] lg:min-h-[80vh] grid md:grid-rows-[2fr_0.2fr] lg:grid-rows-[2fr_0.5fr] ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className=" border transition-all duration-[0.7s] hover:shadow-lg rounded-lg grid grid-rows-[1.4fr_1.2fr] ">
              <div className="  grid ">
                <div
                  className="bg-cover bg-no-repeat rounded-ss-lg rounded-se-lg  "
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
              <div className="p-3 grid items-center ">
                <div className="flex flex-col gap-3 ">
                  <p className=" text-xl font-semibold ">
                    Artificial Intelligence (AI)
                  </p>
                  <p>
                    AI drives innovation, from smart assistants to autonomous
                    systems. We teach you to master AI concepts and create
                    solutions for the future.
                  </p>
                  <div className="flex gap-10">
                    <div className=" flex gap-2 items-center ">
                      <FaCalendar />
                      <p>6 months</p>
                    </div>
                    <div className=" flex gap-1 items-center ">
                      <IoIosAlert />
                      <p>Three times a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border transition-all duration-[0.7s] hover:shadow-lg rounded-lg grid grid-rows-[1.4fr_1.2fr] ">
              <div className="  grid ">
                <div
                  className="bg-cover bg-no-repeat rounded-ss-lg rounded-se-lg  "
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
              </div>
              <div className="p-3 grid items-center ">
                <div className="flex flex-col gap-3 ">
                  <p className=" text-xl font-semibold ">
                    Full Stack Web Developement
                  </p>
                  <p>
                    Learn to build dynamic websites and applications from front
                    to back. We equip you with the skills to excel in the tech
                    industry.
                  </p>
                  <div className="flex gap-10">
                    <div className=" flex gap-2 items-center ">
                      <FaCalendar />
                      <p>6 months</p>
                    </div>
                    <div className=" flex gap-1 items-center ">
                      <IoIosAlert />
                      <p>Three times a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border transition-all duration-[0.7s] hover:shadow-lg rounded-lg grid grid-rows-[1.4fr_1.2fr] ">
              <div className="  grid ">
                <div
                  className="bg-cover bg-no-repeat rounded-ss-lg rounded-se-lg  "
                  style={{ backgroundImage: `url(${image3})` }}
                ></div>
              </div>
              <div className="p-3 grid items-center ">
                <div className="flex flex-col gap-3 ">
                  <p className=" text-xl font-semibold ">
                    Software Development
                  </p>
                  <p>
                    Master the art of creating efficient and innovative
                    software. We equip you with the tools to build impactful
                    solutions.
                  </p>
                  <div className="flex gap-10">
                    <div className=" flex gap-2 items-center ">
                      <FaCalendar />
                      <p>1 Year</p>
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

          <div className=" grid items-center lg:items-end justify-items-center ">
            <button className=" h-[7vh] lg:min-h-[10vh] w-[40%] md:w-[25%] lg:w-[20%] bg-sky-500 rounded-md hover:bg-green-700 transition-all duration-[0.5s] ">
              <Link to="/courses" className="grid">
                View all courses
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row5;
