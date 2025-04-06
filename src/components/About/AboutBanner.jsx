import React from "react";
import Breadcrum from "../Common/Breadcrum";

const AboutBanner = () => {
  return (
    <div>
      <div
        className="relative lg:h-screen w-full md:aspect-video aspect-square"
        data-aos="zoom-in-up"
      >
        <img
          src="/About/Banner.webp"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-20">
          <h1 className="text-4xl text-white font-bold my-3">About Us</h1>
          <Breadcrum location={`About Us`} />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
