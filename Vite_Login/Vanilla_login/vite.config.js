import { defineConfig } from 'vite';

export default defineConfig({
  base: "./", // Ensures relative paths in `dist/`
  build: {
    outDir: "dist", // Output directory for production
    assetsDir: "assets", // Stores JS & CSS inside `assets/`
  },
  server: {
    port: 5173, // Development server port
    open: true, // Auto-opens browser
  },
  preview: {
    port: 5000, // Preview built files
  },
});

