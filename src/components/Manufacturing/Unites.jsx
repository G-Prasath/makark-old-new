import React from "react";

const Units = ({data}) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:gap-x-10 gap-y-20 max-h-max my-20 sec-padding">
      {data.map((item, index) => (
        <div key={index}>
          <div className="relative flex max-w-full p-10 flex-col items-start rounded-[20px] hover:border-2 hover:border-[#e5f6eb] bg-white transition-all duration-1000 text-decoration-none group hover:bg-[#23C55E] shadow-lg h-full">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-14 h-14 rounded-full bg-[#e5f6eb]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 28 29"
                height="29"
                width="28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="#23C55E"
                  d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="#23C55E"
                  d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#7e8882] text-center text-md leading-6 transition-all duration-400 group-hover:text-white mt-3 font-semibold">
              {item}
            </div>
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex items-center justify-center h-[35px] px-7 rounded-full border border-[#23C55E] bg-[#e5f6eb] transition-all duration-200 hover:shadow-[0px_6px_10px_0px_rgba(35,197,94,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 18"
                height="18"
                width="19"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="#23C55E"
                  d="M3.51141 2.78405L14.9344 6.95805C15.4154 7.13405 15.4014 7.81905 14.9134 7.97605L9.68541 9.64905L8.01241 14.8771C7.85641 15.3651 7.17041 15.3791 6.99441 14.8981L2.82141 3.47405C2.66441 3.04405 3.08141 2.62705 3.51141 2.78405Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Units;
