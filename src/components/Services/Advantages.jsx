import Heading from "../Common/Heading/Heading";
import { CiStar } from "react-icons/ci";

const Advantages = ({ data }) => {
  return (
    <div className="sec-padding">
      <div className="col-md-10">
        <Heading title="Advantages" secTitle="Benifites" />
      </div>

      {data.map((item, index) => (
        <div key={index} className="flex items-center sm:gap-5 gap-3 my-5 max-sm:divide-y max-sm:divide-blue-200 ">
          <CiStar className="text-[80px] max-sm:hidden" />
          <p className="leading-loose text-justify">
           {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
