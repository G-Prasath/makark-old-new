import React from "react";
import { Peb as allData } from "../data/ServicesData";
import Profile from "../components/peb/Profile";

import PebForm from "../components/peb/PebForm";
import WhyChoose from "../components/peb/WhyChoose";
import SpaceFrameTypes from "../components/peb/SpaceFrameTypes";
import PrimaryFrameStructure from "../components/peb/PrimaryFrameStructure";
import Acciories from "../components/peb/Acciories";
import PebApp from "../components/peb/PebApp";
import PebGallery from "../components/peb/PebGallery";
import PebTestimonials from "../components/peb/PebTestimonials";
import PebFAQ from "../components/peb/PebFAQ";
import ServiceFormBanner from "../components/Services/ServiceFormBanner";
import PageBannerForm from "../components/Common/PageBannerForm";

const Peb = () => {
  const PageName = "Pre Enginreed Buildings";
  return (
    <div>
      <ServiceFormBanner data={allData.banner} location={PageName} />
      <div className="lg:hidden block">
        <PageBannerForm serviceName={PageName} />
      </div>
      <Profile />
      <PrimaryFrameStructure data={allData.primaryFrames} />
      <SpaceFrameTypes data={allData.listofPrimaryFrames} />
      <PebApp data={allData.Applications} />
      <WhyChoose />
      {/* <Acciories data={allData.Acciories} /> */}
      <PebGallery data={allData.Gallery} />
      <PebFAQ data={allData.Faq} />
      <PebTestimonials />
      <PebForm data={PageName} />
    </div>
  );
};

export default Peb;
