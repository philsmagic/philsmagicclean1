// Remove HTML comments from the built output. Review flags (<!-- REVIEW E.L. -->,
// <!-- EMILY: … -->) stay in the source for reviewers but must never ship in
// HTML that crawlers read. Conditional comments are not used on this site.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
let files = 0, removed = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) {
      const html = readFileSync(p, "utf8");
      const out = html.replace(/<!--[\s\S]*?-->/g, (m) => { removed++; return ""; });
      if (out !== html) { writeFileSync(p, out); files++; }
    }
  }
}
walk("dist");
console.log(`strip-comments: removed ${removed} comments from ${files} files`);
