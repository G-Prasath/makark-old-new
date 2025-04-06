import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GiProgression, GiPodiumWinner, GiUnlocking } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

import Heading from "../Common/Heading/Heading";

function Whychoose() {
  return (
    <div className="sm:mt-[100px]">
      <Heading title={`Why Choose`} secTitle={`Mekark`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:px-10 p-5">
        <div
          className="bg-[#e59350] p-4 flex flex-col justify-between mb-4 md:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">
              Global Business Strategy
            </h2>
            <hr className="border-white w-1/2 mb-5" />

            <p className="text-lg text-white">
              We work beyond boundaries that makes use of global experiences and
              approaches to develop solutions in view of emerging market
              demands. The approach adopted guarantees value to clients in all
              situations.
            </p>
          </div>
          <div className="flex justify-between items-end text-white">
            <p>Projects Established</p>
            <FaProjectDiagram className="w-10 h-5 text-white" />
          </div>
        </div>
        <div
          className="bg-[#305764] p-4 flex flex-col justify-between mb-4 md:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">
              On Time Project Delivery
            </h2>
            <hr className="border-white w-1/2 mb-5" />
            <p className="text-lg text-white">
              Time is an important factor of our service. The use of time
              management and planning gives us the ability to deliver projects
              within the time agreed by the client and still maintain quality.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-white">Happy Clients</p>
            <GiUnlocking className="w-10 h-9 text-white" />
          </div>
        </div>

        <div
          className="p-2 relative mb-4 md:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <img
            src="/About/why-choose.webp"
            alt="Old woman with a headscarf"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-[#305764] p-4 flex flex-col justify-between mb-4 lg:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">
              Passionately Committed Team
            </h2>
            <hr className="border-white w-1/2 mb-5" />
            <p className="text-white">
              We are the only organization that proudly has a team of
              hardworking professionals. We remain focused to achieve agreed
              client objectives to deliver the project with professionalism,
              vitality and initiative.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <GiProgression className="w-10 h-7 text-white" />
          </div>
        </div>
        <div
          className="bg-gray-100 p-4 flex flex-col justify-between mb-4 lg:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold text-[#305764]">
            Excellence in Problem Solving
          </h2>
          <hr className="border-[#305764] w-1/2 mb-5" />
          <div className="flex justify-between items-end">
            <p className="text-[#305764]">
              Opportunities and risks are viewed creatively and threats are
              transformed into opportunities in this case. Our staff has years
              of experience handling kelp of issues that may arise because our
              operations run smoothly.
            </p>
            <GiPodiumWinner className="w-10 h-8 text-[#305764]" />
          </div>
        </div>
        <div
          className="bg-[#e59350] p-4 flex flex-col justify-between mb-4 lg:mb-0"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div>
            <h2 className="text-4xl font-bold text-white">
              Customer Loyalty & Transparency
            </h2>
            <hr className="border-white w-1/2 mb-5 mt-3" />
            <p className="text-white">
              Our relationships with clients are built on trust and honesty. As
              a result, our work is done with honesty and that the client base
              remains loyal and does not remain uninformed.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-white">Experts</p>
            <FaPeopleGroup className="w-10 h-6 text-white" />
          </div>
        </div>
        {/* <div className="bg-orange-400 p-4 flex flex-col justify-between">
            <p>Experienced Team-Oriented Organization</p>
            
            
            <p>support@this.com</p>
            </div> */}
      </div>
    </div>
  );
}

export default Whychoose;
