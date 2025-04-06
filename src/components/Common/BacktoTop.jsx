import React, { useState, useEffect } from "react";
// import '../assets/css/styles.css';

const BacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 3 blocks
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-10">
      <div
        className={`back-to-top-button ${isVisible ? "" : "hidden"} cursor-pointer flex items-center justify-center`}
        onClick={scrollToTop}
      >
        <div className="bg-red-900 w-full h-full"></div>
        <img src="/Home/up-arrow.png" alt="Home" className="animate-bounce w-8 border-2 border-dashed border-[#305764] p-[3px] rounded-full bg-white" />
      </div>
    </div>
  );
};

export default BacktoTop;
