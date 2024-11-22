import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='  '>
        <ol className=' flex gap-12 uppercase font-medium '>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/courses'>
                    Courses
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
        </ol>
    </div>
  )
}

export default Menu