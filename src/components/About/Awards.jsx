import React from "react";
import Heading from "../Common/Heading/Heading";

const Awards = () => {
  return (
    <div className="w-full lg:p-14">
      <Heading title="Awards" secTitle="We own and operate" />
      <div className="m-5 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:p-8 p-2 rounded-lg">
          <AwardCard
            text="Fastest growing web company of 2010"
            year="-Somebody"
          />
          <AwardCard text="Best looking Developers of 2011" year="-Somebody" />
          <AwardCard text="Best use of CSS ever, 2012" year="-Somebody" />
          <AwardCard
            text="Award for most overuse of awards, 2013"
            year="-Somebody"
          />
          <AwardCard
            text="Fastest growing web company of 2014"
            year="-Somebody"
          />
          <AwardCard text="Most innovative design, 2015" year="-Somebody" />
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({ text, year }) => {
  return (
    <figure className="relative cursor-pointer">
      <div className="flex flex-col items-center">
        <Trophy />
        <figcaption className="transition-all duration-500 opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.75)]">
          <p className="text-sm font-semibold text-center">
            {text}
            <br />
            <br />
            {year}
          </p>
        </figcaption>
      </div>
    </figure>
  );
};

// Updated Trophy component using an image
const Trophy = () => (
  <div className="trophy mx-auto w-full">
    <img
      src="/About/award.webp" // Replace with your trophy image path
      alt="Trophy"
      className="w-full h-auto rounded-md" // Adjust the height and maintain aspect ratio
    />
  </div>
);

export default Awards;
