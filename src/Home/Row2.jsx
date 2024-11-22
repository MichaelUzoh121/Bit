import React from 'react'

function Row2() {
  return (
    <div className=' min-h-[90vh] w-full grid items-center justify-items-center bg-sky-400'>
        <div className=' bg-fuchsia-500 min-h-[70vh] w-[90%] grid grid-rows-[1fr_2fr] gap-5 '>
            <div className='  grid items-center justify-center '>
                <p className=' text-5xl uppercase font-bold '>Why Choose Us?</p>
            </div>
            <div className=' grid grid-cols-4 gap-5 transition-all duration-[1s] '>
                <div className=' bg-[#D8E1E2] rounded-xl z-50 hover:translate-y-[-20px] duration-500 grid items-center justify-items-center '>
                    <div className=' min-h-[45vh] w-[80%] grid grid-rows-[1fr_2fr] '>
                        <div className='  '></div>
                        <div className=' flex flex-col items-center justify-center gap-5 '>
                            <p className=' text-xl font-semibold '>Skilled Instructors</p>
                            <p className=' text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo itaque laboriosam.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#D8E1E2] rounded-xl relative hover:bottom-[5%] transition-all duration-[1s] grid items-center justify-items-center '>
                    <div className=' min-h-[45vh] w-[80%] grid grid-rows-[1fr_2fr] '>
                        <div className='  '></div>
                        <div className=' flex flex-col items-center justify-center gap-5 '>
                            <p className=' text-xl font-semibold '>Skilled Instructors</p>
                            <p className=' text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo itaque laboriosam.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#D8E1E2] rounded-xl relative hover:bottom-[5%] transition-all duration-[1s] grid items-center justify-items-center '>
                    <div className=' min-h-[45vh] w-[80%] grid grid-rows-[1fr_2fr] '>
                        <div className='  '></div>
                        <div className=' flex flex-col items-center justify-center gap-5 '>
                            <p className=' text-xl font-semibold '>Skilled Instructors</p>
                            <p className=' text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo itaque laboriosam.</p>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#D8E1E2] rounded-xl relative hover:bottom-[5%] transition-all duration-[1s] grid items-center justify-items-center '>
                    <div className=' min-h-[45vh] w-[80%] grid grid-rows-[1fr_2fr] '>
                        <div className='  '></div>
                        <div className=' flex flex-col items-center justify-center gap-5 '>
                            <p className=' text-xl font-semibold '>Skilled Instructors</p>
                            <p className=' text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo itaque laboriosam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Row2