import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.PNG", "**/*.png"],
  optimizeDeps: {
    include: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  base: "/react_portfolio/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});