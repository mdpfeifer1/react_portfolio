import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.PNG", "**/*.png"],

  optimizeDeps: {
    include: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  // Plugins for React
  plugins: [react()],

  base: "/react_portfolio/",

  build: {
    outDir: "dist",
  },

  // Server proxy for development
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
