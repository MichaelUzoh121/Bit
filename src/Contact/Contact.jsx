import React from "react";
import image from "../image/contact.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

function Contact() {
  return (
    <div className=" md:h-[300vh] lg:min-h-[270vh] w-full grid grid-rows-[2fr_1fr] ">
      <div className="  grid md:grid-rows-[0.2fr_2fr] lg:grid-rows-[0.6fr_2fr]">
        <div className=" grid items-center justify-items-center ">
          <div className=" min-h-[30vh] lg:w-[40%] md:w-[70%] md:min-h-[50vh] lg:min-h-[30vh]  grid grid-rows-[1.5fr_2fr] ">
            <div className=" grid grid-cols-[0.2fr_1fr_1fr_1fr_0.2fr]">
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
            </div>
            <div className=" grid items-center justify-center ">
              <p className=" text-4xl font-bold text-center ">
                We are here to Help You
              </p>
            </div>
          </div>
        </div>
        <div className="  grid grid-rows-[1.3fr_2fr] gap-5 ">
          <div className=" grid justify-items-center items-center ">
            <div className=" lg:w-[90%] md:w-[60%] lg:h-[90%]  grid grid-cols-1 lg:grid-cols-3 gap-3 ">
              <div className=" grid grid-rows-[0.7fr_2fr] ">
                <div className="  grid items-center justify-center ">
                  <div className=" h-20 w-20 rounded-full bg-sky-500 absolute grid items-center justify-center text-4xl text-white lg:top-[65%] top-[62%] left-[16.5%] ">
                    <MdOutlineEmail />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center ">
                  <p className="text-2xl font-bold">Email Here</p>
                  <p>example@cloud.com</p>
                  <p>info@domain.com</p>
                </div>
              </div>
              <div className=" grid grid-rows-[0.7fr_2fr] ">
                <div className="  grid items-center justify-center ">
                  <div className=" h-20 w-20 rounded-full grid items-center justify-center text-4xl text-white bg-sky-500 absolute lg:top-[65%] top-[62%] left-[47%] ">
                    <MdOutlineLocationOn />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center ">
                  <p className="text-2xl font-bold">Location Here</p>
                  <div className=" flex   ">
                    <div className=" grid items-center ">
                      <p className=" text-sm text-justify px-5 ">
                        Shop 10, 1st Floor, PETRO-CAM Plaza Filling Station,
                        Abuleado B/Stop, Satellite Town, Lagos, Nigeria
                      </p>
                    </div>
                    <div className="  grid items-center  ">
                      <p className=" text-sm px-5 pt-3  ">
                        148 Olojo Drive, High Taste B/Stop FCMB Building, Ojo,
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-rows-[0.7fr_2fr]  ">
                <div className="  grid items-center justify-center ">
                  <div className=" h-20 w-20 rounded-full grid items-center justify-center text-4xl text-white bg-sky-500 absolute lg:top-[65%] top-[62%] left-[77.5%] ">
                    <MdOutlinePhone />
                  </div>
                </div>
                <div className=" bg-[#F0F9FA] rounded-md shadow-md flex gap-2 flex-col items-center justify-center ">
                  <p className="text-2xl font-bold">Call Here</p>
                  <p>09015517032</p>
                  <p>09015517032</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#FAFAFA] grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 ">
            <div className=" grid justify-items-center lg:justify-items-end items-center ">
              <div
                className=" w-[100%] md:w-[70%]  lg:w-[70%] h-[90%] bg-no-repeat bg-cover  "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className="  grid items-center justify-items-center ">
              <div className=" min-h-[75vh] w-[80%] bg-white shadow-lg rounded-md grid items-center justify-items-center ">
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
      <div>
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
