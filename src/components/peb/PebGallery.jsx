import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Heading from "../Common/Heading/Heading";

const PebGallery = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Convert string array to image gallery object format
  const galleryItems = data.map((src) => ({ original: src }));

  // Handle image click to open the lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Grid display of thumbnails */}

      <div className="md:mt-20 mt-10">
        <Heading title="Our Projects" secTitle="Gallery" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sec-padding">
          {data.map((item, index) => (
            <div key={index} className="p-4 cursor-pointer">
              <img
                src={item}
                onClick={() => openLightbox(index)}
                alt={`Thumbnail ${index + 1}`}
                className="rounded w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[99999]">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <div className="w-full md:w-3/4 lg:w-1/2">
            <ImageGallery
              items={galleryItems}
              startIndex={currentIndex}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              onSlide={(index) => setCurrentIndex(index)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PebGallery;
