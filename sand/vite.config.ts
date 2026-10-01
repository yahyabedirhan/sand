import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  plugins: [react(), tailwindcss()],
  server: {
    port: 43817,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/docs/vitest.setup.ts",
  },
});
