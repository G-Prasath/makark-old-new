import React from "react";

const Profile = () => {
  return (
    <div className="sec-padding md:my-10">
      <div className="">
        {/* Left content section */}
        <h1 className="mb-6 text-xl sm:text-4xl font-semibold text-center">
          Manufacturing <span className="text-[#e59350]">Units</span>
        </h1>
        <div
          className="w-full md:h-[70vh] aspect-square bg-cover bg-center"
          style={{
            backgroundImage: "url(/Manufacturing/Profile.webp)",
          }}
          data-aos="flip-up"
          data-aos-duration="800"
        ></div>

        {/* Right image section */}
        <div className="w-full p-3 sm:p-5">
          <div className="sm:p-5">
            <p className="text-gray-600 my-3 leading-relaxed text-justify">
              Mekark has a modern manufacturing facilities which can accommodate
              capacity and high-quality production for PEB. As one of the
              leading PEB manufacturing companies, our manufacturing plants uses
              the advanced technologies required manufacturing equipment. During
              the production process every production facility has to be
              designed to manage different operations including machining,
              welding, molding as well as casting. The facility enhances
              cutting, drilling, milling and grinding processes to guarantee
              that every component fits the requirements of Pre-Engineered
              Building structures.
            </p>

            <p className="text-gray-600 my-4 leading-relaxed text-justify">
              In every project, we ensure that quality control and quality
              assurance were well observed and that the manufacturing units will
              strictly follow safety and comprehensive compliance. This policy
              extends to our manufacturing process and the approach we use to
              assemble our structures for optimal stability. Mekark offers
              unparalleled manufacturing services for PEB construction through
              utilizing efficient manufacturing processes, advanced technology
              and commitment to being eco-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
