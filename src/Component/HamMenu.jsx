import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/bitl.png'
import { BsX } from 'react-icons/bs'

function HamMenu({slide,closeSlide}) {
  return (
    <div className=' h-[100vh] top-0 flex duration-500 z-[1000] w-full fixed' style={{left:slide}}>
        <nav className=' grid grid-rows-[20%_80%] w-[90%] md:w-[50%] lg:w-[30%] h-full border-r-4 border-solid border-sky-900'>
            <div className=' bg-white grid place-items-center relative '>
                <img src={logo} className=' w-[150px]'/>
                <button className=' bg-sky-900 p-2 absolute top-2 right-2 rounded-full text-white text-[20px] font-extrabold' onClick={closeSlide}><BsX/></button>
            </div>
            <ol className=' flex flex-col gap-5 pt-[50px] bg-sky-300 p-3 '>
                <li className=' '>
                    <Link to='/' className=' pl-4' onClick={closeSlide}>
                        Home
                    </Link>
                    <hr className=" h-[1px] bg-custom-gradient w-[100%] mt-2 border-t-0 opacity-[.25] " />
                </li>
                <li>
                    <Link to='/about' className=' pl-4' onClick={closeSlide}>
                        About
                    </Link>
                    <hr className=" h-[1px] bg-custom-gradient w-[100%] mt-2 border-t-0 opacity-[.25]" />
                </li>
                <li>
                    <Link to='/courses' className=' pl-4' onClick={closeSlide}>
                        Courses
                    </Link>
                    <hr className=" h-[1px] bg-custom-gradient w-[100%] mt-2 border-t-0 opacity-[.25]" />
                </li>
                <li>
                    <Link to='/contact' className=' pl-4' onClick={closeSlide}>
                        Contact
                    </Link>
                    <hr className=" h-[1px] bg-custom-gradient w-[100%] mt-2 border-t-0 opacity-[.25]" />
                </li>
                <li>
                    <Link to="/register" className=" text-md font-medium rounded-md text-white bg-sky-900 inline-grid p-2 place-items-center mt-3 ml-3 w-[150px]">
                        Join Now
                    </Link>
                </li>
            </ol>
        </nav>
        <div className=' flex-1 bg-[#0009]' onClick={closeSlide}></div>
    </div>
   
  )
}

export default HamMenu