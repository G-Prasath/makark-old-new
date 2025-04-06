import React from "react";
import Heading from "../Common/Heading/Heading";

const Applications = ({ data }) => {
  return (
    <div className="sec-padding w-full">
      <Heading title="Applications" secTitle="Types" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-5">
        {data.map((item, index) => (
          <div className="max-w-sm rounded overflow-hidden shadow-xl my-5" key={index}>
            <div className="relative overflow-hidden">
              <img
                className="w-full service-clippy hover:scale-[1.1] duration-500"
                src={item.img}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="pt-3 pb-5 px-5 flex flex-col items-center">
              <p className="font-semibold text-xl">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
