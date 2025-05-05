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

        "/contact-us",
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle React-related libs
          react: [
            "react",
            "react-dom",
            "react-router-dom",
            "react-helmet",
            "react-helmet-async",
          ],

          // Utility libraries
          utilities: ["lodash-es", "axios"],

          // UI and animation libraries
          ui: [
            "@splidejs/react-splide",
            "aos",
            "react-image-gallery",
            "react-loading-skeleton",
          ],

          // Form and validation related
          form: ["formik", "yup"],

          // Optional: combine smaller dependencies into one "vendor" chunk
          vendor: [
            "tslib",
            "prop-types",
            "tiny-warning",
            "invariant",
            "shallowequal",
            "object-assign",
            "deepmerge",
            "hoist-non-react-statics",
            "toposort",
            "property-expr",
            "react-side-effect",
            "tiny-case",
            "react-fast-compare",
            "scheduler",
            "react-is",
            "@remix-run/router",
          ],
        },
      },
    },
    outDir: "dist",
  },

});
