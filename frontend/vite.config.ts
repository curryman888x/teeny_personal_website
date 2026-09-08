import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "/" for a user site or custom domain; "/<repo>/" for a GitHub project
// page. The Pages deploy workflow sets VITE_BASE=/teeny_personal_website/.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});
