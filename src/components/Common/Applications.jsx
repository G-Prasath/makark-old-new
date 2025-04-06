import React from "react";
import Heading from "../Common/Heading/Heading";

const Applications = ({ data }) => {
  
  return (
    <div className="my-0 sec-padding">
      <Heading title="Applications" secTitle="Usages" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 w-full items-center justify-center sm:px-20 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-5 p-5 group"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 15px -15px" }}
          >
            <img
              key={index}
              className="[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)] group-hover:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] group-hover:transition-clipPath duration-700 h-[300px]"
              src={`${item.img}`}
            />
            <p className="text-md font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
