import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "node:path";

// Static build for GitHub Pages; development keeps its original configuration.
export default defineConfig({
  base: "/Rabisco-Arquitetura/",
  plugins: [react(), tailwind()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src/web") } },
  build: { outDir: "dist", emptyOutDir: true },
});
