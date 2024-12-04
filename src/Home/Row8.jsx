import React from 'react'
import StudentTest from '../Component/StudentTest'

function Row8() {
  return (
    <div className=' min-h-[50vh] w-full bg-sky-50 relative' >
      <h2 className=' text-center mt-4 font-semibold text-sky-900 before:h-[2px] before:w-[200px] before:top-7 before:bg-sky-900 before:absolute before:ml-[-40px] after:h-[2px] after:w-[250px] after:top-9 after:bg-sky-900 after:absolute after:ml-[-190px]'>
        <span className=' bg-sky-50 leading-8 relative px-3 py-3 z-10'>TESTIMONIAL</span>
      </h2>
      <h1 className=' text-center text-3xl font-bold my-4'>What Our Students Say!</h1>
      <StudentTest/>
    </div>
  )
}

export default Row8