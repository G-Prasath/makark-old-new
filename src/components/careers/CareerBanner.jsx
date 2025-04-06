import React from 'react'
import Breadcrum from "../Common/Breadcrum";

const CareerBanner = () => {
  return (
    <div>
    <div
      className="relative w-full md:aspect-video aspect-square"
      data-aos="zoom-in-up"
    >
      <img
        src="/Carrers/banner.jpg"
        className="absolute inset-0 w-full h-full object-cover filter"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-20 mt-20">
        <h1 className="text-4xl text-white font-bold my-3">Careers</h1>
        <Breadcrum location={`Careers`} />
      </div>
    </div>
  </div>
  )
}

export default CareerBanner
