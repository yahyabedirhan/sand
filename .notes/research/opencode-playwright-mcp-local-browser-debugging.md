# OpenCode browser debugging with Playwright MCP

Researched 2026-09-20 from official OpenCode and Playwright documentation,
schemas, and source only.

## Recommendation

Add Playwright MCP as a local MCP server in the project's `opencode.json`, then
restart OpenCode. Run the web app separately at `http://localhost:5173` and tell
the agent explicitly to use the `playwright` tools.

This project-scoped configuration gives the agent unattended browser control,
uses a fresh in-memory browser profile, selects Playwright-managed Chromium,
includes debug-level console messages, and blocks the MCP tool that can execute
arbitrary JavaScript in the MCP server process:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "playwright": {
      "type": "local",
      "command": [
        "npx",
        "-y",
        "@playwright/mcp@latest",
        "--browser",
        "chromium",
        "--isolated",
        "--console-level",
        "debug",
        "--no-webmcp"
      ],
      "enabled": true,
      "timeout": 120000
    }
  },
  "permission": {
    "playwright_*": "allow",
    "playwright_browser_run_code_unsafe": "deny"
  }
}
```

Merge those keys into an existing config rather than replacing unrelated
settings. A project config belongs at the repository root. A user-wide config
belongs at `~/.config/opencode/opencode.json`, but project scope is preferable
because a global browser server is available in every workspace. OpenCode
merges config sources, with later sources overriding conflicting keys.

The official Playwright MCP example for OpenCode uses the same local MCP shape,
but only the minimal `npx @playwright/mcp@latest` command. OpenCode requires a
local MCP `type` and command array; `enabled` and `timeout` are optional. The
explicit 120-second timeout avoids an OpenCode MCP request timeout ending a
slow navigation or debugging call early.

Sources:

- [OpenCode MCP server configuration](https://opencode.ai/docs/mcp-servers/)
- [OpenCode config locations and precedence](https://opencode.ai/docs/config/#locations)
- [OpenCode configuration schema](https://opencode.ai/config.json)
- [Playwright MCP README, including the OpenCode example](https://github.com/microsoft/playwright-mcp/blob/main/README.md#getting-started)
- [OpenCode local MCP process and tool-name implementation](https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts)
- [OpenCode MCP tool-name sanitization and prefixing](https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/catalog.ts)

## Prerequisites and browser installation

Required:

- Node.js 20 or newer. The current MCP installation guide requires 20+, even
  though the `playwright-mcp` repository package metadata still says 18+.
- `npx`, normally supplied with npm.
- Network access the first time `npx` obtains `@playwright/mcp@latest` and when
  Playwright downloads a browser.
- The local app must already be listening at `http://localhost:5173`, unless the
  agent is also allowed and instructed to start it with a shell tool.

Playwright's current MCP installation guide says the browser downloads
automatically on first use, so a separate Chrome or Chromium installation is
normally unnecessary. To pre-provision the managed Chromium build, or to
recover when automatic acquisition fails, run:

```sh
npx -y @playwright/mcp@latest install-browser chromium
```

Playwright versions require matching browser binaries. The MCP source detects a
missing executable and instructs the user to run its `install-browser` command.

Browser choice changes what must already be installed:

- With no `--browser` flag, Playwright MCP resolves to Chromium automation with
  the `chrome` channel. That means installed branded Google Chrome is the
  default.
- `--browser chromium` maps to Playwright's managed Chrome for Testing build.
  This is the most predictable choice, but it needs the one-time browser
  download above.
- `--browser chrome` uses installed branded Chrome.
- `--browser msedge` uses installed Microsoft Edge.
- `--browser firefox` and `--browser webkit` need Playwright's compatible
  browser builds. Playwright's patched Firefox is not interchangeable with
  regular branded Firefox, and Playwright WebKit is not installed Safari.
- `--executable-path` can target a specific executable, while `--extension`
  attaches to an existing Chrome or Edge session and additionally requires the
  Playwright browser extension.

Linux hosts may also need browser system dependencies. Playwright documents
`npx playwright install-deps` and `npx playwright install --with-deps
chromium`; the MCP implementation reports a corresponding `install-deps`
instruction when shared libraries are absent.

Using `@latest` follows the official example but allows upgrades to change the
server or required browser revision. Pin a tested `@playwright/mcp` version if
reproducibility matters, and install the browser expected by that pinned
version.

Sources:

