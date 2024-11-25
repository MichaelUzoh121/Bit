import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' min-h-[11vh] w-full bg-white grid grid-cols-[1fr_2fr] shadow-lg '>
        <div className=' grid items-center justify-center '>
            <p className='text-3xl text-blue-500 font-bold '>SITE</p>
        </div>
        <div className=' grid grid-cols-[2fr_0.7fr] '>
            <div className=' hidden lg:grid items-center justify-center '>
                <Menu/>
            </div>
            
            <div className=' grid items-center justify-center bg-sky-500  '>
            <Link to='/register'>
                <p className=' text-md font-medium text-white uppercase '>Join Now</p>
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header