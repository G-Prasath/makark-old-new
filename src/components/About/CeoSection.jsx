import React from "react";
import Heading from "../Common/Heading/Heading";

function CeoSection() {
  return (
    <>
      <div className="mt-10">
        <Heading title={"Meet Our Managing Director"} secTitle={`of Mekark`} />
      </div>
      <div className="flex flex-col items-center bg-white mt-5 px-4 md:flex-row">
        <div
          className="w-full md:w-1/2 p-4"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <img
            src="/About/CEO.webp"
            alt="CEO smiling in a suit"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8 p-4">
          <div className="border-l-4 border-[#305764] pl-4">
            <p className="text-3xl md:text-4xl font-bold text-[#305764]">
              D.Aquin Janvel
            </p>
            <p className="text-lg md:text-xl font-bold text-[#e59350] mt-4">
              CEO of Mekark Pvt Ltd
            </p>
            <p className="text-gray-600 mt-4 text-justify">
              Our MD, Mr. D Aquin Janvel, is the key innovator behind Mekark's
              success. With a clear vision and strong industry knowledge, he has
              successfully led Mekark to become a leader in pre-engineered
              buildings and industrial constructions. His leadership has set new
              standards for quality and innovation
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CeoSection;
