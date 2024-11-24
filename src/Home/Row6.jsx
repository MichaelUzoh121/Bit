import React from "react";
import image from '../image/job.png'

function Row6() {
  return (
    <div className=" min-h-[150vh] md:min-h-[130vh] lg:min-h-[90vh] bg-sky-50 w-full grid items-center justify-items-center ">
      <div className=" min-h-[130vh] md:min-h-[110vh] lg:min-h-[60vh] w-[90%] grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 ">
        <div className=" grid items-center   ">
        <div className=" flex flex-col gap-5  ">
          <p className=" text-md  font-bold text-sky-700 uppercase ">
            Achieving Goals
          </p>
          <p className=" text-3xl font-medium text-sky-900 ">
            Where Our Students Shine
          </p>
          <p className=" flex flex-col gap-5 ">
            <p>Success doesn’t end with training it begins there. Our students go
            on to excel in leading tech companies, startups, and industries
            worldwide. With a strong foundation in cutting-edge skills, hands-on
            experience, and mentorship, they are prepared to tackle real-world
            challenges and make meaningful contributions. </p>
            <p>
            We take pride in
            seeing our graduates thrive in diverse roles, from software
            engineers and AI specialists to full-stack developers and tech
            entrepreneurs. Their achievements reflect the quality of education
            and support they receive at our institution, proving that the
            possibilities are limitless when preparation meets opportunity.
            </p>
          </p>
        </div>
        </div>
        <div className=" grid lg:p-5  ">
            <div className=" bg-cover bg-no-repeat bg-top-center " style={{backgroundImage:`url(${image})`}}></div>
        </div>
      </div>
    </div>
  );
}

export default Row6;
