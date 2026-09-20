import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import path from "node:path";
import { defineConfig } from "vite";

const require = createRequire(import.meta.url);
const sandRoot = path.dirname(require.resolve("sand/package.json"));

export default defineConfig({
  resolve: {
    alias: { "@": path.join(sandRoot, "src") },
    dedupe: ["react", "react-dom"],
  },
  plugins: [react(), tailwindcss()],
  server: {
    port: 5198,
    fs: { allow: [path.resolve(import.meta.dirname, "..")] },
  },
});
