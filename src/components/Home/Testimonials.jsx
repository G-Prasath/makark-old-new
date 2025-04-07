import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Testimonials = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  const handlePreviousClick = () => {
    setTestimonialActive((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNextClick = () => {
    setTestimonialActive((prev) => (prev >= 3 ? 1 : prev + 1));
  };

  return (
    <div className="antialiased sans-serif   w-full">
      <div className="flex flex-col md:flex-row shadow-sm overflow-hidden w-full">
        <div className="relative w-full py-2 md:py-24 bg-[#d29f6a] md:w-1/2 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>

          <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-gray-100 font-semibold leading-tight tracking-tight mb-0 z-20" data-aos="zoom-in-right" data-aos-duration="1500">

            <span className="md:block">What Our</span>
            <span className="md-block">Customers</span>
            <span className="block">Are Saying!</span>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button
              className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={handlePreviousClick}
            >
              &#8592;
            </button>
            <button
              className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={handleNextClick}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-gray-100 md:w-1/2 w-full" data-aos="zoom-in-left" data-aos-duration="2000">
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>

            <div className="h-full relative z-10">
              <div
                className={`${testimonialActive === 1 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 text-justify serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-xl">
                Due to our requirement of PEB construction, we chose Mekark and the team was really good. Together they spent much time and delicate efforts in order to build the whole structure and to fulfill our requirements. They delivered it on time and to quality of work they did was exceptional. We were also happy with their professional attitude and non-problematic approach to work done. We are really pleased & glad to suggest them for having excellent services in quality PEB construction work.
                </p>
              </div>

              <div
                className={`${testimonialActive === 2 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 text-justify serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-xl">
                Selecting Mekark for our warehouse construction was a perfect decision. The team was very cautious of our specifications and came up with an area that fulfilled its purpose and had the potential for expansion. They had a clear structure, communicated with us often, and worked efficiently to meet the deadline. The final outcome was even better, and now we have a reliable space for our business. The quality of their work can actually do all the talking. All was smooth and their knowledge enhanced our experience to perform a lot better. Their professionalism and adherence to quality in their work are some of the aspects we highly appreciate.

                </p>
              </div>

              <div
                className={`${testimonialActive === 3 ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 text-justify serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-xl">
                Mekark was a pleasure to work with when constructing our factory. The team was effective and careful at tackling every facet to make sure structure was perfect for all of our needs. They provided good recommendations considering the specific ways of utilizing the space and were very willing to help answering our questions. The project remained affordable, and for that, we thank you a lot for a great job well done! 
                </p>
              </div>
            </div>

            <div className="flex my-4 justify-center items-center">
              {["JD", "WD", "JW"].map((label, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialActive(index + 1)}
                  className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2
                  ${
                    testimonialActive === index + 1
                      ? "h-16 w-16 opacity-100 bg-[#d29f6a] text-white"
                      : "h-12 w-12 opacity-25 bg-indigo-300 text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              {testimonialActive === 1 && (
                <div className="text-center">
                  <div className="block font-semibold text-gray-900 text-lg">
                  Manikandan
                  </div>
                  <div className="block text-gray-700 italic">Project Manager</div>
                </div>
              )}
              {testimonialActive === 2 && (
                <div className="text-center">
                  <div className="block font-semibold text-gray-900 text-lg">
                  RajKumar
                  </div>
                  <div className="block text-gray-700 italic">Managing Director</div>
                </div>
              )}
              {testimonialActive === 3 && (
                <div className="text-center">
                  <div className="block font-semibold text-gray-900 text-lg">
                  Dhanush
                  </div>
                  <div className="block text-gray-700 italic">Architect</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
