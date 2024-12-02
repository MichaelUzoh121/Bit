import React, { useState } from "react";
import image from "../image/bitl.png";

function Auth() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className=" min-h-[100vh]  w-full grid items-center justify-items-center bg-sky-50">
      <div className=" h-[90vh] lg:h-[80vh] w-[90%] lg:w-[70%] bg-white lg:grid flex flex-col-reverse lg:grid-cols-2">

        {/* Left Section */}

        <div className="bg-sky-400 grid items-center justify-items-center h-[40vh] lg:h-full w-full">
          {isRegister ? (
            <div className=" w-[70%] md:w-[50%] lg:w-[50%] h-[80%] md:h-[50%] lg:h-[50%] flex-col flex gap-5 justify-center">
              <p className="text-3xl font-semibold">Already have an account?</p>
              <button
                onClick={() => setIsRegister(false)}
                className=" h-[7vh] w-full border-2 hover:bg-sky-600 hover:border hover:border-sky-600 transition-all duration-[0.5s]"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="w-[70%] md:w-[50%] lg:w-[50%] h-[80%] md:h-[50%] lg:h-[50%] flex-col flex gap-5 justify-center">
              <p className="text-3xl font-semibold">
                Don't have an account? 
              </p>
              <button
                onClick={() => setIsRegister(true)}
                className="h-[7vh] w-full border-2 hover:bg-sky-600 hover:border hover:border-sky-600 transition-all duration-[0.5s]"
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* Right Section */}

        <div className="grid items-center h-full w-full justify-items-center hide-scrollbar  overflow-y-scroll"  style={{ scrollbarWidth: "none" }}>
          {isRegister ? (
            <div className="grid mb-10 mt-10 h-[120vh] md:h-[130vh] lg:h-[150vh] w-[90%] grid-rows-[0.5fr_2.5fr]">
              <div className="grid items-center justify-center  ">
                <img src={image} alt="Logo" className=" md:h-[15vh] md:w-[100%] lg:h-[17vh] lg:w-[20vw]" />
              </div>
              <div className="grid grid-rows-[0.4fr_3fr]">
                <div className="grid items-center">
                  <p className="text-2xl uppercase font-bold">
                    Register your account
                  </p>
                </div>
                <div className="grid gap-4 grid-rows-8 text-sm">
                  <div className="flex flex-col gap-2">
                    <p>Firstname</p>
                    <input
                      type="text"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Lastname</p>
                    <input
                      type="text"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                      placeholder="Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Contact Email</p>
                    <input
                      type="email"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                      placeholder="username@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Contact Number</p>
                    <input
                      type="number"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                      placeholder="1234567890"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Username</p>
                    <input
                      type="text"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Password</p>
                    <input
                      type="password"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Confirm Password</p>
                    <input
                      type="password"
                      className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border"
                    />
                  </div>
                  <div className="grid items-center">
                    <button className="bg-sky-500 hover:bg-green-700 transition-all duration-[0.6s] rounded-md h-[7vh] w-full">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="  h-[60vh] w-[90%] mt-10 mb-10 grid grid-rows-[1fr_3fr] text-sm ">
              <div className=" grid items-center justify-center ">
              <img src={image} alt="Logo" className=" md:h-[13vh] md:w-full lg:h-[13vh] lg:w-[15vw]" />
              </div>
              <div className=" grid grid-rows-[0.5fr_2fr]  ">
              <div className="grid items-center ">
                   <p className="text-2xl uppercase font-bold">Login to your account</p>
                 </div>
                <div className=" grid grid-rows-3  ">
                <div className="flex flex-col gap-2 ">
                   <p>Email</p>
                   <input
                     type="email"
                     className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border p-3"
                     placeholder="username@example.com"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                     <p>Password</p>
                     <input
                       type="password"
                       className="h-[6vh] w-full focus:border-sky-300 focus:border-2 outline-none border"
                     />
                   </div>
                   <div className="grid items-center ">
                     <button className="bg-sky-500 hover:bg-green-700 transition-all duration-[0.6s] rounded-md h-[7vh] w-full">
                       Login
                     </button>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;

