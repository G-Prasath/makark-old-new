import React from "react";
import Heading from "../Common/Heading/Heading";

const Acciories = ({data}) => {
  return (
    <div className="mt-10">
      <Heading title="PEB" secTitle="Accessories" />
      <section className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-gray-100 sec-padding mt-10">
        {data.map((item, index) => (
          <div key={index} className="flex md:flex-row flex-col w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-none md:w-2/5 w-full">
              <img
                src={item.imgUrl}
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow p-5">
              <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
              <p className="text-base leading-relaxed mb-8 text-justify">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Acciories;
