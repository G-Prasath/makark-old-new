import React from "react";
import Heading from "../Common/Heading/Heading";
import { HomeBlogData } from "../../data/HomeData";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Blog = () => {
  return (
    <>
      {/* Header of section */}
      <div className="text-center mt-16 mb-5">
        <Heading title="Blog" secTitle="Latest News" />
      </div>
      <section
        className="bg-gray-100 py-24 md:p-20 p-5  bg-cover bg-center bg-no-repeat bg-fixed"
        data-scroll-index="4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/Home/Blog-bg.avif')",
        }}
      >
        <div className="container mx-auto">
          {/* Blog items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HomeBlogData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-down"
                data-aos-duration={`${
                  index == 0 ? "1000" : index == 1 ? "1500" : "2000"
                }`}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
              >
                <div className="relative overflow-hidden">
                  <LazyLoadImage
                    className="w-full h-48 object-cover group-hover:rotate-[-2deg] group-hover:scale-110 transition-transform duration-500"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="md:p-8 p-3 relative">
                  <div className="absolute top-[-35px] left-1/2 transform -translate-x-1/2 w-16 h-16 mt-[3px] bg-[#d29f6a] text-white text-center flex items-center justify-center rotate-45">
                    <span className="block transform -rotate-45 text-sm font-semibold">
                      {item.date}
                    </span>
                  </div>

                  <Link to="#">
                    <h5 className="text-xl font-semibold mt-6 group-hover:text-[#d29f6a] transition-colors">
                      {item.title}
                    </h5>
                  </Link>
                  <p className="mt-4 text-gray-600 text-justify">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-[#305764]">
                      <i className="fas fa-user mr-2"></i>Author
                    </p>
                    <Link
                      to="#0"
                      className="bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center text-[#d29f6a] transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
