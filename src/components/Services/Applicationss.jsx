import React from "react";
import Heading from "../Common/Heading/Heading";

const Applications = ({data}) => {
  return (
    <div>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full flex-col items-center text-center">
            <Heading title={`Application`} secTitle={`Usages`} />
          </div>
          <div className="flex flex-wrap">
            {data.map((item, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-300 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d={item.iconPath}></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications;
