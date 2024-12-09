import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaHandshake, FaLightbulb, FaRegStar, FaTools } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

function Row1() {
  return (
    <div className=" w-full grid ">
      <div className=" grid items-center justify-items-center min-h-[60vh] bg-[length:200%_200%] animate-gradient bg-gradient-to-r from-sky-900 via-sky-500 to-sky-300">
        <div className=" w-[60%] grid items-center justify-center  ">
          <p className=" text-4xl md:text-6xl lg:text-6xl font-bold text-center uppercase  text-white">
            Welcome to Bitxbase Coding Academy
            {/* About us */}
          </p>
        </div>
      </div>
      {/* <div className=" grid items-center justify-items-center bg-[#FAFAFA] bg-red-200 min-h-[150vh] md:min-h-[80vh] lg:h-[90vh]">
        <div className=" min-h-[135vh] bg-red-500  md:min-h-[65vh] lg:h-[40vh] w-[90%] flex-col flex md:grid gap-5 lg:grid lg:grid-rows-none lg:grid-cols-2 md:gap-7 lg:gap-7 ">
          <div className=" bg-gray-500 h-full w-full flex flex-col md:grid md:grid-rows-[0.5fr_2fr] lg:grid lg:grid-rows-[0.5fr_2fr]">
            <div className=" grid items-center min-h-[10vh] bg-blue-700 lg:min-h-full  w-full ">
              <p className=" text-4xl font-semibold uppercase ">Who we are</p>
            </div>
            <div className=" bg-stone-400 grid w-full items-center min-h-[50vh] lg:min-h-full md:min-h-full  ">
              <div className=" flex flex-col gap-5 md:gap-5  h-full w-full lg:items-center lg:justify-center ">
                <p className=" bg-red-700 ">
                  BitxBase Technology is a cutting-edge innovation hub, driving
                  advancements in tech solutions and digital transformation.
                  With expertise spanning software development, blockchain
                  technology, artificial intelligence, and cloud computing,
                  BitxBase empowers businesses and individuals to thrive in the
                  modern digital era.
                </p>
                <p className=" bg-red-700 ">
                  Our solutions are built on a foundation of innovation,
                  reliability, and excellence, ensuring scalability, security,
                  and efficiency for every client. From streamlining processes
                  to creating groundbreaking applications, we are committed to
                  delivering top-tier, tailored solutions.
                  <p>
                    At BitxBase, we don’t just adopt technology we redefine it,
                    shaping a future where possibilities are limitless and
                    innovation knows no bounds.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:grid lg:grid md:grid-rows-[0.5fr_2fr] lg:grid-rows-[0.5fr_2fr] h-full w-full">
            <div className=" grid items-center h-[10vh] lg:min-h-full w-full bg-blue-600  ">
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
      </div> */}
      <div className=" min-h-[150vh] md:min-h-[80vh] lg:min-h-[vh] mc:min-h-[55vh] w-full bg-[#FAFAFA] grid items-center justify-items-center">
        <div className="  min-h-[140vh] md:min-h-[70vh] lg:min-h-[60vh] mc:min-h-[40vh] w-[90%] md:w-[80%] lg:w-[80%] grid grid-rows-[1.6fr_2fr] md:grid-rows-2 lg:grid-rows-none lg:grid lg:grid-cols-2 lg:gap-5  ">
          <div className=" h-full w-full grid grid-rows-[0.5fr_2fr] ">
            <div className="grid items-center ">
              <p className=" text-4xl font-semibold uppercase ">Who we are</p>
            </div>
            <div className=" grid lg:items-start items-center">
              <div className="  text-sm flex flex-col gap-3 pt-5 lg:gap-5 ">
                <p className=" leading-6 text-justify ">
                  {/* BitxBase Technology is a cutting-edge innovation hub, driving
                  advancements in tech solutions and digital transformation.
                  With expertise spanning software development, blockchain
                  technology, artificial intelligence, and cloud computing,
                  BitxBase empowers businesses and individuals to thrive in the
                  modern digital era. */}
                  BITXBASE CODING ACADEMY is the leading coding skills traininh
                  center in Nigeria. Whether you are looking for a new job,
                  shifting fields, or to advance in your present career, we can
                  help you learn in demand, fundamental, professional skills and
                  create a strong case for recruiter.
                  <p>
                    Give yourself the IT/Business skills development through our
                    platforms. BITXBASE CODING ACADEMY is a subsidiary of
                    BITXBASE TECHNOLOGY LTD. RC:1459510
                  </p>
                </p>
                {/* <p className=" leading-6 flex flex-col gap-3 lg:gap-5 ">
                  Our solutions are built on a foundation of innovation,
                  reliability, and excellence, ensuring scalability, security, 
                  and efficiency for every client. From streamlining processes
                  to creating groundbreaking applications, we are committed to
                  delivering top-tier, tailored solutions.
                  <p>
                    At BitxBase, we don’t just adopt technology we redefine it,
                    shaping a future where possibilities are limitless and
                    innovation knows no bounds.
                  </p>
                </p> */}
                <div className=" flex flex-col gap-2 ">
                  <p className=" text-md uppercase font-bold ">
                    {" "}
                    Our Mission
                  </p>
                  <p>
                    To provide quality, secure, cost-effective , high
                    performance software and in-demand coding skills training
                  </p>
                </div>
                <p className="flex flex-col gap-2">
                  <p className=" text-md uppercase font-bold  ">
                    {" "}
                    Our Core Value{" "}
                  </p>
                  Capacity Building, Integrity, Deligence and sacrifice define
                  our commitment to standard
                </p>
              </div>
            </div>
          </div>
          <div className=" h-full w-full grid grid-rows-[0.5fr_2fr]">
            <div className=" grid items-center ">
              <p className=" text-4xl font-semibold uppercase ">
                our core values
              </p>
            </div>
            <div className=" lg:grid-cols-2 md:grid-cols-2 grid grid-rows-2 lg:grid-rows-none md:grid-rows-none gap-2  ">
              <div className=" h-full w-full grid grid-rows-3 gap-2  ">
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
              <div className=" h-full w-full grid grid-rows-3 gap-2">
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
