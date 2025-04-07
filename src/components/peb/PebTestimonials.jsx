import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const PebTestimonials = () => {
  return (
    <div>
      <section className="overflow-hidden relative min-h-screen grid grid-cols-1 lg:grid-cols-12 place-content-center lg:place-items-center lg:gap-16 max-w-7xl mx-auto px-6 py-10">
        <div className="relative z-10 mb-10 lg:mb-0 col-span-6">
          <p className="relative z-10 sm:text-5xl text-3xl 2xl:text-6xl font-bold sm:leading-snug 2xl:leading-tight">
           Delivering Value <br/>Across Diverse Industries
          </p>
          <p className="mt-4 mb-7 text-gray-500 max-w-sm 2xl:text-lg 2xl:mt-4 2xl:mb-8">
          Businesses from various sectors choose our PEB solutions for efficient, durable, and cost-effective construction.

          </p>
         
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5 col-span-6">
          <div className="relative z-10 bg-white shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col lg:items-center justify-between lg:flex-row gap-10 p-7">
            <div>
              <FaQuoteLeft />
              <p className="my-3 2xl:text-lg">
              Mekark built our PEB warehouse exactly as we wanted. The work was fast, neat, and professional. We're happy with the quality.
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                Ms. Deepa Rani
                </span>{" "}
                &#8212; Operations Head{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="/civil/user.png"
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
              We needed a strong and spacious structure for our factory. Mekark’s team delivered a solid PEB building on time. Great teamwork!
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                Mr. Vignesh Babu
                </span>{" "}
                &#8212; Site Engineer{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="/civil/user.png"
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
              Mekark gave us the right advice and executed our PEB project with care. It was a hassle-free experience from start to finish.
              </p>
              <p className="text-gray-400">
                <span className="name text-gray-900 capitalize font-bold">
                Mr. Santhosh Kumar
                </span>{" "}
                &#8212; Project Manager{" "}
              </p>
            </div>
            <div className="relative shrink-0">
              <img
                src="/civil/user.png"
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
