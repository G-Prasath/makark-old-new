import React from "react";
import Heading from "../Common/Heading/Heading";

const ContactAddress = () => {
  const data = [
    {
      img: "/Contact/chennai.png",
      title: "Chennai",
    },
    {
      img: "/Contact/clock.png",
      title: "Bangalore",
    },
    {
      img: "/Contact/madurai.png",
      title: "Madurai",
    },
  ];
  return (
    <div>
      <div className="mt-10 mb-20 sec-padding">
        <h4 className="uppercase text-sm font-bold tracking-wide text-gray-700"></h4>
        <Heading title="Locations" secTitle="Reach Now" />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 mt-10">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center  flex-col w-full h-full border border-slate-100 p-5 shadow-md hover:shadow-lg">
              <div className="mb-4">
                {/* Replace with actual icon/image */}
                <img
                  src={item.img}
                  alt="Lisbon"
                  className="mx-auto w-20"
                />
              </div>
              <h3 className="font-bold text-lg my-3">{item.title}</h3>
              <p className="text-[16px] text-center md:max-w-[70%] w-full">{item.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
