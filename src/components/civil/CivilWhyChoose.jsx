import React from "react";
import Heading from "../Common/Heading/Heading";

const CivilWhyChoose = ({ data }) => {
  return (
    <div>
      <Heading title={`Why Choose`} secTitle={`Civil Constructions`} />
      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 bg-white">
            <div className="flex flex-wrap my-6">
              {data.map((feature, index) => (
                <div
                  key={index}
                  className={`w-full border-b md:p-8 p-4 ${
                    index < 3
                      ? "md:w-1/2 lg:w-1/3"
                      : "md:w-1/2 lg:w-1/3 lg:border-b-0"
                  } ${index % 3 !== 2 && "lg:border-r"}`}
                >
                  <div className="flex items-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="h-6 w-6 text-indigo-500"
                    >
                      <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">{feature.title}</div>
                  </div>
                  <p className="leading-loose text-gray-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilWhyChoose;
