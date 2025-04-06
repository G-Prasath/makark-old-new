import React from "react";
import Heading from "../Common/Heading/Heading";

const CivilPortfolio = ({ data }) => {
  return (
    <div>
      <Heading title={`Projects`} secTitle={`Portfolio`} />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 overflow-hidden my-10 sec-padding">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative w-full aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              className="w-full h-full object-cover"
              src={item.imageUrl}
              alt={item.title}
            />

            <div className="absolute inset-0 hover:bg-black hover:bg-opacity-70 text-white flex flex-col items-center justify-center transition-all duration-300 transform group-hover:bottom-0 bottom-[-200%]">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-center p-3 text-[16px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CivilPortfolio;
