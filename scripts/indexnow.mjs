// IndexNow — tell Bing (and Yandex, Naver, Seznam, Yep, which share submissions) which pages changed.
// Google does not use IndexNow; it reads the sitemap in Search Console instead.
//
// Used two ways:
//   1. Automatically by the Netlify build plugin (netlify/plugins/indexnow) on each PRODUCTION deploy:
//      it submits only the pages whose built HTML differs from what was live before the deploy.
//   2. By hand:  node scripts/indexnow.mjs --all            submit every URL in the built sitemap
//                node scripts/indexnow.mjs <url> [<url>…]   submit specific URLs
//                add --dry-run to print what would be sent without sending.
// Kill switch: set INDEXNOW_DISABLED=1 in Netlify's environment variables.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

export const HOST = "philsmagicclean.com";
export const SITE = `https://${HOST}`;
export const KEY = "b46eb660aa86fbb7fae85b5a0ab29724"; // served at /<KEY>.txt (public/)
const ENDPOINT = "https://api.indexnow.org/indexnow";

/** Every <loc> in the built sitemap(s). */
export function sitemapUrls(distDir = "dist") {
  const files = readdirSync(distDir).filter((f) => /^sitemap-\d+\.xml$/.test(f));
  return files.flatMap((f) => [...readFileSync(join(distDir, f), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}

/** Built HTML file for a site URL. */
export function builtFile(url, distDir = "dist") {
  const path = new URL(url).pathname.replace(/\/$/, "");
  const f = path === "" ? join(distDir, "index.html") : join(distDir, `${path}.html`);
  return existsSync(f) ? f : null;
}

/** Strip what changes on every build or deploy without the page changing. */
export function normalise(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\/_astro\/[^"')\s]+/g, "/_astro/x") // hashed asset names
    .replace(/©\s*\d{4}/g, "©")
    .replace(/\s+/g, " ")
    .trim();
}

/** URLs whose built HTML differs from the live page (new pages count as changed). */
export async function changedUrls(distDir = "dist") {
  const urls = sitemapUrls(distDir);
  const changed = [];
  await Promise.all(urls.map(async (url) => {
    const file = builtFile(url, distDir);
    if (!file) return;
    let live = "";
    try {
      const res = await fetch(url, { headers: { "user-agent": "indexnow-diff (philsmagicclean build)" } });
      live = res.ok ? await res.text() : "";
    } catch { live = ""; }
    if (normalise(live) !== normalise(readFileSync(file, "utf8"))) changed.push(url);
  }));
  return changed.sort();
}

export async function submit(urls, { dryRun = false, log = console.log } = {}) {
  if (process.env.INDEXNOW_DISABLED === "1") { log("IndexNow: disabled (INDEXNOW_DISABLED=1)."); return; }
  const list = [...new Set(urls)].filter((u) => u.startsWith(SITE));
  if (!list.length) { log("IndexNow: nothing to submit."); return; }
  const body = { host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: list.slice(0, 10000) };
  if (dryRun) { log(`IndexNow (dry run): would submit ${list.length} URL(s):\n  ${list.join("\n  ")}`); return; }
  const res = await fetch(ENDPOINT, { method: "POST", headers: { "content-type": "application/json; charset=utf-8" }, body: JSON.stringify(body) });
  // 200 = accepted, 202 = accepted (key validation pending). Anything else is reported, never thrown —
  // an IndexNow hiccup must not fail a deploy.
  log(`IndexNow: submitted ${list.length} URL(s) → HTTP ${res.status}${res.ok ? "" : ` ${await res.text().catch(() => "")}`}`);
}

// CLI
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const urls = args.includes("--all") ? sitemapUrls() : args.filter((a) => a.startsWith("http"));
  if (!urls.length) { console.error("usage: node scripts/indexnow.mjs --all | <url>… [--dry-run]   (run after `pnpm build`)"); process.exit(1); }
  await submit(urls, { dryRun });
}
