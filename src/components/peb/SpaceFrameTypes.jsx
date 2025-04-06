import React from "react";
import Heading from "../Common/Heading/Heading";

const SpaceFrameTypes = ({data}) => {

  return (
    <div className="container mx-auto my-10 w-full sec-padding">
      {/* Event Item 1 */}
      <Heading title="Space Frame Structures" secTitle="Types" />

      {data.map((item, index) => (
        <div key={index} className={`mx-auto my-10 max-w-full`}>
          <div
            className={`flex max-md:flex-col ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }  `}
          >
            {/* Time Block */}
            <div
              className={`flex items-center justify-center text-white py-10 md:w-1/3 border-2 border-[#3d7588]`}
            >
              <div
                className="text-center"
                data-aos="flip-up"
                data-aos-duration="800"
              >
                <img src={item.imgUrl} alt="" className="aspect-video w-full" />
              </div>
            </div>

            {/* Event Details */}
            <div
              className={`flex flex-col justify-center md:w-2/3 border-2 border-[#3d7588] md:p-10 p-2`}
            >
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-left">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-5 max-md:text-md font-semibold uppercase border-b border-gray-200">
                          Attribute
                        </th>
                        <th className="py-3 px-5 max-md:text-md font-semibold uppercase border-b border-gray-200">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm font-semibold uppercase border-b border-gray-200">
                          Frame Type
                        </td>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm border-b border-gray-200">
                          {item.fType}
                        </td>
                      </tr>
                      <tr>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm font-semibold uppercase border-b border-gray-200">
                          Span Range
                        </td>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm border-b border-gray-200">
                          {item.sRange}
                        </td>
                      </tr>
                      <tr>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm font-semibold uppercase border-b border-gray-200">
                          Remarks
                        </td>
                        <td className="md:py-3 md:px-5 p-3 max-md:text-sm border-b border-gray-200">
                          {item.Remarks}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaceFrameTypes;