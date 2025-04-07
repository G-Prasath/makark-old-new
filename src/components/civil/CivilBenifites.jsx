import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";

const CivilBenifites = ({data}) => {

  return (
    <div className="max-w-screen-xl mx-auto border mt-10">
      <div className="mb-10 p-5 bg-gray-500 text-white">
        <h3 className="font-bold uppercase text-3xl text-center">
          Benefits Of Civil Constructions
        </h3>
      </div>

      <div className="mt-3 mb-10 text-gray-600 px-5">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div>
              <IoCheckboxOutline className="text-xl text-gray-500" />
            </div>
            <div>
              <p key={index} className="text-justify my-3">
                {item}
              </p>
            </div>
          </div>
        ))}

        <br />
      </div>
    </div>
  );
};

export default CivilBenifites;
