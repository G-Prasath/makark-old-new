import React from "react";
import "./Heading.css";

const Heading = ({title, secTitle}) => {
  return (
    <div className="blog-head text-center">
    <p className="main-title uppercase max-md:text-xl">{title}</p>
    <p className="sec-title">{secTitle}</p>
  </div>
  );
};

export default Heading;
