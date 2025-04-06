import React, { useEffect, useState } from "react";
import { EnvironmentData } from "../../data/AboutData";
import Heading from "../Common/Heading/Heading";
const EnvironmentSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setBlogs(EnvironmentData);
  }, []);

  return (
    <div className="sm:mt-20 mt-10 sm:mb-10 mb-5">
      <Heading title={"Building a Sustainable Future"} secTitle={`Life`} />
      <div
        className="flex flex-wrap justify-center"
        data-aos="zoom-out-fade"
        data-aos-duration="1000"
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg text-center m-4"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.bgImage})` }}
            ></div>

            <div className="absolute inset-0 bg-[${blog.colorOverlay}] transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

            <div className="title-content absolute top-0 left-0 w-full z-20 mt-16">
              <h3 className="text-2xl font-medium tracking-wider text-white">
                {blog.title}
              </h3>
              <hr className="w-12 h-1 mx-auto my-4 bg-[#e59350]" />
              <div className="intro mx-auto text-gray-300 text-sm italic">
                {blog.intro}
              </div>
            </div>

            <div className="card-info absolute bottom-24 left-0 w-full px-12 text-gray-300 transition-all duration-300 opacity-0">
              <p className="text-base leading-6">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentSection;
