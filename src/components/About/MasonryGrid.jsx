import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { ProductCardData } from "../../data/HomeData";

const MasonryGrid = () => {

  // Breakpoints for Masonry
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  // State to track the currently revealed card
  const [revealedCardIndex, setRevealedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    // If the clicked card is already revealed, hide it; otherwise, reveal it
    setRevealedCardIndex(revealedCardIndex === index ? null : index);
  };


  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto -ml-4"
      columnClassName="pl-4 bg-clip-padding"
    >
      {ProductCardData.map((item, index) => (
        <div
          key={index}
          className="relative mb-4 overflow-hidden bg-white rounded shadow-lg"
          onMouseEnter={() => handleCardClick(index)}
          onMouseLeave={() => handleCardClick(null)}
        >
          <img src={item.imageUrl} alt="Grid item" className={`w-full h-auto`} />
            <div className="absolute top-4 right-3 px-2 py-1 text-white bg-black bg-opacity-70 text-sm">
              Services
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 bg-opacity-80 backdrop-filter backdrop-blur-md transition-transform duration-700 ease-in-out transform text-white ${
                revealedCardIndex === index ? "translate-y-0 duration-700" : "translate-y-full duration-500"
              }`}
            >
              <div className="text-center">
                <h1 className="text-lg font-bold uppercase">
                  {item.title}
                </h1>
                <p className="text-sm mt-2">{item.description}</p>
                <Link to={item.viewUrl} className="w-full flex justify-end items-center mt-2 text-sm font-semibold">Read More</Link>
              </div>
            </div>
          
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
