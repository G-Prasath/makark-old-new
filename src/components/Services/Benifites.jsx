import React from "react";
import Heading from "../Common/Heading/Heading";

const Benifites = ({data}) => {

  return (
    <>
      <Heading title={"Benifites"} secTitle={`Advantages`} />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:p-10 p-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="card relative bg-[#e5f6eb] w-full max-w-[500px] min-h-[200px] rounded-xl p-8 pt-24 text-[#2e4750]"
          >
            <div
              className="index absolute top-0 left-0 w-20 aspect-square bg-lightgreen rounded-br-[35%]"
              style={{ backgroundColor: "lightgreen" }}
              data-index={index}
            >
              <span
                className="flex justify-center items-center text-[#2e4750] text-3xl font-semibold"
                style={{
                  position: "absolute",
                  inset: 0,
                  content: `"${index}"`,
                }}
              >
                {index + 1}
              </span>

              {/* Top-right curve */}
              <span
                className="index__curve top-right absolute w-4 aspect-square"
                style={{
                  backgroundColor: "lightgreen",
                  left: "100%",
                  top: 0,
                }}
              >
                <span
                  className="absolute w-full h-full rounded-full"
                  style={{
                    backgroundColor: "#c4f1d4",
                    borderRadius: "50%",
                    width: "200%",
                    height: "200%",
                  }}
                ></span>
              </span>

              {/* Bottom-left curve */}
              <span
                className="index__curve bottom-left absolute w-4 aspect-square"
                style={{
                  backgroundColor: "lightgreen",
                  left: 0,
                  top: "100%",
                }}
              >
                <span
                  className="absolute w-full h-full rounded-full"
                  style={{
                    backgroundColor: "#c4f1d4",
                    borderRadius: "50%",
                    width: "200%",
                    height: "200%",
                  }}
                ></span>
              </span>
            </div>

            <div className="content">
              <p className="text-justify font-semibold  ">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Benifites;
