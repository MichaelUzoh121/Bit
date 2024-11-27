import React from "react";

function Register() {
  return (
    <div className=" min-h-[100vh] w-full grid items-center justify-items-center ">
     
      <div className=" min-h-[80vh] w-[80%] bg-yellow-400 grid grid-cols-2 ">
        <div className=" bg-red-500 grid "></div>
        <div className=" grid items-center h-full w-full justify-items-center static ">
          <div
            className=" grid min-h-full w-[90%] bg-slate-800   lg:rounded-xl overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

