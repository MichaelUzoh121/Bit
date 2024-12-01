import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the public folder
    fetch("./Courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const changePage = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" ">
      <div className=" bg-black text-white  min-h-[60vh] grid grid-rows-[2fr_1fr] ">
        <div className=" flex flex-col justify-center pl-5 ">
          <h1 className=" text-3xl md:text-4xl lg:text-7xl font-poppings font-semibold">
            Step Into the Future of Tech
          </h1>
          <p className="mt-4 text-lg font-poppings  ">
            Explore courses designed to give you in-demand skills for today and
            tomorrow.
          </p>
        </div>
        <div className=" grid  items-center ">
          <div className=" h-[70px] bg-sky-950 w-[95%] rounded-r-xl  font-semibold flex items-center pl-5 ">
            <FaHome className="inline" />
            <span>
              <Link to="/" className=" ml-2 hover:text-sky-500 duration-500">
                HOME
              </Link>
              / COURSES
            </span>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-center ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%]">
          {courses.length > 0 ? (
            currentCourses.map((course) => <CourseCard courses={course} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 mb-6 ">
        <div className=" flex gap-10 items-center">
          <button
            onClick={() => changePage("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <p className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => changePage("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Courses;
