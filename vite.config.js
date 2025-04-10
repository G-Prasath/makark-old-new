import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createSitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSitemap({
      hostname: "https://www.mekark.com/",
      dynamicRoutes: [
        "/about-us",

        "/pre-engineered-building-manufacturer-company-chennai",
        "/multi-storey-building-manufacturer",
        "/warehouse-shed-manufacturer-chennai",
        "/peb-industrial-shed-supplier",
        "/factory-building-manufacturer",
        "/civil-construction-company-chennai",
        "/solar-panel-manufacturer-and-installer",
        "/Institutional-building-construction",
        "/multi-level-car-parking-system-manufacturer-company-chennai",
        "/tensile-fabric-roofing",
        "/manufacturing",
        "/space-frame-structure-building",

        "/contact-us"
      ],
    }),
  ],
  build: {
    outDir: "dist", // Default output directory
  },
});
