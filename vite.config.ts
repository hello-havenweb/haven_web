import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          services: path.resolve(__dirname, 'services.html'),
          templates: path.resolve(__dirname, 'templates.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          nexus: path.resolve(__dirname, 'templates/nexus.html'),
          vintage: path.resolve(__dirname, 'templates/vintage.html'),
          lumi: path.resolve(__dirname, 'templates/lumi.html'),
          orbit: path.resolve(__dirname, 'templates/orbit.html'),
          nova: path.resolve(__dirname, 'templates/nova.html'),
          monarch: path.resolve(__dirname, 'templates/monarch.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
