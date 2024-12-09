import React, { useState } from "react";
import Menu from "./Menu";
import { Link, useLocation } from "react-router-dom";
import image from "../image/bitl.png";
import { FaBars } from "react-icons/fa";
import HamMenu from "./HamMenu";


function Header() {
  const { pathname } = useLocation();
  let [slide,setSlide] = useState("-100vw")
  let [headerPosition,setHeaderPosition] = useState('')

  const closeSlide =()=>{
    setSlide('-100vw')
  }

  const showSlide =()=>{
    setSlide("0")
  }

  window.onscroll =()=>{
    if (window.scrollY > 150) {
      setHeaderPosition('fixed bg-white')
    } else {
      setHeaderPosition('')
    }
  }

  return (
    <>
     <header
      className={` ${headerPosition} top-0 z-[100] min-h-[11vh] w-full  grid-cols-2 grid lg:grid-cols-[1fr_2fr] shadow-lg duration-300`}
    >
      <div className=" grid items-center lg:items-start justify-center">
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
              ? " rounded-[50px] h-[50px] w-[150px] text-white mt-2"
              : " text-white"
          }`}
        >
          <Link to="/register" className=" text-md font-medium uppercase ">
            Join Now
          </Link>
        </div>
      </div>
      <div className="lg:hidden grid items-center  justify-end pr-5 md:pr-20 ">
        <button className=" h-10  w-10 grid items-center justify-center shadow" onClick={showSlide}>
        <FaBars />
        </button>
      </div>
    </header>
    <HamMenu slide={slide} closeSlide={closeSlide}/>
    </>
   
  );
}

export default Header;
