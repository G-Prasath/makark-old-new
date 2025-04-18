import React from "react";
import Heading from "../Common/Heading/Heading";

const ContactSupport = () => {
  return (
    <div className="2xl:container 2xl:mx-auto md:py-8 py-9 mt-10">
      <Heading title="Customer Support" secTitle="Feel Free Now" />

      {/* Grid container */}
      <div className="dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
        {/* Delivery Card */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3334 4H1.33337V21.3333H21.3334V4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Project Consultation
          </p>
          <p className="text-center leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Get expert guidance for your construction needs. Reach out for
            consultations and estimates.
          </p>
        </div>

        {/* Customer Care Card */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            24/7 Support
          </p>
          <p className="text-center leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Our team is available round the clock for inquiries. Call us at
            +91 97909 24754, <br/>Tel : 044 - 47709518
          </p>
        </div>

        {/* Recycle Card */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6667 1.3335L28.0001 6.66683L22.6667 12.0002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 14.6665V11.9998C4 10.5853 4.5619 9.22879 5.5621 8.2286C6.56229 7.22841 7.91885 6.6665 9.33333 6.6665H28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33333 30.6667L4 25.3333L9.33333 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28 17.3335V20.0002C28 21.4147 27.4381 22.7712 26.4379 23.7714C25.4377 24.7716 24.0812 25.3335 22.6667 25.3335H4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Sustainable Practices
          </p>
          <p className="text-center leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            We follow eco-friendly construction methods with responsible
            material usage and waste management.
          </p>
        </div>

        {/* Secure Payment Card */}
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Reliable Transactions
          </p>
          <p className="text-center leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Secure and transparent payment options ensuring trust and seamless
            processing for every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
