import React from "react";
import Heading from "../Common/Heading/Heading";
import { WhychooseData } from "../../data/HomeData";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Whychoose = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-8 md:py-16 max-sm:px-4 max-sm:py-16 lg:py-16 lg:px-6">
      <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="1800">
   
          <Heading title="Why Choose" secTitle="Mekark" />
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="2000">

            <LazyLoadImage
              className="w-full rounded-lg aspect-square"
              src="/Home/why-choose.jpeg"
              alt="can_help_banner"
            />
        </div>

        {/* Feature Cards Section */}
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          {WhychooseData.map((feature, index) => (
            <div key={index} className="w-full md:w-full sm:w-1/2 mb-4 px-2">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl" data-aos="fade-left" data-aos-duration="2500">

                  <h3 className="text-2xl font-bold text-md mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
