import React from "react";
import image from "../image/contact2.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
// import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="  w-full grid ">
      <div className="   grid ">
        <div className=" grid items-center justify-items-center bg-white min-h-[30vh] md:min-h-[20vh] mc:min-h-[20vh] lg:min-h-[30vh]">
          <div className=" min-h-[10vh] w-[90%] lg:w-[40%] md:w-[70%]  md:min-h-[15vh] lg:min-h-[20vh] mc:min-h-[15vh]  grid grid-rows-[1.5fr_2fr] ">
            {/* <div className=" grid grid-cols-[0.2fr_1fr_1fr_1fr_0.2fr]">
              <div></div>
              <div className=" flex flex-col items-end justify-end gap-2 pr-3 ">
                <div className=" h-1 w-10 bg-sky-500 "></div>
                <div className=" h-1 w-20 bg-sky-500 "></div>
              </div>
              <div className=" grid items-end justify-center ">
                <p className=" text-sky-500 uppercase font-medium text-md md:text-2xl  lg:text-2xl ">
                  Contact us
                </p>
              </div>
              <div className="  flex flex-col items-start pl-3 justify-end gap-2 ">
                <div className=" h-1 w-10 bg-sky-500 "></div>
                <div className=" h-1 w-20 bg-sky-500 "></div>
              </div>
            </div> */}
            <h2 className=" text-center mt-4 px-4 relative font-semibold text-sky-900 before:h-[2px] before:w-[180px] before:top-2 before:bg-sky-900 before:absolute before:ml-[-30px] after:h-[2px] after:w-[250px] after:top-4 after:bg-sky-900 after:absolute after:ml-[-180px]">
              <span className=" px-3 bg-white relative pb-3 z-10 uppercase">
                Contact us
              </span>
            </h2>
            <div className=" grid items-center justify-center  ">
              <p className=" text-4xl font-bold text-center ">
                We are here to Help You
              </p>
            </div>
          </div>
        </div>
        <div className="  grid   gap-5 bg-white">
          <div className=" min-h-[110vh] md:min-h-[70vh] lg:min-h-[60vh] grid justify-items-center items-center">
            <div className=" min-h-[100vh] w-[80%] lg:w-[90%] md:w-[90%] md:min-h-[60vh] lg:min-h-[50vh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className=" grid grid-rows-[0.7fr_2fr] ">
                <div className="  grid items-center justify-items-center  relative">
                  <div className=" h-20 w-20 rounded-full bg-sky-500 relative grid items-center justify-center text-4xl text-white lg:top-[40%] top-[40%] ">
                    <MdOutlineEmail />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center ">
                  <p className="text-2xl font-bold">Email Here</p>
                  <p>
                    <a href="mailto:codingacad@gmail.com">codingacad@gmail.com</a>
                  </p>
                  <p>
                    <a href="mailto:info@bitxbase.com">info@bitxbase.com</a>
                  </p>
                </div>
              </div>
              <div className=" grid grid-rows-[0.7fr_2fr] ">
                <div className="  grid items-center justify-center relative ">
                  <div className=" h-20 w-20 rounded-full grid items-center  relative justify-center text-4xl text-white bg-sky-500  lg:top-[40%] top-[45%]  ">
                    <MdOutlineLocationOn />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center pt-5 ">
                  <p className="text-2xl font-bold">Location Here</p>
                  <div className=" flex   ">
                    <div className=" grid ">
                      <p className=" text-sm text-center px-5 ">
                        Shop 10, 1st Floor, PETRO-CAM Plaza, PETRO-CAM Filling Station,
                        Abule-Ado B/Stop, Satellite Town, Lagos, Nigeria
                      </p>
                    </div>
                    <div className="  grid ">
                      <p className=" text-sm px-5 ">
                        148 Olojo Drive, High Taste B/Stop FCMB Building, Ojo,
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-rows-[0.7fr_2fr]  ">
                <div className="  grid items-center justify-center relative">
                  <div className=" h-20 w-20 rounded-full grid items-center justify-center text-4xl text-white bg-sky-500 relative lg:top-[40%] top-[50%]  ">
                    {/* <MdOutlinePhone /> */}
                    <FaWhatsapp />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center ">
                  <p className="text-2xl font-bold">Call / Chat  Here</p>
                  <p>
                    <a href="tel:+2347086522451">07086522451</a>
                  </p>
                  <p>
                    <a href="tel:+2348112551244">08112551244</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* contact form  */}
          <div className=" min-h-[160vh] lg:min-h-[90vh] bg-[#FAFAFA] grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 ">
            <div className="  grid justify-items-center lg:justify-items-end items-center ">
              <div
                className=" w-[100%] md:w-[70%]  lg:w-[70%] h-[90%] bg-no-repeat bg-cover  "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="  grid items-center justify-items-center ">
              <div className=" min-h-[70vh] lg:min-h-[75vh] w-[90%] lg:w-[80%] bg-white shadow-lg rounded-md grid items-center justify-items-center ">
                <div className=" min-h-[65vh] w-[90%] grid grid-rows-[1fr_2fr_1.7fr_0.8fr] gap-2 ">
                  <div className=" grid items-center ">
                    <p className=" text-3xl font-semibold text-sky-500 ">
                      Get In Touch
                    </p>
                  </div>
                  <div className="  grid grid-cols-2 gap-2 ">
                    <div className=" flex flex-col gap-2 ">
                      <p> Your Name</p>
                      <input
                        type="text"
                        className=" h-9 border p-2 text-sm  rounded-md outline-none "
                        placeholder="Your name here"
                      />
                    </div>

                    <div className=" flex flex-col gap-2 ">
                      <p> Your Email</p>
                      <input
                        type="email"
                        className=" h-9 border  p-2 text-sm   rounded-md outline-none "
                        placeholder="Your email here"
                      />
                    </div>

                    <div className=" flex flex-col gap-2 ">
                      <p> Your Subject</p>
                      <input
                        type="text"
                        className=" h-9 border p-2 text-sm  rounded-md outline-none "
                        placeholder="Your subject here"
                      />
                    </div>
                    <div className=" flex flex-col gap-2 ">
                      <p> Your Contact</p>
                      <input
                        type="text"
                        className=" h-9 border p-2 text-sm  rounded-md outline-none "
                        placeholder="Your contact here"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col gap-2 ">
                    <p>Your message</p>
                    <textarea
                      className=" border h-[13vh] w-[100%] p-2 outline-none "
                      placeholder="Your message here"
                    ></textarea>
                  </div>
                  <div className="  grid items-center ">
                    <button className=" h-[7vh] w-[40%] bg-sky-500 rounded-md hover:bg-green-700 transition-all duration-[0.6s] ">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-[100vh] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648042153!2d3.1191424844149247!3d6.548028243280463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1732223811258!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
