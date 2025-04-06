import React from "react";

const OfficesSection = () => {
  return (
    <section className="bg-gray-50 p-10 lg:p-20 pt-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center mt-28 max-sm:mt-3">
        {/* Left Side */}

        <div className="flex flex-col items-center">
          {/* Replace with actual image */}
          <img
            src="https://img.freepik.com/free-photo/view-graphic-3d-building_23-2150849113.jpg?t=st=1727071913~exp=1727075513~hmac=bacc9a0f7501bd399887a7890e55e3811f3c8b99134326b6a5e231de3b70a32d&w=740"
            alt="Our Team"
            className="w-full max-w-md object-cover rounded-lg"
          />
          <p className="mt-4 text-sm text-gray-500 italic">
            We are here for you
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <h4 className="uppercase text-sm font-bold tracking-wide text-gray-700"></h4>
          <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 text-justify">
            We work with over 30 top-tier brands and industry leaders.
            We could also work with you!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                {/* Replace with actual icon/image */}
                <img
                  src="/Contact/chennai.png"
                  alt="Lisbon"
                  className="mx-auto w-20"
                />
              </div>
              <h3 className="font-bold text-lg">Chennai</h3>
              <p className="text-sm">
                Lorem, LoremIpsum <br /> LoremIpsumlorem 7/1 <br /> 44 1793 123
                456 <br /> bridge@example.com
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                {/* Replace with actual icon/image */}
                <img
                  src="/Contact/madurai.png"
                  alt="Barcelona"
                  className="mx-auto w-20"
                />
              </div>
              <h3 className="font-bold text-lg">Madurai</h3>
              <p className="text-sm">
                Lorem, LoremIpsum <br /> LoremIpsumlorem 7/1 <br /> 44 1793 123
                456 <br /> bridge@example.com
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                {/* Replace with actual icon/image */}
                <img
                  src="/Contact/clock.png"
                  alt="Amsterdam"
                  className="mx-auto w-20"
                />
              </div>
              <h3 className="font-bold text-lg">Tirunelveli</h3>
              <p className="text-sm">
                Lorem, LoremIpsum <br /> LoremIpsumlorem 7/1 <br /> 44 1793 123
                456 <br /> bridge@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
