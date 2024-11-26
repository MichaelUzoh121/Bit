import React, { useState } from "react";
import { FaCalendarAlt, FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";

const CourseCard = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const courseDetails = {
    courseImage: "../image/box.webp",
    courseName: "Front-End Development (Specialised)",
    courseDuration: "3 Months",
    courseHint:
      "Start off your career today as a Front-End Web Developer. Learn to build high-quality websites with dynamic applications to create stunning user experiences…",
    courseContent: [
      "HTML5",
      "CSS/CSS3/Tailwind/PureCSS",
      "Corel Draw (Basics)",
      "Photoshop (Basics)",
      "User Experience/Wireframe/ Figma Basics",
      "Javascript",
      "Typescript",
      "ReactJs",
      "Git & Github",
      "Final project",
    ],
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={courseDetails.courseImage}
        alt={courseDetails.courseName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{courseDetails.courseName}</h2>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <FaCalendarAlt />
          <span className="text-sm">{courseDetails.courseDuration}</span>
        </div>
        <p className="mt-4 text-sm text-gray-600">{courseDetails.courseHint}</p>

        <div className="mt-4 bg-red-700 h-[50px]">
          <button
            onClick={toggleAccordion}
            className="w-full flex items-center justify-between bg-gray-100 py-2 px-4 rounded-md text-gray-800 hover:bg-gray-200 transition-all"
          >
            <span className="font-semibold">Course Content</span>
            {isAccordionOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isAccordionOpen && (
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-600">
              {courseDetails.courseContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          )}
        </div>

        <button className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
          Learn More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
