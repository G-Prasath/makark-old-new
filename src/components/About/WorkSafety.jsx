import React from "react";
import Heading from "../Common/Heading/Heading";

const WorkSafety = () => {
  const albums = [
    {
      title: "Site Safety Training",
      description:
        "Every employee and site worker should be given adequate safety training to learn the risks involved in the performance of his duties as well as procedures to follow when accidents occur.",
    },
    {
      title: "Personal Protective Equipment (PPE)",
      description:
        "Enforce that construction workers wear mandatory personal protective equipments like helmets, gloves, eye protection glasses and high visibility vests to reduce accidents and injuries on site.",
    },
    {
      title: "Safety Signage",
      description:
        "Install safety signs well and prominently where there are constructions so that people working there and the other end visitors have something that will warn them of hazards such as overhead loads, restricted areas, or places that are wet.",
    },
    {
      title: "Fall Protection Systems",
      description:
        "Use of ropes and nets in steel structure construction area particularly in region where workers are often at high risk of falling from great heights.",
    },
    {
      title: "Fire Safety Protocols",
      description:
        "Provide the site with fire fighting equipment, develop and map out the emergency exits and provide staff with directions on how to go about fighting fire or any other fire-related emergency.",
    },
    {
      title: "First Aid Readiness",
      description:
        "Make sure first aid kits are properly stocked on the workplace and ensure workers are trained to handle simplicity injuries in the meantime.",
    },
    {
      title: "Emergency Response Plan",
      description:
        "Create a set of regulatory actions which has to contain the procedures for using emergency calls, escaping from the building and numbering all people on the territory .",
    },
    {
      title: "Proper Material Handling",
      description:
        "The employer should educate the workers on right methods of lifting, and on how to use tools used in moving objects to avoid strain or injury.",
    },
  ];
  return (
    <div className="sec-padding">
      <Heading title="Work Safety" secTitle={`Measurements`} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
        {albums.map((album, index) => (
          <div
            key={index}
            className="bg-white shadow-md lg:p-5 p-2 grid grid-cols-1 items-center"
          >
            <div
              className="album__details pl-4 w-full"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <h2 className="font-pacifico text-xl font-semibold">
                {album.title}
              </h2>
              <hr className="mt-4" />
              <p className="text-md text-slate-900 mt-4 text-justify leading-relaxed">
                {album.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSafety;
