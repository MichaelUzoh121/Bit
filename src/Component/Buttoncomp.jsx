import React from 'react'
import { Link } from 'react-router-dom'

function Buttoncomp({btnText}) {
  return (
    <button className=' p-2 rounded-md bg-sky-500 w-[150px] font-semibold mt-3'>
        <Link to="/register">{btnText}</Link>
    </button>
  )
}

export default Buttoncomp