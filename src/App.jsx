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
import WarehouseShed from "./pages/WarehouseShed";
import IndustrialShed from "./pages/IndustrialShed";
import FactoryBuildings from "./pages/FactoryBuildings";
import InstitutionalBuilding from "./pages/InstitutionalBuilding";
import CivilConstruction from "./pages/CivilConstruction";
import Solor from "./pages/Solor";
import Tensile from "./pages/Tensile";
import Mlcp from "./pages/Mlcp";
import Manufacturing from "./pages/Manufacturing";



// import SpaceFrameStructure from "./pages/SpaceFrameStructure";
// import Mep from "./pages/Mep";
// import DesignServices from "./pages/DesignServices";

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

import Aos from "aos";
import "aos/dist/aos.css";
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


  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <About /> },
  
    // Products / Services
    { path: '/pre-engineered-building-manufacturer-company-chennai', element: <Peb /> },
    { path: '/multi-storey-building-manufacturer', element: <MultistorySteelBuilding /> },
    { path: '/warehouse-shed-manufacturer-chennai', element: <WarehouseShed /> },
    { path: '/peb-industrial-shed-supplier', element: <IndustrialShed /> },
    { path: '/factory-building-manufacturer', element: <FactoryBuildings /> },
    { path: '/civil-construction-company-chennai', element: <CivilConstruction /> },
    { path: '/solar-panel-manufacturer-and-installer', element: <Solor /> },
    { path: '/Institutional-building-construction', element: <InstitutionalBuilding /> },
    { path: '/multi-level-car-parking-system-manufacturer-company-chennai', element: <Mlcp /> },
    { path: '/tensile-fabric-roofing', element: <Tensile /> },
    { path: '/manufacturing', element: <Manufacturing /> },

    // { path: '/mep-consultant-chennai', element: <MEP /> },
    // { path: '/architectural-design-detailing-drafting-chennai', element: <DesignService /> },
    // { path: '/space-frame-structure-building', element: <SpaceFrameStructure /> },

  
    // Blog, Media, Info
    { path: '/blog', element: <Blog /> },
    { path: '/gallery', element: <ProjectGallery /> },
    { path: '/videos', element: <ProjectVideos /> },
    { path: '/infographics', element: <Infographics /> },
  
    // Contact
    { path: '/contact-us', element: <Contact /> },
  
    // Optional Events (commented)
    // { path: '/chennai-events', element: <ChennaiEvents /> },
    // { path: '/madurai-events', element: <MaduraiEvents /> },
    // { path: '/office-celebration', element: <OfficeCelibrations /> },
  ];
  
  

  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router basename="/">
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                {
                  routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))
                }
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
