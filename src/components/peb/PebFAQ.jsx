import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Heading from "../Common/Heading/Heading";

const PebFAQ = ({data}) => {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col items-center justify-center md:py-28 py-10 px-5 bg-[#f5fbff]">
      <div className="bg-white rounded-3xl lg:p-12 w-full mx-auto">
        <Heading title="Frequently Asked Questions" secTitle="FAQ" />
        {data.map((faq, index) => (
          <details key={index} className="border-b border-blue-200 mb-4 p-4">
            <summary
              className="flex justify-between items-center cursor-pointer text-blue-900 text-lg"
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-2 transition-transform duration-200 ease-in-out">
                <AiOutlineDown
                  className={`transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </summary>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 bg-[#f5fbff] rounded-lg p-3">
                {faq.answer}
              </p>
            )}
          </details>
        ))}
      </div>
    </main>
  );
};

export default PebFAQ;
