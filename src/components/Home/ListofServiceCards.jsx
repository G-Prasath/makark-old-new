import React from "react";
import { ListServiceCardData } from "../../data/HomeData";
import "./css/listServicc.css";
import Heading from "../Common/Heading/Heading";

const ListofServiceCards = () => {
  return (
    <div className="md:mt-14 max-sm:mt-14 my-10">
      <div className="w-full" data-aos="fade-left" data-aos-duration="1500">
        <Heading
          title="Our In-House Capabilities"
          secTitle="We own and operate our own"
         
        />
      </div>
      <div className="bg-gray-900 text-white py-14 px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {ListServiceCardData.map((item, index) => (
          <div
          key={index}
            className={`relative rounded-lg list-of-service-card bg-[#1f2937] flex flex-col md:flex-row ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center ${item.hoverClass}`}
            data-aos={`${index == 0 ? "fade-in" : index == 1 ? 'fade-right' : index == 2 ? 'fade-bottom' : 'fade-up'}`}
            data-aos-duration="2000"
          >
            <div className="card-content w-full md:w-1/2 mb-4 md:mb-0 z-10 p-2">
              <h2 className="text-2xl font-bold mb-4 max-sm:mb-0 pl-5">
                {item.title}
              </h2>
              <ul className="list-disc pl-10 pt-5 max-sm:py-5">
                {item.description.map((desc, i) => (
                  <li key={i} data-aos="zoom-in-up" data-aos-duration="3000">{desc}</li>
                ))}
              </ul>
            </div>
            <div className="card-image w-full md:w-1/2 h-full overflow-hidden">
              <img
                src={item.imgUrl}
                alt={item.title}
                className={`object-cover w-full h-full ${item.imageClass}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListofServiceCards;