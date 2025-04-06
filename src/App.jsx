import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Common Components
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer";
import { ScrollProvider } from "./hooks/ScrollContext";
import Cta from "./components/Common/Cta";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

import Peb from "./pages/Peb";
import MultistorySteelBuilding from "./pages/MultistorySteelBuilding";
// import SpaceFrameStructure from "./pages/SpaceFrameStructure";
import WarehouseShed from "./pages/WarehouseShed";
import IndustrialShed from "./pages/IndustrialShed";
import FactoryBuildings from "./pages/FactoryBuildings";
import InstitutionalBuilding from "./pages/InstitutionalBuilding";
import CivilConstruction from "./pages/CivilConstruction";
// import Mep from "./pages/Mep";
// import DesignServices from "./pages/DesignServices";
// import Mlcp from "./pages/Mlcp";

// import PressurePart from "./pages/PressurePart";
// import NonPressurePart from "./pages/NonPressurePart";
// import StorageUnit from "./pages/StorageUnit";

import ProjectGallery from "./pages/ProjectGallery";
import ProjectVideos from "./pages/ProjectVideos";
import Infographics from "./pages/Infographics";
import Blog from "./pages/Blog";

// import ChennaiEvents from "./pages/ChennaiEvents";
// import OfficeCelibrations from "./pages/OfficeCelibrations";
// import MaduraiEvents from "./pages/MaduraiEvents";

import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Manufacturing from "./pages/Manufacturing";

import Aos from "aos";
import "aos/dist/aos.css";
// import Solor from "./pages/Solor";
import ScrolltoTop from "./hooks/ScrolltoTop";

const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <ScrolltoTop />
    <Cta />
    <Footer />
  </div>
);

const NoNavbarLayout = () => (
  <div>
    <Outlet />
  </div>
);

const SkeletonLoader = () => (
  <div>
    <Skeleton height={40} width={100} style={{ marginBottom: 20 }} />
    <Skeleton width="100%" height="50vh" style={{ marginBottom: 20 }} />
    <Skeleton width="100%" height="50vh" />
  </div>
);

const App = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router basename="/">
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />

                <Route
                  path="/pre-engineered-building-manufacturer-company-chennai"
                  element={<Peb />}
                />
                <Route
                  path="/multi-storey-building-manufacturer"
                  element={<MultistorySteelBuilding />}
                />
                {/* <Route
                  path="/space-frame-structure-building"
                  element={<SpaceFrameStructure />}
                /> */}
                <Route
                  path="/warehouse-shed-manufacturer-chennai"
                  element={<WarehouseShed />}
                />
                <Route
                  path="/peb-industrial-shed-supplier"
                  element={<IndustrialShed />}
                />
                <Route
                  path="/factory-building-manufacturer"
                  element={<FactoryBuildings />}
                />
                <Route
                  path="/institutional-building"
                  element={<InstitutionalBuilding />}
                />
                <Route
                  path="/civil-construction-company-chennai"
                  element={<CivilConstruction />}
                />


                {/* <Route path="/mep-consultant-chennai" element={<Mep />} />
                <Route
                  path="/architectural-design-detailing-drafting-chennai"
                  element={<DesignServices />}
                />
                <Route
                  path="/multi-level-car-parking-system-manufacturer-company-chennai"
                  element={<Mlcp />}
                />
                <Route path="solar-power-plant" element={<Solor />} /> 
                
                <Route
                  path="/pressure-parts-equipment-accessories"
                  element={<PressurePart />}
                />
                <Route
                  path="/non-pressure-parts-equipment-accessories"
                  element={<NonPressurePart />}
                />
                <Route
                  path="/storage-parts-equipment-accessories"
                  element={<StorageUnit />}
                /> */}

                <Route path="/manufacturing" element={<Manufacturing />} />


                <Route path="/blog" element={<Blog />} />
                <Route path="/gallery" element={<ProjectGallery />} />
                <Route path="/videos" element={<ProjectVideos />} />
                <Route path="/infographics" element={<Infographics />} />

                {/* <Route path="/chennai-events" element={<ChennaiEvents />} />
                <Route path="/madurai-events" element={<MaduraiEvents />} />
                <Route path="/office-celebration" element={<OfficeCelibrations />} /> */}

                <Route path="/contact-us" element={<Contact />} />
                {/* <Route path="/career" element={<Careers />} /> */}
                {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
              </Route>
              <Route element={<NoNavbarLayout />}>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ScrollProvider>
  );
};

export default App;
