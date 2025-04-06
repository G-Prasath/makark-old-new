import React from "react";
import Heading from "../Common/Heading/Heading";
import "./css/manufacturing.css";
import { ManufacturingData } from "../../data/HomeData";
import Buttons from "../Common/Buttons";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ManufacturingUnit = () => {
  return (
    <div className="lg:mt-[100px] md:my-10">
      <div data-aos="fade-left" data-aos-duration="2200">
      <Heading
        title="Our Manufacturing Unit"
        secTitle="We own and operate our own"
      />
      </div>
      <main className="grid grid-cols-12 md:container mx-auto md:px-5 my-10">
        <section className="col-span-12 px-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 mx-auto md:px-0">
          {ManufacturingData.map((item, index) => (
            <article
              key={index}
              className={item.reverse ? "lg:flex flex-col-reverse" : ""}
              data-aos={`${index == 0 ? 'fade-down' : index == 1 ? '' : 'fade-up'}`}
              data-aos-duration="2000"
            >
              <div className="lg:aspect-square h-56 lg:h-auto overflow-hidden">
                <LazyLoadImage
                  src={item.imgSrc}
                  alt={item.title}
                  className="object-cover cursor-pointer w-full h-full   transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="bg-white lg:aspect-square flex text-center justify-center flex-col md:p-10 p-5 relative">
                <div
                  className={`arrow-up ${item.reverse ? "lg:hidden" : ""}`}
                ></div>
                {item.reverse && (
                  <div className="arrow-down hidden lg:block"></div>
                )}

                <h3 className="uppercase md:text-xl text-md font-bold" data-aos="zoom-in-right" data-aos-duration="2500">{item.title}</h3>

                <span className="w-10 h-0.5 bg-gray-400 block mx-auto mt-2 mb-5"></span>
                <p className="mb-5 text-justify" data-aos="zoom-in-left" data-aos-duration="3000">{item.description}</p>
                <div data-aos="zoom-in-bottom" data-aos-duration="3200">
                <Buttons text="Explore more" url="/manufacturing" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ManufacturingUnit;
