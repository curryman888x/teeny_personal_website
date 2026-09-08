import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Bare `npm run dev` hits localhost; under docker compose the backend is the
// `backend` service, passed in via VITE_PROXY_TARGET.
const proxyTarget = process.env.VITE_PROXY_TARGET ?? "http://localhost:8000";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Forward API calls to the FastAPI backend during development.
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
  },
});
