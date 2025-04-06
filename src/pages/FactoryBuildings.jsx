import React from "react";
import Profile from "../components/Services/Profile";
import WhyChoose from "../components/Services/WhyChoose";
import FAQ from "../components/Services/Faq";
import Gallery from "../components/Services/Gallery";
import Applications from "../components/Common/Applications";
import Benifites from "../components/Services/Benifites";
import ServiceForm from "../components/Services/ServiceForm";
// import Diffrence from "../components/Services/Diffrence";
import { Helmet } from "react-helmet-async";
import PageBannerForm from "../components/Common/PageBannerForm";
import ServiceFormBanner from "../components/Services/ServiceFormBanner";

import { FactoryBuildingsData as allData } from "../data/ServicesData";
import { FactoryShedBuilding_PageMeta as metaTags } from "../data/Metatags";

const FactoryBuildings = () => {
  const pageName = "Factory Buildings";
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <ServiceFormBanner data={allData.banner} location={pageName} />
      <div className="lg:hidden block">
        <PageBannerForm serviceName={pageName} />
      </div>
      <Profile data={allData.profile} />
      {/* <Diffrence data={allData.diffrencesData} /> */}
      <Benifites data={allData.benifites} />
      <WhyChoose data={allData.whychooseData} />
      <Applications data={allData.Applications} />
      <FAQ data={allData.Faqs} />
      <Gallery data={allData.gallery} />
      <ServiceForm serviceName={pageName} />
    </div>
  );
}

export default FactoryBuildings
