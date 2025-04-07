import React from "react";

const Profile = () => {
  return (
    <div className="sec-padding md:my-10">
      <div className="">
        {/* Left content section */}
        <h1 className="mb-6 text-xl sm:text-4xl font-semibold text-center">
        How Pre-engineered building manufactured?
        </h1>
        <div
          className="w-full md:h-[70vh] aspect-square bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1730822003~exp=1730825603~hmac=5e25fa4666af8067937d03a914cd01f51a27b0031a646efb83dc571b519afef3&w=996)",
          }}
          data-aos="flip-up"
          data-aos-duration="800"
        ></div>

        {/* Right image section */}
        <div className="w-full p-3 sm:p-5">
          <div className="sm:p-5">
            <p className="text-gray-600 my-3 leading-relaxed text-justify">
            Pre-engineered Buildings As the name implies, it involves the pre-engineering of structural parts. PEB supplies portions that vary in length depending on the requirement. These are steel-framed factories that are welded together on-site. It can easily be enlarged later by simply adding bays. Its high-quality painting system ensures extended durability and little maintenance. PEBs are typically used for industrial, commercial, and institutional buildings, such as warehouses, factories, schools, and retail buildings. PEBs are typically used for industrial, commercial, and institutional buildings, such as warehouses, factories, schools, and retail buildings. They can also be used for infrastructure projects such as airports, bridges, and railways.
            </p>

            <p className="text-gray-600 my-4 leading-relaxed text-justify">
            Pre-engineered buildings (PEBs) are structures that are designed, manufactured, and assembled off-site, typically in a factory, using advanced manufacturing techniques and technology. PEBs are constructed using pre-fabricated components that are assembled on-site, resulting in a faster, more efficient construction process compared to traditional construction methods.
            </p>

            <p className="text-gray-600 my-4 leading-relaxed text-justify">
            Mekark is a leading pre-engineered buildings (PEBs) manufacturer that offers customized and cost-effective solutions for commercial, industrial, and residential structures. With over 20 years of experience, their innovative designs and use of advanced technology ensure quality and timely delivery of projects. Mekark's commitment to sustainability and customer satisfaction makes them a reliable choice for PEBs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
