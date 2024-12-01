import React from 'react'
import Menu from './Menu'
import { Link, useLocation } from 'react-router-dom'
import image from '../image/bitl.png'


function Header() {
  const { pathname } = useLocation();

  return (
    <header className={` min-h-[11vh] w-full ${pathname === "/courses"? "bg-black text-white" : "bg-white " }  grid grid-cols-[1fr_2fr] shadow-lg `}>
        <div className=' grid items-start justify-center  '>
            {/* <p className='text-3xl text-blue-500 font-bold '>SITE</p> */}
            <img src={image} alt="" className=' h-[11vh] w-[13vw] ' />
        </div>
        <div className=' grid grid-cols-[2fr_0.7fr] '>
            <div className=' hidden lg:grid items-center justify-center '>
                <Menu/>
            </div>
            
            <div className={` grid items-center justify-center duration-500 bg-sky-500 ${pathname === "/courses"? " rounded-[50px] h-[50px] w-[150px] text-black mt-2" : " text-white"}`}>
            <Link to='/register' className=' text-md font-medium uppercase '>
                Join Now
            </Link>
            </div>
            
        </div>
    </header>
  )
}

export default Header