import React from "react";
import Heading from "../Common/Heading/Heading";
import { IoLocationOutline } from "react-icons/io5";

const MapNew = () => {
  return (
    <div>
      <section className="text-gray-700 body-font border-t border-gray-200 bg-[#eef7fc]">
        <div className="mt-10">
          <Heading title="Our Footprints" secTitle="We own and operate" />
        </div>

        <div className="px-5 py-24 mx-auto flex flex-wrap">
          <div
            className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
            data-aos="zoom-in-right"
            data-aos-duration="1200"
          >
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="/About/map1.png"
            />
          </div>

          <div className="flex flex-col justify-center flex-wrap lg:py-6 lg:w-1/2 lg:pl-8 lg:text-left w-full">
            <div className="flex flex-col mb-10">
              <h2 className="text-gray-900 text-xl font-semibold title-font mb-3 text-center">
                Locations
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-x-4 gap-y-8 w-full place-content-center">
              <div
                className="flex items-center gap-3"
                data-aos="zoom-out-up"
                data-aos-duration="1000"
              >
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
              <div className="flex items-center gap-3"
              data-aos="zoom-out-up"
              data-aos-duration="1000">
                <IoLocationOutline className="size-[20px]" />
                <p className="text-[18px]">Locations name</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapNew;
