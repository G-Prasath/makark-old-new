import React from 'react'
import Heading from '../Common/Heading/Heading'

const PrimaryFrameStructure = ({data}) => {
  
  return (
    <div className="w-full sec-padding">
      <Heading title="Primary Frame Structures" secTitle="Work Flows" />
      <div className="w-full mt-5" data-aos="flip-up" data-aos-duration="800">
        <img className="w-full md:h-[500px]" src={data.imgUrl} alt="Images" />
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="md:w-3/4 w-full md:text-center text-justify text-md opacity-[.9]">
          {data.para}
        </p>
      </div>
    </div>
  );
}

export default PrimaryFrameStructure
