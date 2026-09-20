import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Vite",
  role: "The bundler and dev server for this app.",
  owns: "Vite owns the dev server and the production build. The React plugin and the Tailwind Vite plugin run here. Path alias @ resolves to src. The docs site is this Vite app.",
  code: `import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/docs/vitest.setup.ts",
  },
});`,
  language: "typescript",
  sourcePath: "sand/vite.config.ts",
  parts: [
    { name: "Dev server", href: "https://vite.dev/guide/" },
    { name: "Build", href: "https://vite.dev/guide/build" },
    {
      name: "HMR",
      href: "https://vite.dev/guide/features#hot-module-replacement",
    },
    { name: "React plugin", href: "https://vite.dev/plugins/" },
    {
      name: "Tailwind plugin",
      href: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      name: "Path alias",
      href: "https://vite.dev/config/shared-options#resolve-alias",
    },
    { name: "TypeScript", href: "https://vite.dev/guide/features#typescript" },
    { name: "CSS", href: "https://vite.dev/guide/features#css" },
    { name: "Static assets", href: "https://vite.dev/guide/assets" },
    { name: "Preview", href: "https://vite.dev/guide/static-deploy" },
    { name: "Rolldown", href: "https://vite.dev/guide/rolldown" },
    { name: "Config", href: "https://vite.dev/config/" },
  ],
  links: [
    { label: "Vite docs", href: "https://vite.dev" },
    { label: "Guide", href: "https://vite.dev/guide/" },
    { label: "Source on GitHub", href: "https://github.com/vitejs/vite" },
    { label: "Releases", href: "https://github.com/vitejs/vite/releases" },
  ],
  alternatives: [
    {
      name: "Webpack",
      comparison:
        "The older bundler most React apps grew up on. Heavier config, slower refresh. Vite is the template Sand started from.",
      href: "https://webpack.js.org",
      linkLabel: "webpack.js.org",
    },
    {
      name: "Parcel",
      comparison:
        "Zero-config bundling with a different plugin model. Would replace the Vite config and the Tailwind plugin wiring. Not used.",
      href: "https://parceljs.org",
      linkLabel: "parceljs.org",
    },
  ],
};

export function VitePage() {
  return <MechanicPage mechanic={mechanic} />;
}
