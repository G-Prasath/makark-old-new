import React, { useState } from "react";
import Heading from "../Common/Heading/Heading";

const PebFAQ = ({data}) => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-8 bg-gray-100 ">
      <Heading title="Frequently Asked Questions" secTitle="FAQ" />
      <div className="w-full max-w-6xl space-y-4 my-4">
        {(showAll ? data : data.slice(0, 4)).map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md transition-all duration-300 ${
              activeIndex === index ? 'ring-2 ring-[#305764]' : ''
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer px-5 py-4"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-base font-semibold text-gray-800">{faq.question}</p>
              <span className="w-7 h-7 flex items-center justify-center bg-green-100 text-[#305764] rounded-full font-bold text-lg">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`px-5 pt-0 text-gray-700 text-sm leading-relaxed overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PebFAQ;
