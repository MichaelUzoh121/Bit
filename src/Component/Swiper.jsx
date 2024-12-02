import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import picSlide1 from '../image/coding6.jpg'
import picSlide2 from '../image/coding4.jpg'
import picSlide3 from '../image/robot.jpg'

// Import Swiper modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Buttoncomp from "./Buttoncomp";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";

const MySwiper = () => {
  const prevRef = useRef(null); // Reference for Prev Button
  const nextRef = useRef(null); // Reference for Next Button

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        

        effect={"creative"}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="h-[100vh] bg-cover bg-[#0000007b] bg-blend-darken pl-[20px] md:pl-20 lg:pl-[90px] flex items-center" style={{backgroundImage:`url(${picSlide1})`}}>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="relative z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Don’t Just Watch the {" "}
                <span className="block">Future Happen.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-2 text-sky-500 font-[cursive]">
                Be the One Who Builds It.
              </p>
              {/* <p className="text-lg md:text-xl text-white">
                Learn, Create, Dominate.
              </p> */}
              <Buttoncomp btnText="Get Started"/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[100vh] bg-cover bg-center  bg-[#0000007b] bg-blend-darken pl-[20px] md:pl-20 lg:pl-[90px] flex items-center" style={{backgroundImage:`url(${picSlide2})`}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="relative z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Launch your Career in {" "}
                <span className="block">Tech Today.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-2 text-sky-500 font-[cursive]">
                Learn to design, code, create, and innovate.
              </p>
              {/* <p className="text-lg md:text-xl text-white">
                Learn, Create, Dominate.
              </p> */}
              <Buttoncomp btnText="Get Started"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100vh] bg-cover bg-bottom bg-[#0000007b] bg-blend-darken pl-[20px] md:pl-20   lg:pl-[90px] flex items-center" style={{backgroundImage:`url(${picSlide3})`}}>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="relative z-20">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                From Beginner to Pro, {" "}
                <span className="block"> We’ve Got You Covered.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium mb-2 text-sky-500 font-[cursive]">
                Where machines meet minds to shape tomorrow.
              </p>
              {/* <p className="text-lg md:text-xl text-white">
                Learn, Create, Dominate.
              </p> */}
              <Buttoncomp btnText="Get Started"/>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Custom Navigation Buttons */}
      {/* <div className="holdbtn">
        <button
          ref={prevRef}
          className="swiper-button-prev bobo bg-sky-800 " 
        >
          <IoIosArrowBack/>
        </button>
        <button
          ref={nextRef}
          className="swiper-button-next"
        >
          <IoIosArrowForward />

        </button>
      </div> */}
    </div>
  );
};

export default MySwiper;
