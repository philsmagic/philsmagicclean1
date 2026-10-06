// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { posts } from "./src/data/posts.ts";

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
      // lastmod only where a real content date exists (blog posts). Other
      // pages get none rather than a fake per-build date (AEO S2 §F / S1 §M).
      serialize: (item) => {
        const m = item.url.match(/\/blog\/([^/]+)$/);
        const post = m && posts.find((p) => p.slug === m[1]);
        if (post) item.lastmod = post.dateModified ?? post.datePublished;
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
