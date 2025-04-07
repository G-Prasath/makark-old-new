import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import Heading from "../Common/Heading/Heading";

const CivilTechSpec = ({ data }) => {
  return (
    <div>
      <Heading title={`Construction`} secTitle={`Technical Specifications`} />

      <div className="max-w-screen-xl mx-auto border my-10">
        <div className="mt-3 text-gray-600 px-5">
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
    </div>
  );
};

export default CivilTechSpec;
