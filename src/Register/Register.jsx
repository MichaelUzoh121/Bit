// import React from "react";
// import image from "../image/bitl.png";
// import { Link } from "react-router-dom";

// function Register() {
//   return (
//     <div className=" min-h-[100vh] w-full grid items-center justify-items-center bg-sky-50  ">
//       <div
//         className=" h-[80vh] w-[70%] bg-white grid grid-cols-2  "
//         style={{ scrollbarWidth: "none" }}
//       >
//         <div className=" bg-sky-400 grid items-center justify-items-center ">
//           <div className=" w-[50%] h-[50%] flex-col flex gap-5 justify-center ">
//             <p className=" text-3xl font-semibold ">Already have an account?</p>
//             <div className=" ">
//               <button className=" h-[7vh] w-full border-2 hover:bg-sky-600 hover:border hover:border-sky-600  transition-all duration-[0.5s] ">
//                <Link to='/login'>
//                Login
//                </Link>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           className=" grid items-center h-full w-full justify-items-center overflow-y-scroll "
//           style={{ scrollbarWidth: "none" }}
//         >
//           <div className=" grid mb-10 mt-10 h-[150vh] w-[90%]  grid-rows-[0.5fr_2.5fr] ">
//             <div className="  grid items-center justify-center  ">
//               <img src={image} alt="" className=" h-[17vh] w-[20vw] " />
//             </div>
//             <div className=" grid grid-rows-[0.4fr_3fr] ">
//               <div className="  grid items-center ">
//                 <p className=" text-2xl uppercase font-bold ">
//                   Register your account
//                 </p>
//               </div>
//               <div className=" grid gap-4 grid-rows-8 text-sm ">
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Firstname</p>
//                   <input
//                     type="text"
//                     className=" h-[6vh] w-full border p-3 "
//                     placeholder="John"
//                   />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Lastname</p>
//                   <input
//                     type="text"
//                     className=" h-[6vh] w-full border p-3 "
//                     placeholder="Smith"
//                   />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Contact Email</p>
//                   <input
//                     type="email"
//                     className=" h-[6vh] w-full border p-3  "
//                     placeholder="username@example.com"
//                   />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Contact Number</p>
//                   <input
//                     type="number"
//                     className=" h-[6vh] w-full border p-3  "
//                     placeholder="1234567890"
//                   />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Username</p>
//                   <input
//                     type="text"
//                     className=" h-[6vh] w-full border p-3  "
//                     placeholder=" John Smith "
//                   />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Password</p>
//                   <input type="password" className=" h-[6vh] w-full border  " />
//                 </div>
//                 <div className="  flex flex-col gap-2 ">
//                   <p>Confirm Password</p>
//                   <input type="password" className=" h-[6vh] w-full border  " />
//                 </div>

//                 <div className=" grid items-center ">
//                   <button className=" bg-sky-500 hover:bg-green-700 transition-all duration-[0.6s]   rounded-md h-[7vh] w-full ">
//                     Create Account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from "react";
import image from "../image/bitl.png";

function Auth() {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className="min-h-[100vh] w-full grid items-center justify-items-center bg-sky-50">
      <div className="h-[80vh] w-[70%] bg-white grid grid-cols-2">
        {/* Left Section */}
        <div className="bg-sky-400 grid items-center justify-items-center">
          {isRegister ? (
            <div className="w-[50%] h-[50%] flex-col flex gap-5 justify-center">
              <p className="text-3xl font-semibold">Already have an account?</p>
              <button
                onClick={() => setIsRegister(false)}
                className="h-[7vh] w-full border-2 hover:bg-sky-600 hover:border hover:border-sky-600 transition-all duration-[0.5s]"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="w-[50%] h-[50%] flex-col flex gap-5 justify-center">
              <p className="text-3xl font-semibold">
                Don't have an account? Register now!
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
        <div className="grid items-center h-full w-full justify-items-center overflow-y-scroll"  style={{ scrollbarWidth: "none" }}>
          {isRegister ? (
            <div className="grid mb-10 mt-10 h-[150vh] w-[90%] grid-rows-[0.5fr_2.5fr]">
              <div className="grid items-center justify-center">
                <img src={image} alt="Logo" className="h-[17vh] w-[20vw]" />
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
                      className="h-[6vh] w-full border p-3"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Lastname</p>
                    <input
                      type="text"
                      className="h-[6vh] w-full border p-3"
                      placeholder="Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Contact Email</p>
                    <input
                      type="email"
                      className="h-[6vh] w-full border p-3"
                      placeholder="username@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Contact Number</p>
                    <input
                      type="number"
                      className="h-[6vh] w-full border p-3"
                      placeholder="1234567890"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Username</p>
                    <input
                      type="text"
                      className="h-[6vh] w-full border p-3"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Password</p>
                    <input
                      type="password"
                      className="h-[6vh] w-full border"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Confirm Password</p>
                    <input
                      type="password"
                      className="h-[6vh] w-full border"
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
            // <div className=" grid h-[70vh] w-[90%] mt-10 mb-10 grid-rows-[1.5fr_2fr] bg-red-500 overflow-y-scroll  " style={{ scrollbarWidth: "none" }}>
            //   <div className="grid items-center justify-center bg-black">
            //     <img src={image} alt="Logo" className="h-[10vh] w-[20vw]" />
            //   </div>
            //   <div className="grid grid-rows-[1fr_2fr] bg-slate-500 h-full w-full ">
            //     <div className="grid items-center bg-purple-600">
            //       <p className="text-2xl uppercase font-bold">Login to your account</p>
            //     </div>
            //     <div className="grid grid-rows-3 h-full w-full ">
            //       <div className="flex flex-col gap-2 bg-teal-500">
            //         <p>Email</p>
            //         <input
            //           type="email"
            //           className="h-[7vh] w-full border p-3"
            //           placeholder="username@example.com"
            //         />
            //       </div>
            //       <div className="flex flex-col gap-2">
            //         <p>Password</p>
            //         <input
            //           type="password"
            //           className="h-[7vh] w-full border"
            //         />
            //       </div>
            //       <div className="grid items-center bg-red-700 ">
            //         <button className="bg-sky-500 hover:bg-green-700 transition-all duration-[0.6s] rounded-md h-[7vh] w-full">
            //           Login
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div className="  h-[60vh] w-[90%] mt-10 mb-10 grid grid-rows-[1fr_3fr] text-sm ">
              <div className=" grid items-center justify-center ">
              <img src={image} alt="Logo" className="h-[13vh] w-[15vw]" />
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
                     className="h-[6vh] w-full border p-3"
                     placeholder="username@example.com"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                     <p>Password</p>
                     <input
                       type="password"
                       className="h-[6vh] w-full border"
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

