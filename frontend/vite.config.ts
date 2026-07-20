import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// TODO: Samira Patel — add proxy config for the backend API in dev,
// and configure build output / env handling as needed.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    // TODO: proxy: { "/api": "http://localhost:8000" }
  },
});
