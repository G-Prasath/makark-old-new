import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading/Heading";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductCards = () => {
  return (
    <div
      className="sec-padding bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/Home/portfolio.avif')",
      }}
    >
      {/* Section-1 */}
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 w-full">
          <div
            role="main"
            className="flex md:mt-10 flex-col items-center justify-center"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <Heading title="Portfolio" secTitle="Services" />
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div
                  className="sm:w-1/2 relative"
                  data-aos="flip-left"
                  data-aos-duration="1500"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Industrial Shed
                      </p>
                      <Link
                        to="/peb-industrial-shed-supplier"
                        className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/Industrial-Shed.avif"
                    className="w-full rounded-lg"
                    alt="Industrial-Shed"
                  />
                </div>
                <div
                  className="sm:w-1/2 sm:mt-0 mt-4 relative"
                  data-aos="flip-right"
                  data-aos-duration="1800"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Space Frame Structure
                      </p>
                      <Link
                        to="/space-frame-structure-building"
                        className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/Space-frame-structure.avif"
                    className="w-full rounded-lg"
                    alt="Space-frame-structure"
                  />
                </div>
              </div>
              <div
                className="relative"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div>
                  <div className="absolute w-full bottom-0 left-0 md:p-5 p-2 bg-black bg-opacity-70">
                    <p className="text-xl font-semibold text-white">
                      Multi-Storey Steel Building
                    </p>

                    <Link
                      to="/multi-storey-building-manufacturer"
                      className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <LazyLoadImage
                  src="/Home/Multi-storey-steel-building.avif"
                  alt="Multi-storey-steel-building"
                  className="w-full mt-8 md:mt-6 hidden sm:block rounded-lg"
                />
                <LazyLoadImage
                  className="w-full mt-4 sm:hidden rounded-lg"
                  src="/Home/Multi-storey-steel-building.avif"
                  alt="Multi-storey-steel-building"
                />
              </div>
            </div>
            <div
              className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between"
              data-aos="flip-right"
              data-aos-duration="3000"
            >
              <div className="relative">
                <div>
                  <div className="absolute w-full bottom-0 left-0 md:p-5 p-2 bg-black bg-opacity-60">
                    <p className="text-xl font-semibold text-white">
                      Pre-Engineered Building
                    </p>
                    <Link
                      to="/pre-engineered-building-manufacturer-company-chennai"
                      className="focus:outline-none focus:underline flex items-center mt-4 justify-end cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <LazyLoadImage
                  src="/Home/PEB.avif"
                  alt="PEB"
                  className="w-full sm:block hidden rounded-lg"
                />
                <LazyLoadImage
                  className="w-full sm:hidden rounded-lg"
                  src="/Home/PEB.avif"
                  alt="PEB"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div
                  className="relative w-full"
                  data-aos="flip-right"
                  data-aos-duration="200"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Design Services
                      </p>
                      <Link
                        to="/"
                        className="focus:outline-none focus:underline flex items-center justify-end mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/design-services.avif"
                    className="w-full rounded-lg"
                    alt="Design-service"
                  />
                </div>
                <div
                  className="relative w-full sm:mt-0 mt-4"
                  data-aos="flip-up"
                  data-aos-duration="1500"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        MLCP
                      </p>
                      <Link
                        to="/multi-level-car-parking-system-manufacturer-company-chennai"
                        className="focus:outline-none focus:underline flex items-center justify-end mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/MLCP.avif"
                    className="w-full rounded-lg"
                    alt="Industrial-enclosures"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 w-full">
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div
                  className="sm:w-1/2 relative"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Factory Buildings
                      </p>
                      <Link
                        to="/factory-building-manufacturer"
                        className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/Factory-buildings.avif"
                    className="w-full rounded-lg"
                    alt="Civil-construction"
                  />
                </div>
                <div
                  className="sm:w-1/2 sm:mt-0 mt-4 relative"
                  data-aos="flip-left"
                  data-aos-duration="1800"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">Tensile</p>
                      <Link
                        to="/tensile-fabric-roofing"
                        className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/tensile.avif"
                    className="w-full rounded-lg"
                    alt="MEP"
                  />
                </div>
              </div>
              <div
                className="relative"
                data-aos="flip-up"
                data-aos-duration="2200"
              >
                <div>
                  <div className="absolute w-full bottom-0 left-0 md:p-5 p-2 bg-black bg-opacity-60">
                    <p className="text-xl font-semibold text-white">
                      Civil Constructions
                    </p>
                    <Link
                      to="/civil-construction-company-chennai"
                      className="focus:outline-none focus:underline flex justify-end items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <LazyLoadImage
                  src="/Home/Civil-construction.avif"
                  alt="Factory-buildings"
                  className="w-full mt-8 md:mt-6 hidden sm:block rounded-lg"
                />
                <LazyLoadImage
                  className="w-full mt-4 sm:hidden rounded-lg"
                  src="/Home/Factory-buildings.avif"
                  alt="Factory-buildings"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div
                className="relative"
                data-aos="flip-down"
                data-aos-duration="2500"
              >
                <div>
                  <div className="absolute w-full bottom-0 left-0 md:p-5 p-2 bg-black bg-opacity-60">
                    <p className="text-xl font-semibold text-white">
                      Warehouse Construction
                    </p>
                    <Link
                      to="/warehouse-shed-manufacturer-chennai"
                      className="focus:outline-none focus:underline flex items-center mt-4 justify-end cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <LazyLoadImage
                  src="/Home/Warehouse.avif"
                  alt="Warehouse-Construction"
                  className="w-full sm:block hidden rounded-lg"
                />
                <LazyLoadImage
                  className="w-full sm:hidden rounded-lg"
                  src="/Home/Warehouse.avif"
                  alt="Warehouse-Construction"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div
                  className="relative w-full"
                  data-aos="flip-right"
                  data-aos-duration="2800"
                >
                  <div>
                    {/* Container with black background and low opacity */}
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Solar Panel
                      </p>

                      <Link
                        to="/solar-panel-manufacturer-and-installer"
                        className="focus:outline-none focus:underline flex items-center justify-end mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/solor-panal.avif"
                    className="w-full rounded-lg"
                    alt="Cold-storage"
                  />
                </div>

                <div
                  className="relative w-full sm:mt-0 mt-4"
                  data-aos="flip-up"
                  data-aos-duration="2500"
                >
                  <div>
                    <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-60">
                      <p className="text-xl font-semibold text-white">
                        Institutional building
                      </p>
                      <Link
                        to="/Institutional-building-construction"
                        className="focus:outline-none focus:underline flex items-center mt-4 justify-end cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <LazyLoadImage
                    src="/Home/Institutional-building.avif"
                    className="w-full  rounded-lg"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
