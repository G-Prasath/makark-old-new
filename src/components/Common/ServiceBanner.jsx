import React from "react";
import Breadcrum from "./Breadcrum";

const ServiceBanner = ({ data, ServiceName }) => {
  return (
    <div>
      <div className="relative lg:h-screen w-full aspect-video">
        <img
          src={data.imageSrc}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center md:p-20 p-0">
          <h1 className="sm:text-4xl text-xl text-white font-bold my-3">{data.heading}</h1>
          <Breadcrum location={ServiceName} />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
