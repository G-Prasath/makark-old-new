import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5); // Initialize countdown seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1); // Decrease seconds by 1
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate(-1); // Redirect to the previous page
    }, 5000); // 3 seconds delay

    return () => {
      clearInterval(timer); // Cleanup interval
      clearTimeout(redirectTimer); // Cleanup timeout
    };
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        {/* Company Logo */}
        <div className="mb-6">
          <img
            src={`/Home/logo.png`}
            alt="Company Logo"
            className="mx-auto w-24 h-24 object-contain"
          />
        </div>
        {/* Thank You Message */}
        <h2 className="text-3xl font-bold text-[#3a5664] mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-4">
          Your submission has been received. We will get back to you shortly.
        </p>
        <p className="text-sm text-gray-500">
          You will be redirected to the previous page in <span className="font-bold text-[#3a5664]">{seconds}s</span>...
        </p>
      </div>
    </div>
  );
};

export default Thankyou;