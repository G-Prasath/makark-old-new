import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "./css/Cta.css";

const Cta = () => {
  return (
    <header className="cta bg-animation">
      <div className="container mx-auto h-full relative">
        <div className="flex items-center justify-center h-full">
          {/* text section I need */}
          <div className="relative z-10 text-center">
            <p className="text-5xl max-sm:text-3xl font-bold text-white mb-4" data-aos="fade-down" data-aos-duration="1500">
              Get an Expert Now!
            </p>
            <p className="text-lg max-sm:text-[16px] text-white mb-8" data-aos="fade-up" data-aos-duration="2000">
              Transform your visions into reality with our expert solutions and
              personalized services.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
              <button data-aos="fade-right" data-aos-duration="2000" className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 w-full sm:w-auto">
                <FaPhoneAlt />
                <span className="font-semibold">Connect to an Expert</span>
              </button>
              <button data-aos="fade-left" data-aos-duration="2000" className="bg-black text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2 w-full sm:w-auto">
                <IoLogoWhatsapp className="text-xl" />
                <span className="font-semibold">Reach us via Whatsapp</span>
              </button>
            </div>
          </div>
          {/* text section I need */}
        </div>
      </div>
    </header>
  );
};

export default Cta;