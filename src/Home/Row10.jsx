import React from "react";
import image from "../image/soft1.png";
import image2 from "../image/soft2.jpg";
import image3 from "../image/soft3.png";
import image4 from "../image/soft4.png";
import image5 from "../image/soft5.jpg";
import image6 from "../image/soft6.jpeg";
import image7 from "../image/soft7.png";
import { Link } from "react-router-dom";

function Row10() {
  return (
    <div className=" w-full grid bg-[#FAFAFA]  ">
      <div className=" grid items-center justify-center min-h-[20vh] ">
        <p className=" text-3xl text-sky-900 uppercase font-poppins font-semibold ">
          Premium Software
        </p>
        {/* <h2 className=' text-center font-semibold text-sky-900 before:h-[5px] before:w-[500px] before:top-7 before:bg-sky-900 before:absolute before:ml-[-40px] after:h-[2px] after:w-[250px] after:top-9 after:bg-sky-900 after:absolute after:ml-[-190px]'>
        <span className='  leading-8 relative px-3 py-3 z-10 uppercase text-3xl'>Premium Software</span>
      </h2> */}
      </div>
      <div className=" grid items-center justify-items-center min-h-[230vh] md:min-h-[120vh] lg:min-h-[120vh] w-full ">
        <div className=" min-h-[220vh] md:min-h-[110vh] lg:min-h-[110vh] w-[85%] md:w-[90%] lg:w-[90%]  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  E-commerce
                </p>
                <p className=" text-sm ">
                  We are specialist in e-commerce website/ App develeopment ,
                  100% custom and secure system
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Corporate Website / Mobile App
                </p>
                <p className=" text-sm ">
                  Contact today for your Corporate site.
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Warehouse Management System
                </p>
                <p className=" text-sm ">
                  Stocks, Payments, Debtors tracking and supplier issues are
                  your probelems. We have a
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image4})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Property Management System
                </p>
                <p className=" text-sm ">
                  We are specialist in e-commerce website/ App develeopment ,
                  100% custom and secure system
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Business Management System
                </p>
                <p className=" text-sm ">
                  Are you looking for a software that take care of your
                  Business? Our Business suite take care of your
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image5})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Office Automation
                </p>
                <p className=" text-sm ">
                  Automate your office today with our intuite software and make
                  your office stress free.
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image6})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Online Product Catalogue
                </p>
                <p className=" text-sm ">
                  Lugging around catalogues for every conference or trade show
                  can get tiresome for even the mo
                </p>
              </div>
            </div>
          </div>
          <div className=" border grid grid-rows-2 rounded-lg hover:shadow-md transition-all duration-[0.5s] ">
            <div className="grid p-2 ">
              <div
                className=" bg-cover bg-center rounded-ss-lg  rounded-se-lg "
                style={{ backgroundImage: `url(${image7})` }}
              ></div>
            </div>
            <div className=" grid items-center ">
              <div className=" flex flex-col gap-5 p-2  ">
                <p className=" text-center uppercase font-bold text-sky-500 ">
                  Multi-Level Marketing(MLM)
                </p>
                <p className=" text-sm ">
                  Leading MLM SOFTWARE DEVELOPMENT COMPANY. We specialize in
                  designing complicated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Row10;
