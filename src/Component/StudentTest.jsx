import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl1 from "../image/girl1.png"
import girl2 from "../image/girl2.png"
import girl3 from "../image/girl3.png"
import man2 from "../image/man2.png"
import man3 from "../image/man3.png"


function Resizable() {
  const [display, setDisplay] = useState(true);
    const slidesData = [
        { id: 1, color: "gray", content: "Slide 1", name:"Favour", image: girl1, course:"UI/UX Designer" },
        { id: 2, color: "purple", content: "Slide 2", name:"John Doe", image:man2, course:"Front-End Web Developer" },
        { id: 3, color: "orange", content: "Slide 3", name:"David", image:girl2, course:"Software Developer" },
        { id: 4, color: "teal", content: "Slide 4",  name:"Romoke", image: girl3, course:"Data Analyst"},
        { id: 5, color: "yellow", content: "Slide 5", name:"Ebelechuckwu", image: man3, course:"Full-Stack Web Developer"},
    ];

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true,
            infinite: true
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true

          }
        }
      ]
  };
  return (
    <div className="slider-container slider-wrapper w-full max-w-full px-4 pb-6 flex justify-center ">

    <div className="slider-container w-[90vw] sm:w-[600px] lg:w-[1024px] ">
        <Slider {...settings}>
            {slidesData.map((slide) => (
                <div key={slide.id} className="px-2">
                    <div
                        className={`h-[300px] rounded-lg p-3 flex flex-col items-center `}
                    >
                       <section>
                        <div className=" p-1 border-2 border-solid rounded-full">
                            <img src={slide.image} className=" w-[100px]"/>
                        </div>
                       </section>
                       <section>
                        <h1 className=" text-center font-bold">{slide.name}</h1>
                        <p className=" text-center text-[0.8rem] font-[cursive]" >{slide.course}</p>
                       </section>
                       <section>
                        <p className=" text-center">Lorem cingum maxime natus quia, minus nemo, qui expedita, laboriosam odio nostruos nihil expedita animi quisquam, beatae cum eveniet pariatur debitis, dolorem fugiat?</p>
                       </section>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
      
    </div>
  );
}

export default Resizable;
