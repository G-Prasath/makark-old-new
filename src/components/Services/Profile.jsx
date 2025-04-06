import React from "react";

const Profile = ({data}) => {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-5 md:py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className="sm:text-3xl text-xl w-full mb-4 font-medium text-[#305764]">
              {data.heading}
            </h1>
            {
              data.para.map((item, index) => (
                <p key={index} className="mb-8 leading-relaxed text-justify">
                  {item}
                </p>
              ))
            }
           
          </div>
          <div className="md:w-1/2 w-ful">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={data.img}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
