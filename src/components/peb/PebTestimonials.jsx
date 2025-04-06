import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const PebTestimonials = () => {
  return (
    <div>
      <section className="overflow-hidden relative min-h-screen grid grid-cols-1 lg:grid-cols-12 place-content-center lg:place-items-center lg:gap-16 max-w-7xl mx-auto px-6 py-10">
        <div className="relative z-10 mb-10 lg:mb-0 col-span-6">
          <h1 className="relative z-10 sm:text-5xl text-3xl 2xl:text-6xl font-bold sm:leading-snug 2xl:leading-tight">
            Bringing value <br />
            across different brands.
          </h1>
          <p className="mt-4 mb-7 text-gray-500 max-w-sm 2xl:text-lg 2xl:mt-4 2xl:mb-8">
            Over 7 brands in all sizes use{" "}
            <a href="#" className="text-red-400 hover:underline">
              Branchify
            </a>{" "}
            to understand their business and customers better.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-red-50 py-2.5 px-10 font-bold text-red-500 hover:shadow-lg 2xl:py-3 2xl:px-12"
          >
            Read success stories
          </a>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 col-span-6">
          <div className="relative z-10 bg-white shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
            <div>
              <FaQuoteLeft />
              <p className="my-3 2xl:text-lg">
                This product really helped my brand expand in a very manageable
                way. Would really use this for any future expansion.
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                  timothy quano
                </span>{" "}
                &#8212; Symph, Designer{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Timothy Quano"
                className="rounded-full w-24 h-24 object-cover 2xl:w-28 2xl:h-28"
              />
              <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-[#deb2b280] to-[#deb2b280] absolute inset-0"></div>
            </div>
          </div>
          <div className="relative z-10 bg-white shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
            <div>
            <FaQuoteLeft />
              <p className="my-3 2xl:text-lg">
                Scalability will never be and issue now for my brand!
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                  Jane Doe
                </span>{" "}
                &#8212; ANI, CEO{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jane Doe"
                className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 object-cover"
              />
              <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-[#deb2b280] to-[#deb2b280] absolute inset-0"></div>
            </div>
          </div>
          <div className="relative z-10 bg-white shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
            <div>
            <FaQuoteLeft />
              <p className="my-3 2xl:text-lg">
                The product is really easy to use that I didn't have to set a
                trainning for my employees.
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                  rowen smith
                </span>{" "}
                &#8212; Golden Bowl, CEO{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Rowen Smith"
                className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 object-cover"
              />
              <div className="rounded-full w-24 h-24 2xl:w-28 2xl:h-28 bg-gradient-to-r from-[#deb2b280] to-[#deb2b280] absolute inset-0"></div>
            </div>
          </div>
          <div className="hidden xl:block absolute bottom-[-6rem] right-[25rem] w-72 h-72 bg-red-50 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default PebTestimonials;
