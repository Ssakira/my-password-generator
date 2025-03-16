import { defineConfig } from "vite";

export default defineConfig({
    root: "src", // Set src as the root directory
    build: {
        outDir: "../dist", // Ensure build files are placed in dist
        emptyOutDir: true, // Clears dist before building
    },
});
