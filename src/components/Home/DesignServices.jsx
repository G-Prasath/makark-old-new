import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading/Heading";
import { DesignServicesData } from "../../data/HomeData";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const DesignServices = () => {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load the data from the JSON file or other sources
    setServices(DesignServicesData);
  }, []);

  return (
    <div className="relative font-inter antialiased">
      <main
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center bg-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/Home/design.jpg')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 md:py-24 py-10">
          <div className="mb-10" data-aos="fade-right" data-aos-duration="1800">
            <Heading title="Our Design" secTitle="Services" />
          </div>
          {/* Image Accordion Component */}

          <div className="group flex flex-col md:flex-row justify-center gap-2">
            {DesignServicesData.map((item, index) => (
              <article
                key={index}
                data-aos={`${
                  index == 0
                    ? "flip-down"
                    : index == 1
                    ? "flip-left"
                    : index == 2
                    ? "flip-up"
                    : "flip-right"
                }`}
                data-aos-duration="2500"
                className="group/article relative rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all"
              >
                <div className="absolute inset-0 text-white z-10">
                  <h3 className="absolute inset-x-0 lg:bottom-12 bottom-16 text-lg p-6 font-bold md:px-12 md:py-8 md:whitespace-nowrap mb-4 md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 z-30">
                    {item.title}
                  </h3>
                  <p className="absolute leading-5 inset-x-0 mb-4 bottom-0 text-lg max-sm:text-md p-6 md:px-12 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300 bg-transparent backdrop-blur-sm">
                    {item.quote}
                  </p>
                </div>
                <LazyLoadImage
                  className="object-cover h-72 md:h-[480px] md:w-auto aspect-square"
                  src={item.src}
                  width="960"
                  height="480"
                  alt={item.alt}
                />
                <Link
                  to={item.link}
                  className="absolute bottom-0 z-[99] right-0 text-white bg-black bg-opacity-50 p-2 rounded-tl-lg"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
          {/* End: Image Accordion Component */}
        </div>
      </main>
    </div>
  );
};

export default DesignServices;
