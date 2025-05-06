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
import Aos from "aos";
import "aos/dist/aos.css";
import ScrolltoTop from "./hooks/ScrolltoTop";

// Dynamically imported pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Peb = lazy(() => import("./pages/Peb"));
const MultistorySteelBuilding = lazy(() =>
  import("./pages/MultistorySteelBuilding")
);
const WarehouseShed = lazy(() => import("./pages/WarehouseShed"));
const IndustrialShed = lazy(() => import("./pages/IndustrialShed"));
const FactoryBuildings = lazy(() => import("./pages/FactoryBuildings"));
const InstitutionalBuilding = lazy(() =>
  import("./pages/InstitutionalBuilding")
);
const CivilConstruction = lazy(() => import("./pages/CivilConstruction"));
const Solor = lazy(() => import("./pages/Solor"));
const Tensile = lazy(() => import("./pages/Tensile"));
const Mlcp = lazy(() => import("./pages/Mlcp"));
const Manufacturing = lazy(() => import("./pages/Manufacturing"));
const SpaceFrameStructure = lazy(() =>
  import("./pages/SpaceFrameStructure")
);
const ProjectGallery = lazy(() => import("./pages/ProjectGallery"));
const ProjectVideos = lazy(() => import("./pages/ProjectVideos"));
const Infographics = lazy(() => import("./pages/Infographics"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Thankyou = lazy(() => import("./pages/Thankyou"));

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
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    {
      path: "/pre-engineered-building-manufacturer-company-chennai",
      element: <Peb />,
    },
    {
      path: "/multi-storey-building-manufacturer",
      element: <MultistorySteelBuilding />,
    },
    {
      path: "/warehouse-shed-manufacturer-chennai",
      element: <WarehouseShed />,
    },
    { path: "/peb-industrial-shed-supplier", element: <IndustrialShed /> },
    { path: "/factory-building-manufacturer", element: <FactoryBuildings /> },
    {
      path: "/civil-construction-company-chennai",
      element: <CivilConstruction />,
    },
    { path: "/solar-panel-manufacturer-and-installer", element: <Solor /> },
    {
      path: "/Institutional-building-construction",
      element: <InstitutionalBuilding />,
    },
    {
      path: "/multi-level-car-parking-system-manufacturer-company-chennai",
      element: <Mlcp />,
    },
    { path: "/tensile-fabric-roofing", element: <Tensile /> },
    { path: "/manufacturing", element: <Manufacturing /> },
    {
      path: "/space-frame-structure-building",
      element: <SpaceFrameStructure />,
    },
    { path: "/blog", element: <Blog /> },
    { path: "/gallery", element: <ProjectGallery /> },
    { path: "/videos", element: <ProjectVideos /> },
    { path: "/infographics", element: <Infographics /> },
    { path: "/contact-us", element: <Contact /> },
  ];

  return (
    <ScrollProvider>
      <HelmetProvider>
        <Router basename="/">
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>
              <Route element={<NoNavbarLayout />}>
                <Route path="/thank-you" element={<Thankyou />} />
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