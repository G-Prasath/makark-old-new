import React from "react";

const Diffrence = ({data}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#e5f6eb] md:mb-20 mb-10">
      <div className="flex flex-col md:flex-row justify-center w-full">
        <div className="bg-[#2e4750] w-full md:[clip-path:polygon(0_0,_100%_0%,_94%_100%,_0_100%)] inline-flex items-center md:p-12 p-8">
          <ul>
            {data.lSide.map((lItem, lIndex) => (
              <li
                key={lIndex}
                className="text-slate-200 text-md mb-4 list-disc text-justify"
              >
                {lItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#e5f6eb] w-full inline-flex items-center md:p-12 p-8">
          <ul>
            {data.rSide.map((rItem, rIndex) => (
              <li key={rIndex} className="text-md mb-4 list-disc text-justify">
                {rItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Diffrence;
