// Structured-data check, run after every build (AEO S1 §B: validate before release).
// Reads every built page and FAILS THE BUILD (exit 1) if its JSON-LD is broken, so a bad
// label can never reach the live site. Checks, per page:
//   - exactly one <script type="application/ld+json"> block, valid JSON, with an @graph
//   - every { "@id": … } reference points at a node in the same graph
//   - required properties per type (business, person, page, article, FAQ, breadcrumb)
//   - Article/BlogPosting headline = the page's H1; mainEntityOfPage = the page's WebPage @id
//   - every FAQ answer appears word for word in the visible page text
//   - exactly one canonical link
// Usage: node scripts/validate-schema.mjs [distDir]   (pnpm build runs it)
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = process.argv[2] || "dist";
const errors = [];

const files = (function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") ? [p] : [];
  });
})(dist).filter((f) => !/(^|\/)404\.html$/.test(f));

const decode = (s) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
   .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ");
const squash = (s) => decode(s).replace(/\s+/g, " ").trim();
const text = (html) => squash(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " "));
const types = (n) => [].concat(n["@type"] || []);
const REQUIRED = {
  LocalBusiness: ["@id", "name", "url", "telephone", "address", "areaServed", "logo"],
  Person: ["@id", "name", "url", "jobTitle"],
  WebSite: ["@id", "url", "name"],
  WebPage: ["@id", "url", "name", "isPartOf"],
  Article: ["@id", "headline", "author", "publisher", "mainEntityOfPage"],
  BlogPosting: ["@id", "headline", "author", "publisher", "mainEntityOfPage", "datePublished", "dateModified"],
  FAQPage: ["@id", "mainEntity"],
  BreadcrumbList: ["@id", "itemListElement"],
  Service: ["@id", "name", "provider", "areaServed"],
};

for (const file of files) {
  const page = file.slice(dist.length);
  const html = readFileSync(file, "utf8");
  const err = (m) => errors.push(`${page}: ${m}`);

  const canon = html.match(/<link rel="canonical"/g) || [];
  if (canon.length !== 1) err(`${canon.length} canonical links (want 1)`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (blocks.length !== 1) { err(`${blocks.length} JSON-LD blocks (want 1)`); continue; }
  let data;
  try { data = JSON.parse(blocks[0]); } catch (e) { err(`JSON-LD does not parse: ${e.message}`); continue; }
  const graph = data["@graph"];
  if (!Array.isArray(graph)) { err("JSON-LD has no @graph"); continue; }

  const ids = new Set(graph.map((n) => n["@id"]).filter(Boolean));
  (function refs(v) {
    if (Array.isArray(v)) return v.forEach(refs);
    if (v && typeof v === "object") {
      const keys = Object.keys(v);
      if (keys.length === 1 && keys[0] === "@id" && !ids.has(v["@id"])) err(`reference to ${v["@id"]} has no node in this page's graph`);
      Object.values(v).forEach(refs);
    }
  })(graph);

  const body = html.split(/<body[^>]*>/)[1] || "";
  const visible = text(body);
  const h1 = squash((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, "") || "");
  const webPage = graph.find((n) => types(n).includes("WebPage"));

  for (const node of graph) {
    for (const t of types(node)) {
      for (const prop of REQUIRED[t] || []) if (node[prop] === undefined || node[prop] === "") err(`${t} is missing ${prop}`);
    }
    const t = types(node);
    if (t.includes("Article") || t.includes("BlogPosting")) {
      if (squash(node.headline) !== h1) err(`headline "${node.headline}" does not match the H1 "${h1}"`);
      if (!webPage || node.mainEntityOfPage?.["@id"] !== webPage["@id"]) err("mainEntityOfPage is not this page's WebPage @id");
    }
    if (t.includes("FAQPage")) {
      for (const q of node.mainEntity || []) {
        const a = q?.acceptedAnswer?.text;
        if (!q?.name || !a) { err("FAQ question without name or answer text"); continue; }
        if (!visible.includes(squash(a))) err(`FAQ answer not visible word for word: "${q.name}"`);
      }
    }
    if (t.includes("BreadcrumbList")) {
      (node.itemListElement || []).forEach((it, i) => {
        if (it.position !== i + 1) err(`breadcrumb position ${it.position} at index ${i}`);
        if (!/^https:\/\//.test(it.item || "")) err(`breadcrumb item "${it.name}" is not an absolute URL`);
      });
    }
  }
}

if (errors.length) {
  console.error(`Structured data check FAILED (${errors.length}):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log(`Structured data check passed: ${files.length} pages.`);
