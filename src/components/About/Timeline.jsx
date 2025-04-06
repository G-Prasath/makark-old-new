import React from "react";
import "./css/Timeline.css";
import Heading from "../Common/Heading/Heading";
import { TimeLineData } from "../../data/AboutData";

const Timeline = () => {
  return (
    <div className="my-10 sm:mx-10 mx-2">
      <Heading title="Our Growth" secTitle="Company" />
      <div className=" my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {TimeLineData.map((item, index) => (
                <div
                  className="timeline"
                  key={index}
                >
                  <div className="timeline-content">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-t-lg aspect-video"
                    />
                    <div className="sec-padding">
                      <h2>{item.name}</h2>
                      <p>{item.year}</p>
                      <i className={item.icon}></i>
                      <p>{item.disc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
