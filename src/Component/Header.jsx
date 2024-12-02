import React from "react";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import image from "../image/bitl.png";
import { FaBars } from "react-icons/fa";


function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={` min-h-[11vh] w-full ${
        pathname === "/courses" ? "bg-black text-white" : "bg-white "
      } grid-cols-2 grid lg:grid-cols-[1fr_2fr] shadow-lg `}
    >
      <div className=" grid items-center lg:items-start justify-center  ">
        {/* <p className='text-3xl text-blue-500 font-bold '>SITE</p> */}
        <Link to='/'>
        <img
          src={image}
          alt=""
          className=" h-[9vh] w-[100%] lg:h-[11vh] lg:w-[100%] "
        />
        </Link>
      </div>
      <div className=" hidden lg:grid lg:grid-cols-[2fr_0.7fr] ">
        <div className=" hidden lg:grid items-center justify-center ">
          <Menu />
        </div>

        <div
          className={` hidden lg:grid items-center justify-center duration-500 bg-sky-500 ${
            pathname === "/courses"
              ? " rounded-[50px] h-[50px] w-[150px] text-black mt-2"
              : " text-white"
          }`}
        >
          <Link to="/register" className=" text-md font-medium uppercase ">
            Join Now
          </Link>
        </div>
      </div>
      <div className="lg:hidden grid items-center  justify-end pr-5 md:pr-20 ">
        <button className=" h-10  w-10 grid items-center justify-center shadow">
        <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;
