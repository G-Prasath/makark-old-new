import React, { useEffect } from "react";
import { MDCRipple } from "@material/ripple";
import { VisionData } from "../../data/AboutData";
import Heading from "../Common/Heading/Heading";

const Vision = () => {
  return (
    <>
      <div className="mt-10">
        <Heading title={"Our Guiding Principles"} secTitle={`Rules`} />
      </div>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto p-4">
          <div className="container mx-auto px-6 p-6 max-sm:p-0 bg-white">
            <div className="flex flex-wrap my-12">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div
                  className="flex items-center mb-6 w-full"
                  data-aos="zoom-out-in"
                  data-aos-duration="800"
                >
                  <img src="/About/vision.png" alt="" className="w-[70px]" />
                  <div className="ml-4 text-xl font-semibold">Vision</div>
                </div>
                <p className="leading-loose text-gray-800 text-justify">
                  Our vision is to become the most respected solution providers
                  in the Manufacturing Industry and build a modern society. We
                  also have a services sector that strives to achieve the same
                  level of excellence and cost- elective turnkey solution for
                  our customers.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div
                  className="flex items-center mb-6"
                  data-aos="zoom-out-in"
                  data-aos-duration="800"
                >
                  <img src="/About/mission.png" alt="" className="w-[70px]" />
                  <div className="ml-4 text-xl font-semibold">Mission</div>
                </div>
                <p className="leading-loose text-gray-800 text-justify">
                  MEKARK aims to be a manufacturer and supplier of pre
                  fabricated and prefabricated buildings, committed to providing
                  quality, fast and cost-effective solutions to business. Our
                  aim is to provide innovative and sustainable solutions that
                  meet the changing needs of our customers, providing on-time
                  delivery and Highest quality customer service.
                </p>
              </div>

              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div
                  className="flex items-center mb-6"
                  data-aos="zoom-out-in"
                  data-aos-duration="800"
                >
                  <img src="/About/quality.png" alt="" className="w-[70px]" />
                  <div className="ml-4 text-xl font-semibold">Quality</div>
                </div>
                <p className="leading-loose text-gray-800 text-justify">
                  To provide products and services that meet or exceed customer
                  expectations through continuous improvement and adherence to
                  quality management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
