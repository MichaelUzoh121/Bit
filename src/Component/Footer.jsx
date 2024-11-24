import React from "react";
import { FaGreaterThan, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className=" min-h-[100vh] md:min-h-[70vh] lg:min-h-[60vh] w-full bg-sky-950 flex items-center justify-center ">
      <div className=" min-h-[90vh] md:min-h-[60vh] lg:min-h-[50vh] w-[90%] gap-3 grid grid-rows-[2fr_0.2fr] md:grid-rows-[2fr_0.4fr]  lg:grid-rows-[2fr_0.4fr] ">
        <div className="  grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-8 ">
          
          <div className="  grid grid-rows-[0.5fr_2fr] ">
            <div className=" grid items-center ">
              <p className=" text-2xl font-medium text-white ">SITE</p>
            </div>
            <div className=" grid grid-rows-[2fr_1fr] ">
              <div className=" grid grid-rows-[1.2fr_1fr] gap-2 ">
                <div className=" grid items-end ">
                  <p className=" text-sm text-justify text-white ">
                    Shop 10, 1st Floor, PETRO-CAM Plaza Filling Station,
                    Abuleado B/Stop, Satellite Town, Lagos, Nigeria
                  </p>
                </div>
                <div className="  grid items-center border-t-2 border-dotted border-t-slate-600 ">
                  <p className=" text-sm text-white ">
                    148 Olojo Drive, High Taste B/Stop FCMB Building, Ojo,
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
              <div className=" grid grid-rows-[40%_60%] ">
                <div className=" grid items-center ">
                  <p className=" text-white text-sm ">
                    09015517032, 09015517032
                  </p>
                </div>
                <div className="  flex gap-3 items-end ">
                  <div className=" h-8 w-8 text-blue-500 rounded-full text-xl grid items-center justify-center ">
                  <FaFacebookF />
                  </div>
                  <div className=" h-8 w-8 text-rose-500 rounded-full text-xl grid items-center justify-center ">
                  <FaInstagram />
                  </div>
                  <div className=" h-8 w-8 text-white rounded-full text-xl grid items-center justify-center ">
                  <FaXTwitter />
                  </div>
                  <div className=" h-8 w-8  text-blue-500 rounded-full text-xl grid items-center justify-center ">
                  <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  grid grid-rows-[0.5fr_2fr] ">
            <div className=" grid items-center lg:pl-5 ">
              <p className=" text-2xl font-medium text-white ">Quick Link</p>
            </div>
            <div className="  flex flex-col lg:pl-5 justify-center md:gap-2 lg:gap-5 text-white text-sm  ">
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">About Us</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer  ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Contact Us</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer  ">
                <div className=" text-[12px]  ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Privacy Policy</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer  ">
                <div className=" text-[12px]  ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Terms & Condition</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer  ">
                <div className=" text-[12px]  ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">FAQs & Help</p>
              </div>
            </div>
          </div>

          <div className="  grid grid-rows-[0.5fr_2fr] ">
            <div className=" grid items-center ">
              <p className=" text-2xl font-medium text-white ">
                Popular Courses
              </p>
            </div>
            <div className="  flex flex-col  justify-center md:gap-3 lg:gap-5 text-white text-sm  ">
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Full Stack Developemnt</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Artificial Intelligence (AI) </p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Software Development</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Digital Marketing</p>
              </div>
              <div className=" flex items-center gap-3 hover:tracking-widest transition-all duration-[0.5s] cursor-pointer ">
                <div className=" text-[12px] ">
                  <FaGreaterThan />
                </div>
                <p className=" text-md ">Graphics Desgining</p>
              </div>
            </div>
          </div>

          <div className="  grid grid-rows-[0.5fr_2fr] ">
            <div className=" grid items-center ">
              <p className=" text-2xl font-medium text-white ">Newsletter</p>
            </div>
            <div className=" flex flex-col gap-3 ">
              <p className=" text-white ">
                It's an ideal opportunity to begin investing your energy such
                that illuminates you.
              </p>
              <div className=" min-h-[6vh] md:min-h-[5vh] lg:min-h-[8vh] bg-white rounded-lg w-full grid grid-cols-[1.8fr_1fr] ">
                <div className=" grid items-center justify-items-center  ">
                  <input
                    type="email"
                    className=" w-[90%] h-[80%] outline-none text-sm "
                    placeholder="your email address"
                  />
                </div>
                <div className="  grid ">
                  <button className=" bg-sky-500 rounded-se-lg rounded-ee-lg  ">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid items-center md:items-end lg:items-end justify-center border-t border-slate-600 ">
          <p className=" capitalize text-white ">
            &copy; 2024 Bitxbase Technology, All right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
