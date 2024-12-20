import React from "react";
// import image from "../image/face.png";
import image from '../image/man3.png'
import image2 from '../image/man2.png'
import image3 from '../image/girl1.png'
import image4 from '../image/girl2.png'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Row2() {
  return (
    <div className=" grid w-full ">
      <div className=" min-h-[15vh] lg:min-h-[20vh] grid items-center justify-center  ">
        <p className=" text-4xl font-semibold ">MEET OUR TEAM</p>
      </div>
      <div className=" min-h-[270vh] md:min-h-[150vh] lg:min-h-[150vh] w-full grid items-center justify-items-center ">
        <div className=" min-h-[260vh] md:min-h-[140vh] lg:min-h-[140vh] w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          
        <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          
          <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image4})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          
          <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          
          <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          

          <div className=" grid grid-rows-[1.2fr_1fr] border rounded-lg hover:shadow-lg transition-all duration-[0.6s] ">
            <div className=" grid justify-items-center ">
              <div
                className=" min-h-[10vh] w-[60%] bg-cover bg-no-repeat bg-top-center "
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
            </div>
            <div className=" grid grid-rows-[2fr_0.6fr] ">
              <div className="grid items-center justify-items-center ">
                <div className=" flex flex-col gap-3 ">
                  <p className=" text-2xl ">Instructor Name</p>
                  <p className=" text-md text-center ">Designator Role</p>
                </div>
              </div>
              <div className=" grid grid-cols-[0.5fr_1.2fr_0.5fr] ">
                <div></div>
                <div className=" grid grid-cols-4 ">
                  <div className=" grid items-center justify-center ">
                    <FaFacebookF />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaInstagram />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaXTwitter />
                  </div>
                  <div className=" grid items-center justify-center ">
                    <FaLinkedin />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Row2;
