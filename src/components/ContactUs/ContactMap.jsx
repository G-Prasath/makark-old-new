import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full aspect-video md:h-[80vh] mt-10 border-2 border-[#d2ecfd]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.985461535976!2d80.2122806!3d13.0359031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266de74ad88a3%3A0xd842d88783c1bd4!2sAshok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1726813255662!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
