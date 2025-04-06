import React from "react";
import "./css/AboutProfile.css";

const AboutProfile = () => {
  return (
    <header className="min-h-screen bg-gray-100 md:py-10 md:px-5">
      <div className="flex flex-col xl:flex-row sec-padding md:gap-10 items-center">
        <div className="w-full">
          <h1 className="text-2xl xl:text-4xl font-semibold xl:leading-snug text-gray-900 2xl:leading-snug">
            We create <span className="text-[#e59350]">buildings</span> that
            meet your needs!
          </h1>
          <ul>
            <li className="leading-8 text-base xl:text-md mt-3 mb-4 text-justify">
              Mekark Structure Pvt Ltd has been established since 1996, which
              specializes in manufacturing the Pre-Engineered Buildings,
              Prefabricated Structure Buildings, Multi Level Car Parking, MEP
              Services, Multi-storey Steel Building, Civil Construction and
              Warehouse Constructions.
            </li>
            <li className="leading-8 text-base xl:text-md mt-1 mb-4 text-justify">
              Mekark Structure Pvt Ltd, is the leading manufacturer and Supplier
              for Pre-Engineered Buildings and Prefab Buildings services
              provider for the past 15 years based in India. We specialize in
              designing and building structures for a wide range of industries,
              including commercial, industrial, and residential.
            </li>
            <li className="leading-8 text-base xl:text-md mt-1 mb-4 text-justify">
              Our team of experienced professionals is committed to delivering
              exceptional results on time and within budget, while maintaining
              the highest standards of safety and sustainability.
            </li>
            <li className="leading-8 text-base xl:text-md mt-1 mb-4 text-justify">
              We have achieved a great number of praises from our customers at
              home and abroad, because of high-quality steel materials product
              and professional services.
            </li>
          </ul>
        </div>

        {/* Right side with a full-width image */}
        <div
          className="xl:mt-14 w-full"
          data-aos="zoom-in-left"
          data-aos-duration="700"
        >
          <img
            className="w-full h-auto object-cover rounded-2xl"
            src="/About/profile.webp"
            alt="Antelope Canyon"
          />
        </div>
      </div>

      <div className="w-full bg-gray-100 py-10 flex justify-center sec-padding">
        <div>
          <div className="flex w-full flex-col justify-center items-center">
            <p className="text-4xl font-bold">
              What we <span className="text-[#e59350]">do</span> ?
            </p>
            <p className="mt-4 text-md text-center">
              Our Mekark Expert Team and Consultants provide various industry
              engineering services such as
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Pre-Engineered Buildings Manufacturer.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Multi-Storey Steel Building.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              MEP Services.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Multi Level Car Parking Solutions.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Civil Construction.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Design services.
            </p>
            <p
              className="bg-slate-300 p-3 rounded-md text-md text-center hover:bg-slate-200"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              Prefabricated Structure Manufacturer.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutProfile;
