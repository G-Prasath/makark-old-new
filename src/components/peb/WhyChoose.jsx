import React from "react";
import Heading from "../Common/Heading/Heading";

const WhyChoose = () => {
  return (
    <div className="y-us-section py-10">
      <div className="container mx-auto">
        <div className="row flex justify-center">
          <div className="md:w-2/3 sm:w-full text-center md:mb-12 mb-5">
            <div className="y-us-head">
              <div className="y-us-title">
                <Heading title="Why Choose Us" secTitle="Mekark" />
                <span className="y-us-title-border h-1 w-12 inline-block rounded"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap">
          {/* Left Column */}
          <div className="md:w-1/3 sm:w-full px-4 max-md:mb-5">
            <div className="flex flex-col gap-y-10">
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Construction time
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  PEB reduces the total construction cost by the least 40% which leads to faster occupancy and early revenue.
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Lower cost
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  Saving is accomplished in design, manufacturing and erection cost.
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Large clear span
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  In PEB the buildings can be given up to 90m clear spans which is the important advantage of PEB with column free space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div
            className="md:w-1/3 sm:w-full px-4 flex justify-center items-center mb-6"
            data-aos="zoom-out"
            data-aos-duration="800"
          >
            <img
              src="https://img.freepik.com/free-photo/view-modern-construction-site_23-2151317317.jpg?t=st=1731509685~exp=1731513285~hmac=9eae80de4a12e298dd5fb4b65ebf5073e76430db272858cfeafd543056d1e438&w=996"
              alt="Why Choose Us"
              className="w-full object-cover rounded"
            />
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 sm:w-full px-4">
            <div className="flex flex-col gap-y-10">
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Flexibility of expansion
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  PEB can be easily expanded in length by adding additional bays.
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Quality control
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  PEB's are manufactured under controlled conditions depending on the site and hence the quality is assured.
                  </p>
                </div>
              </div>
              <div className="service-box flex">
                <div className="iconset flex justify-center items-center  rounded-full h-16 w-16">
                  <span className="text-yellow-500 text-2xl border border-yellow-500 rounded-full p-4">
                    &#x2699;
                  </span>
                </div>
                <div className="y-us-content ml-4">
                  <p className="text-gray-800 text-lg uppercase mb-1">
                  Environment-Friendly
                  </p>
                  <p className="text-gray-600 text-sm font-light">
                  PEB structures generate less waste during fabrication and erection. Most components are recyclable, making them a sustainable choice for reducing environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
