import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG', '**/*.png'],
  optimizeDeps: {
    include: ['@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons'],
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    }
    // port: 3002,
    // open: true,
  },
});