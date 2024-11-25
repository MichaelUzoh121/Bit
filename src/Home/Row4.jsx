import React from "react";
import image from "../image/tech.jpeg";
import image2 from "../image/tech2.jpeg";
import image3 from "../image/tech3.jpeg";
import image4 from "../image/tech4.jpeg";

function Row4() {
  return (
    <div className=" min-h-[320vh] md:min-h-[230vh] lg:min-h-[250vh] w-full bg-sky-50  grid items-center justify-items-center  ">
      <div className=" min-h-[300vh] md:min-h-[210vh]  grid-rows-[10%_90%] lg:min-h-[230vh] w-[90%] lg:w-[60%] grid md:grid-rows-[10%_90%] lg:grid-rows-[15%_85%] ">
        <div className=" grid items-center justify-center ">
          <p className=" capitalize text-4xl font-semibold ">
            Thrive with Bitxbase Technology
          </p>
        </div>
        <div className=" grid grid-rows-4 gap-12 md:gap-5 lg:gap-5 ">
          <div className=" grid grid-cols-1 gap-7 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="  grid items-center ">
              <div className=" flex flex-col gap-4 ">
                <p className=" text-xl font-semibold ">
                  Proven Pathway to Career Success
                </p>
                <p className=" text-base ">
                  Proven Pathway to Career Success Learn the skills employers
                  demand through hands-on projects and expert mentorship. At
                  Bitxbase Technology, we prepare you to launch your tech career
                  with confidence.
                </p>
              </div>
            </div>
            <div className="  grid items-center  justify-items-center">
              <div className=" min-h-[40vh] w-full md:w-[90%] lg:w-[90%] grid ">
                <div
                  className=" bg-cover bg-no-repeat bg-center rounded-md   "
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-7 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="  grid items-center  justify-items-center">
              <div className=" min-h-[40vh] w-full md:w-[90%] lg:w-[90%] grid ">
                <div
                  className=" bg-cover bg-no-repeat bg-center rounded-md   "
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
              </div>
            </div>
            <div className="  grid items-center ">
              <div className=" flex flex-col gap-4 ">
                <p className=" text-xl font-semibold ">Top Tech Skills</p>
                <p className=" text-base ">
                  Top Tech Skills Stay ahead of the curve with the top tech
                  skills that drive success in today's industry. At Bitxbase
                  Technology, we provide you with the knowledge and practical
                  experience to master the most sought-after technologies,
                  ensuring you're ready for the future of tech.
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-7 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="  grid items-center ">
              <div className=" flex flex-col gap-4 ">
                <p className=" text-xl font-semibold ">Together, We Thrive</p>
                <p className=" text-base ">
                  At Bitxbase Technology, success is a shared journey. With a
                  strong support network, expert guidance, and a collaborative
                  community, we ensure that you're empowered to grow and achieve
                  your tech career goals together, we thrive!
                </p>
              </div>
            </div>
            <div className="  grid items-center  justify-items-center">
              <div className=" min-h-[40vh] w-full md:w-[90%] lg:w-[90%] grid ">
                <div
                  className=" bg-cover bg-no-repeat bg-center rounded-md   "
                  style={{ backgroundImage: `url(${image3})` }}
                ></div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-7 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="  grid items-center  justify-items-center">
              <div className=" min-h-[40vh] w-full md:w-[90%] lg:w-[90%] grid ">
                <div
                  className=" bg-cover bg-no-repeat bg-center rounded-md   "
                  style={{ backgroundImage: `url(${image4})` }}
                ></div>
              </div>
            </div>
            <div className="  grid items-center ">
              <div className=" flex flex-col gap-4 ">
                <p className=" text-xl font-semibold ">Dynamic Calendars</p>
                <p className=" text-base ">
                  Experience the power of Dynamic Calendars at Bitxbase
                  Technology. Stay organized with flexible schedules that adjust
                  to your needs, ensuring a seamless learning experience
                  tailored to your pace and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row4;
