import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
const handleWhatsApp = () => {
  window.open(
    "https://wa.me/7200030862?text=Hi%20I%20need%20details%20about%20"
  );
};

const FloatingButtons = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="fixed bottom-[40%] right-4 z-[9999]">
        <button
          onClick={toggleForm}
          className="block lg:w-10 w-8 rounded-full mb-4 items-center justify-center shadow-md"
        >
          <img src="/Home/email.png" className="lg:w-10 w-8" alt="Email" />
        </button>
        <Link
          to="https://api.whatsapp.com/send?phone=9789859050"
          target="_blank"
          className="block lg:w-10 w-8 rounded-full items-center justify-center mb-4 shadow-md"
          onClick={handleWhatsApp}
        >
          <img src="/Home/whatsapp.png" className="lg:w-10 w-8" alt="WhatsApp" />
        </Link>
        <Link
          to="tel:+919789859050"
          className="block lg:w-10 w-8 rounded-full items-center justify-center shadow-md"
        >
          <img src="/Home/phone.png" className="lg:w-10 w-8" alt="Call" />
        </Link>
      </div>
      {showForm && <ContactForm onClose={toggleForm} />}
    </>
  );
};

export default FloatingButtons;