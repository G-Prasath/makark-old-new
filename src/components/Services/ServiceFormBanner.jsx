import React from "react";
import PageBannerForm from "../Common/PageBannerForm";
import Breadcrum from "../Common/Breadcrum";

const ServiceFormBanner = ({data, location}) => {
  
  return (
    <div className="relative w-full md:aspect-video aspect-square">
      <img
        src={data.imageSrc}
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="absolute inset-0 flex items-center justify-center mt-20">
        <div className="w-full h-full flex items-center xl:p-10 p-5">
          <div className="lg:w-2/3 w-full flex flex-col items-center gap-y-5 max-sm:gap-y-3">
            <p className="sm:text-3xl text-xl md:text-5xl text-white font-bold">
              {data.heading}
            </p>
            <Breadcrum location={location} />
          </div>

          <div className="w-1/3 hidden lg:flex items-center justify-center">
            <PageBannerForm serviceName={location} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFormBanner;
