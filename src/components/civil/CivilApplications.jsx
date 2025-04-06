import React from "react";
import Heading from "../Common/Heading/Heading";

const CivilApplications = ({ data }) => {
  return (
    <div className="my-10">
      <Heading title="Civil Applications" secTitle="Types" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 md:px-20 px-6 hover:shadow-lg ease-linear duration-300">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-5 p-5 group"
            style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 15px -15px" }}
          >
            <img
              key={index}
              className="[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_100%_100%,_75%_100%,_46%_100%,_0_100%)] group-hover:transition-clipPath duration-700 h-[300px]"
              src={`${item.imgUrl}`}
            />
            <p className="text-md font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CivilApplications;
