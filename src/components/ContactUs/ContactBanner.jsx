import React from 'react'
import Breadcrum from "../Common/Breadcrum";


const ContactBanner = () => {
  return (
    <div>
      <div
        className="relative lg:h-screen w-full aspect-square md:aspect-video"
        data-aos="zoom-in-up"
      >
        <img
          src="https://img.freepik.com/free-photo/businessman-holding-headset_23-2147768633.jpg?t=st=1733391793~exp=1733395393~hmac=9583456fd7a1dc5e509d839bdbcdf0ebe7dd799e09f86dd7af444bfef2da9abe&w=996"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-20 mt-20">
          <h1 className="text-4xl text-white font-bold my-3">Contact Us</h1>
          <Breadcrum location={`Contact Us`} />
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
