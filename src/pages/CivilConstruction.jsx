import React from 'react'

import { CivilCostructionData as allData } from "../data/ServicesData";
import Profile from "../components/Services/Profile";
import { Helmet } from "react-helmet-async";
import {CivilConstruction_PageMeta as metaTags } from '../data/Metatags'
import PageBannerForm from "../components/Common/PageBannerForm";
import ServiceFormBanner from "../components/Services/ServiceFormBanner";
import CivilBenifites from '../components/civil/CivilBenifites';
import CivilApplications from '../components/civil/CivilApplications';
import Process from '../components/civil/Process';
import CivilTechSpec from '../components/civil/CivilTechSpec';
import CivilWhyChoose from '../components/civil/CivilWhyChoose';
import CivilFAQ from '../components/civil/CivilFAQ';
import CivilForm from '../components/civil/CivilForm';
import Gallery from "../components/Services/Gallery";

const CivilConstruction = () => {
  const pageName = "Civil Constructions";
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
        <PageBannerForm serviceName={pageName}/>
      </div>
      <Profile data={allData.profile} />
      <CivilBenifites data={allData.benifites} />
      <CivilApplications data={allData.Applications}/>
      <Process data={allData.Process}/>
      <CivilTechSpec data={allData.TechSpc}/>
      <CivilWhyChoose data={allData.whychoose}/>
      <Gallery data={allData.gallery} />
      <CivilFAQ data={allData.FAQ}/>
      <CivilForm/>
    </div>
  )
}

export default CivilConstruction
