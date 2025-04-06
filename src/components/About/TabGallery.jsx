import React, { useState } from "react";

const images = [
  {
    src: "/About/Event-1.webp",
  },
  {
    src: "/About/Event-2.webp",
  },
  {
    src: "/About/Event-3.webp",
  },
  // Add more images as needed...
];

const TabGallery = () => {
  const [popup, setPopup] = useState(null);

  const openPopup = (index) => {
    setPopup(index);
  };

  const closePopup = () => {
    setPopup(null);
  };

  const prevImage = () => {
    setPopup((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setPopup((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative z-10 p-4 flex flex-wrap justify-between">
      {images.map((image, index) => (
        <figure
          key={index}
          className="w-full md:w-1/3 p-4 cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => openPopup(index)}
        >
          <img
            className="w-full h-auto"
            src={image.src}
            alt={`Image ${index + 1}`}
          />
        </figure>
      ))}

      {popup !== null && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 p-1 rounded-full"
              onClick={closePopup}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 18 18">
                <path d="M9,0.493C4.302,0.493,0.493,4.302,0.493,9S4.302,17.507,9,17.507S17.507,13.698,17.507,9S13.698,0.493,9,0.493z M12.491,11.491c0.292,0.296,0.292,0.773,0,1.068c-0.293,0.295-0.767,0.295-1.059,0l-2.435-2.457L6.564,12.56c-0.292,0.295-0.766,0.295-1.058,0c-0.292-0.295-0.292-0.772,0-1.068L7.94,9.035L5.435,6.507c-0.292-0.295-0.292-0.773,0-1.068c0.293-0.295,0.766-0.295,1.059,0l2.504,2.528l2.505-2.528c0.292-0.295,0.767-0.295,1.059,0s0.292,0.773,0,1.068l-2.505,2.528L12.491,11.491z" />
              </svg>
            </button>

            <figure className="text-center">
              <img
                className="max-w-full h-auto mx-auto"
                src={images[popup].src}
                alt={`Popup Image ${popup + 1}`}
              />
            </figure>

            {/* Previous Button */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
              onClick={prevImage}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5v10z" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
              onClick={nextImage}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M7 15l5-5-5-5v10z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabGallery;
