import React from "react";
import "./css/Team.css";
import Heading from "../Common/Heading/Heading";
import { AddressData } from "../../data/AboutData";

const AddressCard = () => {
  return (
    <div className="my-10">
      <Heading title="Our Locations" />
      <section className="our-team-section w-full mb-10 sec-padding">
        <div className="">
          <div
            className="w-full row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5"
            data-aos="zoom-out-up"
            data-aos-duration="1000"
          >
            {AddressData.map((item, index) => (
              <div key={index} className="w-full">
                <div className="our-team">
                  <div className="pic">
                    <img
                      src={item.img}
                      alt={item.name}
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    />
                  </div>
                  <div
                    className="team-content"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    <h3 className="title">{item.name}</h3>
                    <span className="post">{item.post}</span>
                  </div>
                  <ul className="social">
                    <li>
                      <a
                        href={item.direction}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Navigation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressCard;
