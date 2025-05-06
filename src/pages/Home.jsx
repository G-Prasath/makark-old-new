import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { HomePageMeta as metaTags } from "../data/Metatags";

// Dynamically import components
const Banner = React.lazy(() => import("../components/Home/Banner"));
const About = React.lazy(() => import("../components/Home/About"));
const ProductCards = React.lazy(() =>
  import("../components/Home/ProductCards")
);
const Whychoose = React.lazy(() => import("../components/Home/Whychoose"));
const DesignServices = React.lazy(() =>
  import("../components/Home/DesignServices")
);
const HomeForm = React.lazy(() => import("../components/Home/HomeForm"));
const Map = React.lazy(() => import("../components/Home/Map"));
const Testimonials = React.lazy(() =>
  import("../components/Home/Testimonials")
);
const ClientList = React.lazy(() => import("../components/Common/ClientList"));
const Blog = React.lazy(() => import("../components/Home/Blog"));
const ManufacturingUnit = React.lazy(() =>
  import("../components/Home/ManufacturingUnit")
);
const Funfacts = React.lazy(() => import("../components/Home/Funfacts"));
const ListofServiceCards = React.lazy(() =>
  import("../components/Home/ListofServiceCards")
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <link rel="preload" href="/Home/Banner-1.avif" as="image" />
        <link rel="preload" href="/Home/Banner-2.avif" as="image" />
        <link rel="preload" href="/Home/Banner-3.avif" as="image" />
      </Helmet>
      <Suspense fallback={<div />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <ListofServiceCards />
      </Suspense>
      <Suspense fallback={<div />}>
        <ManufacturingUnit />
      </Suspense>
      <Suspense fallback={<div />}>
        <ProductCards />
      </Suspense>
      <Suspense fallback={<div />}>
        <Funfacts />
      </Suspense>
      <Suspense fallback={<div />}>
        <DesignServices />
      </Suspense>
      <Suspense fallback={<div />}>
        <Whychoose />
      </Suspense>
      <Suspense fallback={<div />}>
        <Map />
      </Suspense>
      <Suspense fallback={<div />}>
        <HomeForm />
      </Suspense>
      <Suspense fallback={<div />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div />}>
        <ClientList />
      </Suspense>
      <Suspense fallback={<div />}>
        <Testimonials />
      </Suspense>
    </>
  );
};

export default Home;
