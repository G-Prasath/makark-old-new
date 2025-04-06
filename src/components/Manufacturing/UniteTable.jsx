import React from "react";

const UniteTable = () => {
  return (
    <div className="container mx-auto my-10 sec-padding">
      <div className="flex flex-wrap">
        {/* First section with text and image */}
        <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col justify-center">
          <p className="text-2xl sm:text-3xl font-semibold mb-4">
            Unit <span className="text-[#e59350]">1</span>
          </p>
          <table className="min-w-full bg-white">
            <tbody data-aos="zoom-out-up" data-aos-duration="700">
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Year
                </td>
                <td className="border px-4 py-2 text-gray-600">2009</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Capacity
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  10,000 (Per year)
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Type
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  Cut to Length (CTL) Slitting, Deck Sheeting, Purlins & Girts,
                  Roof & Wall Sheeting
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="w-full md:w-1/2 p-0 text-center"
          data-aos="flip-left"
          data-aos-duration="800"
        >
          <img
            src="/Manufacturing/unit-1.webp"
            className="w-full"
            alt="Unit-1"
          />
        </div>

        {/* Second section with image and text */}
        {/* <div
          className="w-full md:w-1/2 max-md:order-2 p-0 text-center"
          data-aos="flip-right"
          data-aos-duration="800"
        >
          <img
            src="/Manufacturing/unit-2.webp"
            className="w-full"
            alt="Unit-2"
          />
        </div>
        <div className="w-full md:w-1/2 max-md:order-1 p-4 sm:p-5 flex flex-col justify-center">
          <p className="text-2xl sm:text-3xl font-semibold mb-4">
            Unit <span className="text-[#e59350]">2</span>
          </p>
          <table className="min-w-full bg-white">
            <tbody data-aos="zoom-out-up" data-aos-duration="700">
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Year
                </td>
                <td className="border px-4 py-2 text-gray-600">2015</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Capacity
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  25,000 (Per year)
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Type
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  Cut to Length (CTL) Slitting, Deck Sheeting, Purlins & Girts,
                  Roof & Wall Sheeting
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* Thired section with text and image */}
        {/* <div className="w-full md:w-1/2 p-4 sm:p-5 flex flex-col justify-center">
          <p className="text-2xl sm:text-3xl font-semibold mb-4">
            Unit <span className="text-[#e59350]">3</span>
          </p>
          <table className="min-w-full bg-white">
            <tbody data-aos="zoom-out-up" data-aos-duration="700">
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Year
                </td>
                <td className="border px-4 py-2 text-gray-600">2021</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Capacity
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  35,000 (Per year)
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-gray-600 font-semibold">
                  Type
                </td>
                <td className="border px-4 py-2 text-gray-600">
                  Cut to Length (CTL) Slitting, Deck Sheeting, Purlins & Girts,
                  Roof & Wall Sheeting
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="w-full md:w-1/2 p-0 text-center"
          data-aos="flip-left"
          data-aos-duration="800"
        >
          <img
            src="/Manufacturing/unit-3.webp"
            className="w-full"
            alt="Unit-3"
          />
        </div> */}
      </div>
    </div>
  );
};

export default UniteTable;
