import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/**/*.mp4', '**/public/**/*.mov', '**/public/**/*.webm'],
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
          if (id.includes('src/data/destinations.ts')) {
            return 'data-destinations';
          }
          if (id.includes('src/data/packages.ts') || id.includes('src/data/initialTourPackages.ts')) {
            return 'data-packages';
          }
          if (id.includes('src/data/articles.ts')) {
            return 'data-articles';
          }
        },
      },
    },
  },
})
