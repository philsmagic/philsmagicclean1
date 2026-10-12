// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { posts } from "./src/data/posts.ts";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";

// lastmod = the date of the last commit that changed the page's own source file (and, for a
// resource hub, its "_" data files). Shared components (header, footer) don't count: that's not a
// content change. On a shallow clone git can't know, so we omit lastmod rather than guess (AEO S2 §F).
const git = (args) => { try { return execFileSync("git", args, { encoding: "utf8" }).trim(); } catch { return ""; } };
if (git(["rev-parse", "--is-shallow-repository"]) === "true") git(["fetch", "--unshallow", "--quiet"]); // CI hosts often clone shallow
const SHALLOW = git(["rev-parse", "--is-shallow-repository"]) !== "false";
function pageSource(pathname) {
  const p = pathname.replace(/\/$/, "") || "/index";
  for (const f of [`src/pages${p}.astro`, `src/pages${p}/index.astro`]) if (existsSync(f)) return f;
  return null;
}
function lastChanged(pathname) {
  if (SHALLOW) return undefined;
  const file = pageSource(pathname);
  if (!file) return undefined;
  const dir = dirname(file);
  const deps = file.endsWith("index.astro") ? readdirSync(dir).filter((f) => f.startsWith("_")).map((f) => join(dir, f)) : [];
  const date = git(["log", "-1", "--format=%cI", "--", file, ...deps]);
  return date || undefined;
}

// Static output: every route is a complete HTML file at build time, so answer
// engines that do not execute JavaScript see the full page (AEO S2 §C).
export default defineConfig({
  site: "https://philsmagicclean.com",
  output: "static",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" }, // critical CSS inline — no render-blocking stylesheet (AEO S2 §H)
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404"),
      // Blog posts: their own published/modified date. Every other page: the last commit that
      // changed its content (see lastChanged). Never a per-build date (AEO S2 §F / S1 §M).
      serialize: (item) => {
        const m = item.url.match(/\/blog\/([^/]+)$/);
        const post = m && posts.find((p) => p.slug === m[1]);
        const lm = post ? (post.dateModified ?? post.datePublished) : lastChanged(new URL(item.url).pathname);
        if (lm) item.lastmod = lm;
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
