import React from "react";
import ContactSection from "../components/ContactUs/ContactSection";
import OfficesSection from "../components/ContactUs/OfficesSection";
import ContactBanner from "../components/ContactUs/ContactBanner";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactAddress from "../components/ContactUs/ContactAddress";
import ContactMap from "../components/ContactUs/ContactMap";
import ContactSupport from "../components/ContactUs/ContactSupport";
const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactForm/>
      <ContactSupport/>
      <ContactAddress/>
      <ContactMap/>

      {/* <OfficesSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default Contact;
