import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import AboutProfile from "../components/About/AboutProfile";
import Vision from "../components/About/Vision";
import MasonryGrid from "../components/About/MasonryGrid";
import ClientList from "../components/Common/ClientList";
import WorkFlow from "../components/About/WorkFlow";
import Map from "../components/About/Map";
import MapNew from "../components/About/MapNew";
import Wellfare from "../components/About/Wellfare";
import Awards from "../components/About/Awards";
import AddressCard from "../components/About/AddressCard";
import Team from "../components/About/Team";
import CeoSection from "../components/About/CeoSection";
import EnvironmentSection from "../components/About/EnvironmentSection";
import Whychoose from "../components/About/WhyChoose";
import OrganizationCulture from "../components/About/OrganizationCulture";
import WorkSafety from "../components/About/WorkSafety";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutProfile />
      <Vision />
      <Whychoose />
      <WorkFlow />
      <MapNew />
      <Wellfare />
      <CeoSection />
      <Team />
      <OrganizationCulture/>
      <WorkSafety/>
      <AddressCard />
      <EnvironmentSection />
      {/* <Awards /> */}
      <ClientList />
      <Map />
    </div>
  );
};

export default About;