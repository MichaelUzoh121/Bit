import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaHandshake, FaLightbulb, FaRegStar, FaTools } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

function Row1() {
  return (
    <div className=" w-full grid ">
      <div className=" grid items-center justify-items-center min-h-[90vh] bg-[length:200%_200%] animate-gradient bg-gradient-to-r from-sky-900 via-sky-500 to-sky-300">
        <div className=" w-[60%] grid items-center justify-center  ">
          <p className=" text-4xl md:text-6xl lg:text-6xl font-bold text-center uppercase  text-white">
            Welcome to Bitxbase Technology
            {/* About us */}
          </p>
        </div>
      </div>
      <div className=" grid items-center justify-items-center bg-[#FAFAFA]  min-h-[160vh] md:min-h-[80vh] lg:min-h-[80vh]">
        <div className=" min-h-[144vh] md:min-h-[65vh] lg:min-h-[65vh] w-[90%] grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-7 ">
          <div className=" grid grid-rows-[0.5fr_2fr] ">
            <div className=" grid items-center ">
              <p className=" text-4xl font-semibold uppercase ">Who we are</p>
            </div>
            <div className=" flex flex-col gap-5 justify-center  ">
              <p>
                BitxBase Technology is a cutting-edge innovation hub, driving
                advancements in tech solutions and digital transformation. With
                expertise spanning software development, blockchain technology,
                artificial intelligence, and cloud computing, BitxBase empowers
                businesses and individuals to thrive in the modern digital era.
              </p>
              <p>
                Our solutions are built on a foundation of innovation,
                reliability, and excellence, ensuring scalability, security, and
                efficiency for every client. From streamlining processes to
                creating groundbreaking applications, we are committed to
                delivering top-tier, tailored solutions.
                <p>
                  At BitxBase, we don’t just adopt technology we redefine it,
                  shaping a future where possibilities are limitless and
                  innovation knows no bounds.
                </p>
              </p>
            </div>
          </div>
          <div className=" grid grid-rows-[0.5fr_2fr]  ">
            <div className=" grid items-center ">
              <p className=" text-4xl font-semibold uppercase ">
                our core values
              </p>
            </div>
            <div className="  grid grid-rows-2  gap-5 md:grid-cols-2 md:grid-rows-none lg:grid-rows-none lg:grid-cols-2 md:gap-3 lg:gap-3 ">
              <div className="grid grid-rows-3 gap-5 md:gap-0 lg:gap-0 ">
                <div className="  flex flex-col gap-2 md:gap-2 lg:gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <FaLightbulb />
                    </p>
                    <p>Innovation at Heart</p>
                  </div>
                  <p className=" text-sm ">
                    Driving creativity and forward-thinking in our teaching
                    methods and curriculum.
                  </p>
                </div>
                <div className="  flex flex-col gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <FaRegStar />
                    </p>
                    <p>Commitment to Excellence</p>
                  </div>
                  <p className=" text-sm ">
                    Striving for the highest standards in every program and
                    service we offer.
                  </p>
                </div>
                <div className="  flex flex-col gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <FaTools />
                    </p>
                    <p>Hands-On Learning</p>
                  </div>
                  <p className=" text-sm ">
                    We emphasize real-world application through project-based
                    learning and practical experiences.
                  </p>
                </div>
              </div>
              <div className="  grid grid-rows-3 gap-5 md:gap-0 lg:gap-0 ">
                <div className="  flex flex-col gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <FaHandshake />
                    </p>
                    <p>Collaboration and Networking</p>
                  </div>
                  <p className=" text-sm ">
                    Encouraging teamwork and professional connections that
                    extend beyond the classroom.
                  </p>
                </div>
                <div className="  flex flex-col gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <BsFillLightningChargeFill />
                    </p>
                    <p>Adaptability to Change</p>
                  </div>
                  <p className=" text-sm ">
                    We stay ahead by evolving with the latest technologies and
                    trends.
                  </p>
                </div>
                <div className="  flex flex-col gap-2 justify-center ">
                  <div className=" flex items-center gap-2 text-md font-bold ">
                    <p className=" ">
                      <GrCertificate />
                    </p>
                    <p>Certification of Skills</p>
                  </div>
                  <p className=" text-sm ">
                    Earn industry-recognized certificates that validate your
                    expertise and open doors to new career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row1;
