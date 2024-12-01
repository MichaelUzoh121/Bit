import React from "react";
import image from '../image/bitl.png'

function Register() {
  return (
    <div className=" min-h-[100vh] w-full grid items-center justify-items-center bg-[#E6F0FE]  ">
      <div className=" h-[80vh] w-[80%] bg-white grid grid-cols-2 overflow-y-scroll " style={{ scrollbarWidth: "none" }}>
        <div className=" bg-red-500 grid "></div>
        <div className=" grid items-center h-full w-full justify-items-center ">
          <div className=" grid mb-10 mt-10 h-[130vh] w-[90%]  grid-rows-[0.5fr_2.5fr] ">
           <div className="  grid items-center justify-center  ">
           <img src={image} alt="" className=" h-[17vh] w-[22vw] " />
           </div>
           <div className=" grid grid-rows-[0.4fr_3fr] ">
            <div className="  grid items-center ">
              <p className=" text-2xl uppercase font-bold ">Register your account</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