- [Playwright MCP requirements](https://github.com/microsoft/playwright-mcp/blob/main/README.md#requirements)
- [Playwright MCP installation guide](https://playwright.dev/mcp/installation)
- [Published Playwright MCP package metadata](https://github.com/microsoft/playwright-mcp/blob/main/package.json)
- [Playwright MCP browser defaults and browser-option mapping](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/mcp/config.ts)
- [Playwright MCP missing-executable handling](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/mcp/browserFactory.ts)
- [Playwright browser installation and browser-channel documentation](https://playwright.dev/docs/browsers)

## Headed, headless, and session state

Playwright MCP is headed by default on desktop systems. Do not add a flag when
the user should watch the agent interact with the app. Add `--headless` to the
command array for invisible automation. On Linux without `DISPLAY`, the MCP
source selects headless mode automatically.

`--isolated` keeps the browser profile in memory. Closing the browser discards
cookies, local storage, and login state. This is a good debugging default and
avoids collisions when several MCP clients use the same workspace.

Without `--isolated`, Playwright MCP uses a persistent, workspace-specific
profile. The current documented macOS location is
`~/Library/Caches/ms-playwright-mcp/mcp-{channel}-{workspace-hash}`; equivalent
cache locations are documented for Windows and Linux. Persistent mode retains
login state and cookies, but only one browser instance can use a profile at a
time. Use isolated mode or distinct `--user-data-dir` values for concurrent
agents. `--storage-state` can seed an isolated session when authenticated state
is needed.

Sources:

- [Playwright MCP introduction and headed default](https://playwright.dev/mcp/introduction#quick-start)
- [Playwright MCP options](https://github.com/microsoft/playwright-mcp/blob/main/README.md#configuration)
- [Playwright MCP profile modes](https://github.com/microsoft/playwright-mcp/blob/main/README.md#user-profile)
- [Current Playwright MCP profile and state guide](https://playwright.dev/mcp/configuration/user-profile)
- [Playwright MCP resolved headless behavior](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/mcp/config.ts)

## Console, network, and screenshots

No capability flag is needed for ordinary debugging. These tools are in the
always-enabled core set:

- `browser_console_messages` returns browser console output. The
  `--console-level debug` flag makes the configured default include debug,
  info, warning, and error messages. An individual tool call can still request
  a level.
- `browser_network_requests` lists requests since page load, omitting successful
  static resources by default. `browser_network_request` returns details for
  one listed request. The agent can filter requests and include static assets.
- `browser_take_screenshot` captures viewport, full-page, or element images.
  `--output-dir <path>` controls automatically named output files. An explicit
  screenshot filename resolves against the workspace root instead.
- `browser_snapshot` provides the accessibility tree and stable element refs.
  Playwright says this is preferable to screenshots for finding and operating
  controls. Screenshots are evidence for visual inspection, not the targeting
  mechanism for ordinary clicks.

Useful optional flags:

- `--caps=network` adds request mocking and online/offline simulation. It is not
  required to inspect requests.
- `--caps=devtools` adds tracing, video, recording, highlighting, annotation,
  and script-resume tools. Add it when those diagnostics justify the extra tool
  schemas and context.
- `--caps=vision` adds coordinate-based mouse tools. Prefer accessibility
  snapshots unless a canvas or other inaccessible surface requires coordinates.
- `--block-service-workers` reduces stale service-worker interference and makes
  request behavior easier to observe, but changes the app environment.
- `--viewport-size 1280x720`, `--mobile`, or `--device "iPhone 15"` supplies a
  repeatable viewport or device emulation. The agent can also call
  `browser_resize` during a session.
- `--save-session` writes session artifacts to the output directory.
- `--image-responses omit` saves tokens but prevents screenshot images from
  being sent to the model. The default is `allow`.

Sources:

- [Playwright MCP tools and capability groups](https://playwright.dev/mcp/introduction#available-tools)
- [Playwright MCP generated option reference](https://github.com/microsoft/playwright-mcp/blob/main/README.md#configuration)
- [Playwright MCP core-tool filtering source](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/tools/backend/tools.ts)

## Permissions and autonomy

OpenCode exposes MCP tools with the MCP server name as a prefix. A server named
`playwright` therefore produces tools such as
`playwright_browser_navigate`. OpenCode supports wildcard permission rules, so
`"playwright_*": "allow"` lets the agent use all of that server's tools without
approval.

OpenCode's default is already permissive for most tools. The explicit allow is
useful when a global or managed config has a catch-all `ask` rule. Alternatively,
start OpenCode with `--auto`; auto mode approves requests that would otherwise
ask, while explicit `deny` rules still apply.

The deny rule in the recommended config is deliberate.
`browser_run_code_unsafe` executes arbitrary JavaScript in the Playwright MCP
server process and its official tool description calls it RCE-equivalent.
Normal page interaction and `browser_evaluate`, which evaluates in the page,
remain available. OpenCode permission patterns use last-match-wins ordering, so
the specific deny must follow the wildcard allow.

Autonomous browser access is powerful. The agent can navigate, click, submit
forms, upload files, read page content, inspect request bodies and headers, and
write screenshot or diagnostic artifacts. Playwright states that its MCP server
is not a security boundary. Isolated profiles, explicit origin restrictions,
and OpenCode permission rules reduce accidental exposure but do not turn
untrusted pages into trusted input.

`--allowed-origins "http://localhost:5173"` is an optional convenience guard.
It can break an app that legitimately calls another development API, CDN, font
host, or authentication origin. Playwright explicitly says origin filtering is
not a security boundary and does not affect redirects. `--no-webmcp` in the
recommended config avoids exposing tools dynamically registered by the page.

Sources:

- [OpenCode tool permission wildcard example for MCP](https://opencode.ai/docs/tools/#configure)
- [OpenCode permission defaults, rule order, and auto mode](https://opencode.ai/docs/permissions/)
- [Playwright MCP security statement](https://github.com/microsoft/playwright-mcp/blob/main/README.md#security)
- [Playwright MCP core tool descriptions](https://github.com/microsoft/playwright-mcp/blob/main/README.md#tools)

## Restart and verification

Restart OpenCode after adding or changing the MCP entry. OpenCode documents
`enabled` as enabling the server on startup. Its current source creates local
MCP subprocesses and caches their clients and tool definitions when MCP state
initializes; editing the JSON file does not replace that already-running
subprocess.

After restart, verify the connection:

```sh
opencode mcp list
```

The `playwright` entry should report connected. If it reports a missing browser,
run the browser-install command above and restart or reconnect the MCP server.

Sources:

- [OpenCode MCP startup behavior and list command](https://opencode.ai/docs/mcp-servers/)
- [OpenCode CLI MCP commands](https://opencode.ai/docs/cli/#mcp)
- [OpenCode MCP client lifecycle source](https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts)

## How to prompt the agent

A concrete first prompt:

```text
Use the playwright tools to debug the app at http://localhost:5173.
Reproduce the reported behavior, inspect console errors and failed or suspicious
network requests, and take screenshots where visual evidence helps. Find the
root cause in the code, implement the smallest correct fix, then reload the app
and verify the original flow, console, and network behavior. Do not stop after
describing the issue.
```

For a specific bug, replace "reported behavior" with exact reproduction steps
and expected behavior. Say `use playwright` because OpenCode's MCP docs
recommend referring to the server by name in the prompt. State whether the
agent may start or restart the development server; browser access alone does not
start the app.

Useful focused prompts:

```text
Use playwright to open http://localhost:5173, reproduce the failed save, and
inspect the console plus the request and response for the save API. Fix and
verify it.
```

```text
Use playwright in headed mode to check http://localhost:5173 at desktop and
mobile widths. Capture screenshots of the layout defect before and after the
fix, and verify there are no new console errors.
```

Source:

- [OpenCode guidance for naming an MCP server in prompts](https://opencode.ai/docs/mcp-servers/#local)

## Localhost visibility and limitations

With the recommended `type: "local"` configuration, OpenCode starts the MCP
process on the same machine and with the workspace as its working directory.
The browser it launches therefore sees that machine's network namespace. If the
Vite app and OpenCode run directly on the same host,
`http://localhost:5173` is visible without special configuration.

`localhost` always refers to the environment running the browser:

- If OpenCode and Playwright MCP run in a container, VM, remote development
  host, or SSH session while Vite runs on the user's laptop, browser-local
  `localhost:5173` does not refer to the laptop.
- If Vite runs in a container while OpenCode runs on the host, publish port
  5173 to the host. If both run in different containers, use their shared
  network and service address rather than assuming localhost.
- The official Playwright MCP Docker mode runs headless Chromium inside the
  container. In that mode, browser localhost is the container. Docker support
  is currently limited to headless Chromium.
- If a remote MCP server is used instead of `type: "local"`, its browser sees
  the remote server's localhost, not the OpenCode client's localhost.

Other practical limits:

- Accessibility snapshots are excellent for semantic DOM controls, but canvas,
  WebGL, pixel-only state, and visual spacing defects may need screenshots and
  possibly vision tools.
- A screenshot alone is not Playwright MCP's normal interaction surface. The
  model uses snapshot refs for deterministic actions.
- Isolated mode deliberately loses authentication and storage when closed.
- Browser automation can observe frontend console and network behavior, but it
  does not replace server logs, database inspection, or application tracing.
- The local development server must remain alive and reachable throughout the
  debugging loop.
- MCP tool schemas and accessibility snapshots consume model context. The
  Playwright project notes that CLI plus skills can be more token-efficient for
  coding agents, while MCP is useful when persistent browser state and
  exploratory iteration matter more.

Sources:

- [OpenCode local MCP subprocess implementation](https://github.com/anomalyco/opencode/blob/dev/packages/opencode/src/mcp/index.ts)
- [Playwright MCP Docker behavior](https://github.com/microsoft/playwright-mcp/blob/main/README.md#docker)
- [Playwright MCP snapshot model and MCP-versus-CLI tradeoff](https://playwright.dev/mcp/introduction)
