import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Include PNG assets
  assetsInclude: ["**/*.PNG", "**/*.png"],

  // Include necessary dependencies
  optimizeDeps: {
    include: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  // Plugins for React
  plugins: [react()],
  // Adjust base for deployment in subdirectories (use your own path)
  base: "/react_portfolio/",

  // Build configuration to ensure output directory and filenames are correct
  build: {
    outDir: "dist", // Ensure output goes to the dist folder
    // We don't need to manually define the entry here, Vite should handle it automatically
  },

  // Server proxy for development
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
