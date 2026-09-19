# Installation

Adopt Sand by copying the `sand/` folder at a git tag into a pnpm workspace
and importing it as a workspace package. pnpm is required.

A **new project** follows [New project](#new-project) to the end. An
**existing project** follows [Existing project](#existing-project). On that
path, write files only after the maintainer confirms the change list.

## New project

Create a pnpm workspace, copy the snapshot, wire the app package, then
verify. Done when `pnpm install` succeeds, the app imports `sand/ui/...` and
`sand/styles.css`, and `sand/VERSION` matches the installed tag without a
leading `v`.

### 1. Copy the snapshot

Clone the Sand repository at the requested git tag (for example `v0.0.1`)
into a temporary directory. Copy only the `sand/` folder from that clone
into the consumer workspace root. Delete the clone.

Done when `sand/package.json`, `sand/VERSION`, and `sand/src/styles.css`
exist in the workspace.

### 2. Add the workspace entry

Write `pnpm-workspace.yaml` at the workspace root so `sand` and the app
package are both workspace packages. Substitute the app directory name.

```yaml
packages:
  - sand
  - app

publicHoistPattern:
  - "@types/react"
  - "@types/react-dom"
```

`publicHoistPattern` belongs in this file. Libraries that take `react` as a
peer without naming `@types/react` (for example `input-otp`) resolve types
by walking up from `node_modules/.pnpm`. Hoisting keeps that lookup working
in every package.

A private root `package.json` can forward scripts (`pnpm --filter app dev`,
`pnpm --filter sand dev`).

Done when the app can declare `"sand": "workspace:*"` and both hoist
patterns are present.

### 3. Add the app package

Create `app/` with the files in [App files](#app-files). Depend on React
19, `sand` as `workspace:*`, and the Vite + Tailwind v4 toolchain at the
versions shown there. Import components from `sand/ui/...`. Use relative
imports for the app's own files.

Done when `app/package.json` lists `sand` as `workspace:*` and `app/src/main.tsx`
exists.

### 4. Import the stylesheet

In the app entry import `sand/styles.css` and nothing else for Tailwind.
See [App files](#app-files). The stylesheet already `@import`s Tailwind and
has `@source "./components/ui"` and `@source "./hooks"`, so component
classes generate when the file is reached through `node_modules`. Leave
those `@source` lines in `sand/src/styles.css`. Do not add them in the app.
Do not add a second `@import "tailwindcss"`. The Vite plugin still scans
the app's own source through the module graph.

Done when the app entry imports `sand/styles.css` once.

### 5. Point `@/` at sand `src`

Exported `sand/ui/*` files import `@/...` internally. Alias `@/` to the
sand package source in Vite and TypeScript, as in [App files](#app-files).
The app cannot also use `@/` for its own files; keep those imports
relative. Dedupe `react` and `react-dom`. Allow the workspace root in
`server.fs.allow` so Vite can read `sand/` next to the app.

Done when both configs resolve `@/` to `sand/src`.

### 6. Install and verify

From the workspace root run `pnpm install`. Run the app's dev script. Run
the docs site with `pnpm --filter sand dev` if the maintainer wants to see
edits against this snapshot.

Done when the app renders a Sand component and there are no resolve errors
for `@/` or `sand/styles.css`.

## Existing project

List every change, then stop. Write files only after an explicit yes.

### 1. List the changes

Read this guide and the current project. Write a change list that covers
every item below, including "already matches" when a step is done. Name
each file you would add or edit.

- Copy `sand/` from the requested git tag into the workspace
- Workspace `packages` entry for `sand`
- `publicHoistPattern` for `@types/react` and `@types/react-dom`
- App dependency `"sand": "workspace:*"`
- React 19, Vite, and Tailwind v4 as in [App files](#app-files)
- Stylesheet import `sand/styles.css` and no extra `@source` in the app
- `@/` aliased to sand `src` in Vite and TypeScript
- Relative imports in the app (because `@/` is taken)
- `resolve.dedupe` for `react` and `react-dom`
- Vite `server.fs.allow` includes the workspace root

Done when the list is written and every bullet is accounted for.

### 2. Confirm

Stop. Show the list. Wait for an explicit yes. Apply the whole confirmed
list, not a subset.

Done when the maintainer has confirmed the list.

### 3. Apply

Apply only the confirmed changes, using the contents in
[App files](#app-files) and the workspace snippet in step 2 of New
project. Then run `pnpm install` and verify as in New project step 6.

Done when the confirmed files exist and the app imports `sand/ui/...` and
`sand/styles.css`.

## Update

A release without breaking changes is one command. Recover local edits
from git first. The script overwrites `sand/` and keeps `node_modules` and
`dist`.

### 1. Recover local edits

Commit or restore every local change under `sand/` that the project still
wants. The overwrite will not merge.

Done when `git status` is clean for `sand/`, or the maintainer has accepted
the loss.

### 2. Run the overwrite script

Run this from the workspace root. The first argument is the git tag. The
second is the Sand repository remote the snapshot was copied from.

```bash
./sand/scripts/update-sand v0.1.0 <sand-git-remote>
```

The script replaces this package with `sand/` from that tag and writes the
tag (without a leading `v`) into `sand/VERSION`. Then run `pnpm install`.

A release with breaking changes also ships a guide under
[`guides/`](guides/index.md). Read that guide before running the script.

Done when `sand/VERSION` matches the requested tag without a leading `v`.

## App files

Create these under `app/`. The directory name can differ; keep it in
`pnpm-workspace.yaml`.

`package.json`

```json
{
  "name": "app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc -b"
  },
  "dependencies": {
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "sand": "workspace:*"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "tailwindcss": "^4.3.3",
    "typescript": "~6.0.2",
    "vite": "^8.3.0"
  }
}
```

`vite.config.ts`

```ts
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
    fs: { allow: [path.resolve(import.meta.dirname, "..")] },
  },
});
```

`tsconfig.json`

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

`tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "paths": { "@/*": ["./node_modules/sand/src/*"] },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

`tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

`index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`src/main.tsx`

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "sand/styles.css";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

`src/app.tsx`

```tsx
import { Button } from "sand/ui/button";

export function App() {
  return (
    <div className="bg-background p-lg text-foreground">
      <Button>Sand</Button>
    </div>
  );
}
```
