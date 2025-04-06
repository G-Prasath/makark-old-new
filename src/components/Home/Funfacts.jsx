import React, { useState, useEffect } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Funfacts = () => (
  <div
    className="flex my-10 bg-cover bg-center opacity-100"
    style={{
      backgroundImage: 'url("/Home/fun-fact-bg.avif")',
    }}
  >
    <div className="w-full px-6 md:px-12 py-8  flex flex-col md:flex-row items-center counter-card">
      {/* Left Section */}
      <div className="text-left md:w-1/2 md:px-8 py-4">
        <p
          className="md:text-5xl text-3xl font-bold mb-4 text-white max-md:leading-[36px]"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          Delivering the Best Global Industry Services.
        </p>
        <p
          className="text-lg mb-8 text-white"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          Mekark offers customized solutions to meet every commercial
          requirement and, being a leading PEB structure manufacturer,
          guarantees quality construction with quick installation.
        </p>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-center md:px-8 py-4">
        <div
          className="mb-8 p-10  lg:border border-white-500 border-t-0 border-r-0 rounded-bl-xl"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-4xl font-bold text-white">
            <Counter end={1200} duration={2} />+
          </h2>
          <p className="text-lg text-justify text-white">Peoples Employed</p>
        </div>
        <div
          className="mb-8 p-10  lg:border border-white-500 border-t-0 border-r-0 rounded-bl-xl"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2 className="text-4xl font-bold text-white">
            <Counter end={1500} duration={2} />+
          </h2>
          <p className="text-lg text-justify text-white">Projects Completed</p>
        </div>
        <div
          className="mb-8 p-10  lg:border border-white-500 border-t-0 border-r-0 rounded-bl-xl"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <h2 className="text-4xl font-bold text-white">
            <Counter end={80} duration={2} />+
          </h2>
          <p className="text-lg text-justify text-white">Excellence Awards</p>
        </div>
        <div
          className="p-10  lg:border border-white-500 border-t-0 border-r-0 rounded-bl-xl max-sm:mb-20"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h2 className="text-4xl font-bold text-white">
            <Counter end={100} duration={2} />%
          </h2>
          <p className="text-lg text-justify text-white">Satisfied Customers</p>
        </div>
      </div>
    </div>
  </div>
);

export default Funfacts;
