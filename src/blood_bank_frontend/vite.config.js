import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import dotenv from "dotenv";
import envCompatible from "vite-plugin-env-compatible";
import react from "@vitejs/plugin-react";

// Load environment variables (assuming .env is in the same directory as vite.config.js)
dotenv.config();  // No path needed if .env is in the same directory

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", // Fix for missing 'global' (investigate the root cause later)
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  publicDir: "assets",
  plugins: [
    envCompatible(), // envCompatible plugin comes FIRST
    react(),         // react plugin comes SECOND
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
    ],
    dedupe: ["@dfinity/agent"], // Keep this if you need it
  },
});
