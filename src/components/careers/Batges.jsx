import React from "react";

const Batges = () => {
  const data = ["Accountend", "Developer", "Digital Marketing", "Manager", "Human Resources", "Helpers", "Team Lead", "Project Manager"];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="p-5 flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center gap-5 max-w-[500px] flex-wrap">
            {data.map((item, index) => (
              <div
              key={index}
                className="flex items-center space-x-1 text-sm px-2 bg-gray-200 text-gray-800 rounded-full"
                style={{ paddingTop: "0.2em", paddingBottom: "0.2rem" }}
              >
                <div
                  className="bg-gray-500 rounded-full"
                  style={{ width: "0.4rem", height: "0.4rem" }}
                ></div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batges;