 import React from 'react';
 import { LazyLoadImage } from 'react-lazy-load-image-component';

const Map = () => {
  return (
    <div className="relative font-inter antialiased w-full aspect-video sec-padding">
      <p className="xl:text-3xl md:text-2xl text-xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12" data-aos="fade-up" data-aos-duration="1500">
        More Than 10 Years We Provide Service
        <br className="md:block hidden" />
        in Industry
      </p>
      
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        {/* Desktop Image */}
        <LazyLoadImage 
          src="https://i.ibb.co/KjrPCyW/map.png" 
          alt="world map image" 
          className="w-full xl:h-full h-96 object-cover  sm:block hidden" 
        />
        {/* Mobile Image */}
        <LazyLoadImage 
          src="https://i.ibb.co/SXKj9Mf/map-bg.png" 
          alt="mobile-image" 
          className="sm:hidden -mt-10 block w-full h-96 object-cover absolute z-0" 
        />

        {/* Recently Property Listed */}
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12" data-aos="zoom-in" data-aos-duration="1500">
          <p className="text-3xl font-semibold text-gray-800">20K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Property Listed</p>
        </div>

        {/* Active Listening */}
        <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto  bg-white sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12" data-aos="zoom-in" data-aos-duration="2000">
          <p className="text-3xl font-semibold text-gray-800">8K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Listening</p>
        </div>

        {/* Recently Sold Lands */}
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24" data-aos="zoom-in" data-aos-duration="2500">
          <p className="text-3xl font-semibold text-gray-800">15K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
        </div>
      </div>
    </div>
  );
};

export default Map;