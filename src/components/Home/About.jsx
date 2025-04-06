import React, { useState, useEffect } from "react";
import Buttons from "../Common/Buttons";
import { AboutData } from "../../data/HomeData";
import "./css/about.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  const [expandedImg, setExpandedImg] = useState(AboutData[0]); // Default to the first image

  const handleClick = (img) => {
    setExpandedImg(img);
  };

  return (
    <section className="area md:h-screen h-auto">
      {/* <div className="context">Context Content</div> */}
      <ul className="circles">
        {[...Array(10)].map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
      <div className="content relative z-10 flex flex-col md:flex-row gap-6 items-center lg:py-10 xl:px-20">
        <div className="md:w-3/6 w-full flex md:gap-6 gap-2 max-sm:order-2 lg:my-16">
          <LazyLoadImage
            id="expandedImg"
            src={expandedImg.src}
            alt={expandedImg.alt}
            className="w-9/12 object-cover aspect-square rounded-lg"
            data-aos="fade-right" data-aos-duration="2000"
          />
          <div className="flex flex-col justify-between gap-6">
            {AboutData.map((img, index) => (
              <LazyLoadImage
                key={index}
                src={img.src}
                alt={img.alt}
                className="cursor-pointer max-w-full h-full object-cover aspect-video rounded-lg"
                onClick={() => handleClick(img)}
                 data-aos={`${index == 0 ? 'flip-left' : index == 1 ? 'flip-right' : 'flip-bottom'}`} data-aos-duration="2000"
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/6 w-full max-sm:order-1 about-card max-sm:p-4 max-sm:my-5 max-lg:p-4 max-md:my-2 rounded-lg">
          <h1 className="md:text-3xl text-xl font-bold text-gray-800 mb-4" data-aos="fade-left" data-aos-duration="1500">
            {expandedImg.alt}
          </h1>

          <p className="text-gray-700 leading-relaxed text-justify" data-aos="flip-up" data-aos-duration="1500">
            {expandedImg.description}
          </p>
          <div className="flex justify-end mt-10" data-aos="fade-bottom" data-aos-duration="1500">
            <Buttons text="Read More" url="/about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
