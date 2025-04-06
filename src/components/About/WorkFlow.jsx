import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiPersonSimpleCircleFill } from "react-icons/pi";
import Heading from "../Common/Heading/Heading";
import { Link } from "react-router-dom";

function WorkFlow() {
  return (
    <div className="sm:mt-28 mt-20">
      <Heading title="Working For Us" secTitle="We own and operate" />

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          interval: 3000, // Interval for auto sliding
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: false,
          arrows: false, // Disable arrows
          pagination: false, // Optional: Disable pagination if needed
          gap: "2rem",
          breakpoints: {
            1024: {
              perPage: 1,
            },
            768: {
              perPage: 1,
            },
            640: {
              perPage: 1,
            },
          },
        }}
        aria-label="splide__arrow Choose Us Section"
      >
        <SplideSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-5 sm:p-20 sm:mt-10 mt-5">
            <div className="lg:w-1/2 w-full py-6 lg:mr-10 bg-white shadow-lg rounded-lg lg:absolute z-50">
              <h2 className="text-3xl font-bold mb-4 pl-5">Working for Us</h2>
              <p className="mb-4 pl-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Curabitur nec risus ac nisl pharetra elementum.
              </p>

              <h3 className="font-bold mb-2 pl-5">Opportunities Include:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-0 mb-6 bg-gray-50">
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <FaPersonCirclePlus className="text-white" />
                  </span>
                  Frontline Workers
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <IoPersonCircleSharp className="text-white" />
                  </span>
                  Management Professionals
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
              </div>

              <Link
                to="#"
                className="bg-red-500 text-white py-2 px-4 rounded-lg inline-block ml-5"
              >
                Explore Opportunities
              </Link>
            </div>
            <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:relative lg:left-[53%] bottom-20">
              <img
                src="/About/Working-us-1.webp"
                alt="Working at DHL"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-5 sm:p-20 sm:mt-10 mt-5">
            <div className="lg:w-1/2 w-full py-6 lg:mr-10 bg-white shadow-lg rounded-lg lg:absolute z-50">
              <h2 className="text-3xl font-bold mb-4 pl-5">Working for Us</h2>
              <p className="mb-4 pl-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Curabitur nec risus ac nisl pharetra elementum.
              </p>

              <h3 className="font-bold mb-2 pl-5">Opportunities Include:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-0 mb-6 bg-gray-50">
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <FaPersonCirclePlus className="text-white" />
                  </span>
                  Frontline Workers
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <IoPersonCircleSharp className="text-white" />
                  </span>
                  Management Professionals
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
              </div>

              <Link
                to="#"
                className="bg-red-500 text-white py-2 px-4 rounded-lg inline-block ml-5"
              >
                Explore Opportunities
              </Link>
            </div>
            <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:relative lg:left-[53%] bottom-20">
              <img
                src="/About/Working-us-2.webp"
                alt="Working at DHL"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-5 sm:p-20 sm:mt-10 mt-5">
            <div className="lg:w-1/2 w-full py-6 lg:mr-10 bg-white shadow-lg rounded-lg lg:absolute z-50">
              <h2 className="text-3xl font-bold mb-4 pl-5">Working for Us</h2>
              <p className="mb-4 pl-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Curabitur nec risus ac nisl pharetra elementum.
              </p>

              <h3 className="font-bold mb-2 pl-5">Opportunities Include:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-0 mb-6 bg-gray-50">
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <FaPersonCirclePlus className="text-white" />
                  </span>
                  Frontline Workers
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <IoPersonCircleSharp className="text-white" />
                  </span>
                  Management Professionals
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#305764] to-[#e59350] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
                <div className="p-4 rounded-lg flex items-center">
                  <span className="material-icons text-2xl mr-2 bg-gradient-to-r from-[#e59350] to-[#305764] p-2 rounded-lg">
                    <PiPersonSimpleCircleFill className="text-white" />
                  </span>
                  Students and Graduates
                </div>
              </div>

              <Link
                to="#"
                className="bg-red-500 text-white py-2 px-4 rounded-lg inline-block ml-5"
              >
                Explore Opportunities
              </Link>
            </div>
            <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:relative lg:left-[53%] bottom-20">
              <img
                src="/About/Working-us-3.webp"
                alt="Working at DHL"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </SplideSlide>

        {/* Add more SplideSlides as needed */}
      </Splide>
    </div>
  );
}

export default WorkFlow;
