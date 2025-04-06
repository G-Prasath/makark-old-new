import React from "react";
import Heading from "../Common/Heading/Heading";

// Main component for displaying all cards
const PebApp = ({ data }) => {
  return (
    <div className="min-h-screen bg-white md:py-16 px-4 sec-paading">
      <Heading title="PEB Applications" secTitle="Types" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-5 p-5 group"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 15px -15px" }}
          >
            <img
              key={index}
              className="[clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_50%,_100%_100%,_0%_100%,_0%_50%)] group-hover:transition-clipPath duration-700 h-[300px]"
              src={`${item.image}`}
            />
            <p className="text-md font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PebApp;
