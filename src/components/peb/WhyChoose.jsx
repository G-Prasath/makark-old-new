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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Safety First
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Clean Surface
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Professional
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Sustainability
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Modern Painting
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
                  <h4 className="text-gray-800 text-lg uppercase mb-1">
                    Home Decor
                  </h4>
                  <p className="text-gray-600 text-sm font-light">
                    Globally incubate standards compliant channels before
                    scalable benefits. Quickly disseminate superior del
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
