import React from "react";
import Heading from "../Common/Heading/Heading";

const Benifites = ({ data }) => {
  return (
    <>
      <Heading title="Benefits" secTitle="Advantages" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#f2f8f4]/50 border border-[#2e4750] rounded-md p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Index Badge */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-lightgreen rounded-br-lg flex items-center justify-center text-[#2e4750] text-xl font-bold">
              {index + 1}
            </div>

            {/* Content */}
            <div className="mt-8">
              <p className="text-justify font-medium text-[#2e4750]">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Benifites;