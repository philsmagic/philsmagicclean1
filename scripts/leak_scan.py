#!/usr/bin/env python3
"""leak_scan.py: the launch-gate scan for anything internal in a website's public output.

    python3 leak_scan.py SITE_DIR                      # scan a built (deployable) folder
    python3 leak_scan.py SITE_DIR --repo REPO_DIR      # also scan the files tracked in a client-visible repo
    python3 leak_scan.py --live https://example.com/sitemap.xml   # scan the LIVE pages (+ their CSS/JS, + the 404)
    python3 leak_scan.py TEMPLATE_DIR --template       # a template in the stash: builder comments allowed (counted)
    python3 leak_scan.py --strip-comments SITE_DIR     # remove every HTML comment from the .html files, in place
    options: --allow FILE (JSON {"emails": [...], "phones": [10-digit numbers the site publishes], "terms": [...],
             "ignore_files": [globs of third-party bundles], "humans_signature": true to allow a final
             "LEUX Design" line in /humans.txt, per site, 2026-10-30})   --no-signature   --exclude PATH (repeatable:
             a path or glob, relative to SITE_DIR and to --repo, that is not uploaded or is agency-only tooling)

Exit 1 if anything leaks. Python 3.9+, standard library only. The same file is vendored into each site repo
(scripts/leak_scan.py) next to leak_denylist.json, which holds the denylist as salted hashes, so the names
themselves never appear in a client repo.

A deployable folder (or a live site) FAILS on:
  - any HTML comment in an .html/.htm file (IE conditional comments excepted);
  - any denylisted name, initials or internal folder name anywhere (text, attributes, JSON-LD, meta, comments);
  - the agency brand anywhere except the one hidden author tag in each page's <head>, exactly
    `<meta name="author" content="LEUX Design">`: nothing visible credits the studio, no footer line, no humans.txt
    signature (2026-10-24);
  - process notes inside any comment (HTML, CSS, JS): "to confirm", "Option B", "ruling", "TODO", "FILL IN" ...;
  - any email address not on the site's allowlist (only example/test domains are built in; the studio's own address is
    NOT allowed on a client site);
  - any phone number (text or tel: link) not on the site's "phones" allowlist (fictional 555 / 000 placeholders excepted);
  - any local path (a Mac or Linux home folder, a Windows user folder, a file URL) and any internal document
    reference (a Markdown file name, the copy source folder);
  - internal files in the deploy folder (*.md, *.py, *.sh, *.map, .DS_Store, .env*: names only, never opened);
  - an HTML page without the author tag in its <head> (unless --no-signature).
--template relaxes two rules for a template that is not yet a site: builder comments in the HTML are counted, not
failed, and README/scripts are scanned for names, emails and paths instead of being flagged as internal files.
A repo (--repo) FAILS on denylisted names, local paths and unlisted emails in tracked files; commit identities and
messages that carry a denylisted name are reported as INFO (history is never rewritten by this tool).
"""
import argparse, fnmatch, hashlib, html, json, pathlib, re, subprocess, sys, urllib.parse, urllib.request

HERE = pathlib.Path(__file__).resolve().parent
SIG_META = re.compile(r'<meta\s+name="author"\s+content="LEUX Design"\s*/?>', re.I)   # the only brand mention allowed
PHONE = re.compile(r"tel:\+?[\d().\s-]{10,16}|(?<![\w.-])(?:\+?1[\s.-])?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(?![\w-])")
BRAND = re.compile(r"leux", re.I)
HUMANS_SIG = re.compile(r"\n[ \t]*LEUX Design[ \t]*\n?\Z")   # the signature line, last in /humans.txt, if the site opts in
STUDIO_EMAIL = "hello@leux.design"   # former commit identity: allowed in repo/tooling files, never in shipped output
COMMIT_EMAIL = "306337932+leleuxdesign@users.noreply.github.com"   # commit identity: same rule

TEXT_EXT = {".html", ".htm", ".css", ".js", ".mjs", ".json", ".jsonld", ".xml", ".txt", ".svg", ".webmanifest",
            ".htaccess", ".csv", ".md", ".mdx", ".py", ".sh", ".yml", ".yaml", ".toml", ".ini", ".cfg", ".gitignore",
            ".astro", ".ts", ".tsx", ".jsx", ".cjs", ".vue", ".svelte", ".scss", ".sass", ".less", ".njk", ".liquid",
            ".hbs", ".php", ".erb", ".env.example"}
INTERNAL_FILE = re.compile(r"(\.md|\.py|\.pyc|\.sh|\.map|\.psd|\.fig|\.sketch|\.ai)$|^\.DS_Store$|^\.env", re.I)
HTML_COMMENT = re.compile(r"<!--(?!\[if)(?!<!\[endif)(.*?)-->", re.S)
CSS_COMMENT = re.compile(r"/\*(.*?)\*/", re.S)
JS_LINE_COMMENT = re.compile(r"(?<![:\"'\\/])//([^\n]*)")
TOKEN = re.compile(r"[A-Za-z0-9]+(?:[.\-_][A-Za-z0-9]+)*")
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}")
FILE_URL = "file:" + "/" * 3          # built, so this source file never matches its own pattern
LOCAL_PATH = re.compile(r"/(?:Users|home)/[A-Za-z0-9._-]+|\b[A-Za-z]:\\\\?(?:Users|Documents)\b|" + FILE_URL + r"|(?<![\w.~])~/[A-Za-z]")
INTERNAL_REF = re.compile(r"\b(?:copy|copy-changelog|04-plan|05-site|01-client-intake|02-brand-kit|03-research|_client-data|"
                          r"website-templates)/[A-Za-z0-9_]|data-loc\b|\b(?:[A-Z0-9][\w-]*|\w+[-_][\w-]*)\.md\b")
PROCESS = re.compile(r"\bto confirm\b|\bconfirms?\b|\bOption [A-Z]\b|\brul(?:ing|ed)\b|\bapproved by\b|\bapproval\b|"
                     r"\bdesign spec\b|\bmeasurement plan\b|\bcopy pass\b|\bround \d|\blaunch[- ]day\b|\brecheck\b|"
                     r"\bFILL IN\b|\bTODO\b|\bFIXME\b|\bHACK\b|§|\bDEC-\d|\bdeveloper seat\b|\bthe agency\b", re.I)
EXAMPLE_DOMAINS = re.compile(r"@(?:[\w-]+\.)*(?:example\.(?:com|org|net)|[\w-]+\.(?:example|invalid|test|localhost))$", re.I)
IMG_TLD = re.compile(r"\.(?:png|jpe?g|webp|gif|svg|avif|ico)$", re.I)

def load_denylist():
    p = HERE / "leak_denylist.json"
    if not p.exists():
        sys.exit(f"leak_scan: {p.name} is missing next to {pathlib.Path(__file__).name}: the scan cannot run (launch gate FAILS)")
    d = json.loads(p.read_text())
    return d["salt"], set(d["ci"]), set(d["cs"])

SALT, CI, CS = load_denylist()
def _h(tier, tok): return hashlib.sha256((SALT + tier + ":" + tok).encode()).hexdigest()

class Scan:
    def __init__(s, allow):
        s.emails = {e.lower() for e in allow.get("emails", [])}
        s.phones = {re.sub(r"\D", "", x)[-10:] for x in allow.get("phones", [])}
        s.terms = {t.lower() for t in allow.get("terms", [])}
        s.ignore = list(allow.get("ignore_files", []))   # third-party bundles a site cannot edit (globs)
        s.humans_sig = bool(allow.get("humans_signature"))
        s.hits, s.info, s.files, s.pages, s.signed = [], [], 0, 0, 0
        s.require_sig, s.template, s.builder_comments, s.own_site = True, False, 0, False
    def hit(s, where, kind, detail): s.hits.append((where, kind, detail))

    def names(s, where, text, kinds="name"):
        seen = set()
        for m in TOKEN.finditer(text):
            whole = m.group(0)
            cands = {whole} | set(re.split(r"[-_]", whole))
            for t in cands:
                if not t or t.lower() in s.terms: continue
                if _h("ci", t.lower()) in CI or _h("cs", t) in CS:
                    if (t, where) in seen: continue
                    seen.add((t, where))
                    line = text.count("\n", 0, m.start()) + 1
                    s.hit(f"{where}:{line}", kinds, _ctx(text, m.start(), m.end()))

    def emails_paths(s, where, text, phones=True):
        # phones=False marks a file that is NOT shipped (repo or template tooling): there the studio's address may
        # appear as the documented commit identity; in shipped files it never may
        for m in EMAIL.finditer(text):
            e = m.group(0).rstrip(".").lower()
            if e in s.emails or EXAMPLE_DOMAINS.search(e) or IMG_TLD.search(e) or (not phones and e in (STUDIO_EMAIL, COMMIT_EMAIL)): continue
            s.hit(f"{where}:{_line(text, m.start())}", "email", e)
        for m in (PHONE.finditer(text) if phones else []):
            d = re.sub(r"\D", "", m.group(0))[-10:]
            if len(d) < 10 or d in s.phones or "555" in (d[:3], d[3:6]) or d[:3] == "000": continue   # fictional/placeholder
            s.hit(f"{where}:{_line(text, m.start())}", "phone", m.group(0).strip())
        for m in LOCAL_PATH.finditer(text):
            s.hit(f"{where}:{_line(text, m.start())}", "local path", _ctx(text, m.start(), m.end()))

    def comments(s, where, text, html_file):
        found = []
        if html_file or where.endswith((".svg", ".xml")):
            found += [(m.start(), m.group(1)) for m in HTML_COMMENT.finditer(text)]
        if where.endswith((".css", ".js", ".mjs")) or html_file:
            found += [(m.start(), m.group(1)) for m in CSS_COMMENT.finditer(text)
                      if not html_file or _inside_tag(text, m.start(), ("style", "script"))]
        if where.endswith((".js", ".mjs")):
            found += [(m.start(), m.group(1)) for m in JS_LINE_COMMENT.finditer(text)]
        for pos, body in found:
            if html_file and text[pos:pos + 4] == "<!--":
                if s.template: s.builder_comments += 1
                else: s.hit(f"{where}:{_line(text, pos)}", "HTML comment", _short(body))
                continue
            if s.template: continue
            pm = PROCESS.search(body)
            if pm: s.hit(f"{where}:{_line(text, pos)}", "process note in comment", _short(body))

    def site_file(s, where, text):
        s.files += 1
        html_file = where.lower().endswith((".html", ".htm")) or where.endswith("(live)")
        body = text
        if html_file and "<body" in text.lower():
            s.pages += 1
            head = re.split(r"</head\s*>", text, maxsplit=1, flags=re.I)[0]
            if SIG_META.search(head): s.signed += 1
            elif s.require_sig: s.hit(where, "author tag", 'missing or not exact in <head>: <meta name="author" content="LEUX Design">')
            body = SIG_META.sub(" ", text, count=1)
        else:
            body = SIG_META.sub(" ", text, count=1)   # the author tag in a source component (.astro, .jsx, ...)
            if s.humans_sig and where.split("/")[-1].split(" ")[0] == "humans.txt":
                body = HUMANS_SIG.sub("\n", body.rstrip() + "\n")
        for m in ([] if s.own_site else BRAND.finditer(body)):
            s.hit(f"{where}:{_line(body, m.start())}", "brand outside the signature", _ctx(body, m.start(), m.end()))
        s.names(where, body)
        s.emails_paths(where, body)
        for m in INTERNAL_REF.finditer(body):
            s.hit(f"{where}:{_line(body, m.start())}", "internal reference", _ctx(body, m.start(), m.end()))
        s.comments(where, text, html_file)

def _line(t, pos): return t.count("\n", 0, pos) + 1
def _short(b): return re.sub(r"\s+", " ", b).strip()[:110]
def _ctx(t, a, b):
    seg = t[max(0, a - 40): b + 40]
    return re.sub(r"\s+", " ", seg).strip()[:120]
def _inside_tag(t, pos, tags):
    before = t[:pos].lower()
    for tag in tags:
        o, c = before.rfind(f"<{tag}"), before.rfind(f"</{tag}")
        if o > c: return True
    return False

SKIP_DIRS = {".git", "node_modules", ".astro", ".vercel", ".netlify", "__pycache__"}

def excluded(rel, patterns):
    for p in patterns or []:
        p = p.rstrip("/")
        if rel == p or rel.startswith(p + "/") or fnmatch.fnmatch(rel, p): return True
    return False

def scan_dir(sc, root, exclude=None):
    root = pathlib.Path(root)
    for f in sorted(root.rglob("*")):
        if not f.is_file() or SKIP_DIRS & set(f.relative_to(root).parts): continue
        rel = f.relative_to(root).as_posix()
        if excluded(rel, exclude) or excluded(rel, sc.ignore): continue
        if INTERNAL_FILE.search(f.name):
            if not sc.template or f.suffix.lower() not in TEXT_EXT:
                if not sc.template: sc.hit(rel, "internal file in deploy folder", f.name)
                continue
            t = f.read_text(encoding="utf-8", errors="ignore")   # template tooling/README: names, emails, paths only
            sc.names(rel, t); sc.emails_paths(rel, t, phones=False); continue
        if f.suffix.lower() not in TEXT_EXT and f.name not in (".htaccess",): continue
        sc.site_file(rel, f.read_text(encoding="utf-8", errors="ignore"))

def strip_dir(root):
    n = files = 0
    for f in sorted(pathlib.Path(root).rglob("*.htm*")):
        if SKIP_DIRS & set(f.parts): continue
        t = f.read_text(encoding="utf-8")
        new, k = HTML_COMMENT.subn("", t)
        if k:
            new = re.sub(r"\n[ \t]*\n(?=[ \t]*\n)", "\n", new)
            f.write_text(new, encoding="utf-8"); n += k; files += 1
    print(f"strip-comments: removed {n} HTML comments from {files} files under {root}")

def scan_repo(sc, repo, exclude=None):
    repo = pathlib.Path(repo)
    try:
        files = subprocess.run(["git", "-C", str(repo), "ls-files"], capture_output=True, text=True, check=True).stdout.split("\n")
    except Exception:
        files = [p.relative_to(repo).as_posix() for p in repo.rglob("*") if p.is_file() and ".git" not in p.parts]
    for rel in filter(None, files):
        f = repo / rel
        if not f.is_file() or excluded(rel, exclude): continue
        if re.search(r"(^|/)\.env|\.(p8|pem|key)$", rel): sc.hit(f"repo:{rel}", "credential-like file tracked", rel); continue
        if f.suffix.lower() not in TEXT_EXT and f.name not in (".htaccess", ".gitignore"): continue
        if f.name == "leak_denylist.json": continue
        t = f.read_text(encoding="utf-8", errors="ignore")
        sc.names(f"repo:{rel}", t)
        sc.emails_paths(f"repo:{rel}", t, phones=False)
    try:
        log = subprocess.run(["git", "-C", str(repo), "log", "--format=%H%x1f%an%x1f%ae%x1f%cn%x1f%ce%x1f%s%x1e"],
                             capture_output=True, text=True, check=True).stdout
    except Exception:
        return
    ident = msg = total = 0
    for rec in filter(None, (r.strip() for r in log.split("\x1e"))):
        total += 1
        parts = rec.split("\x1f")
        probe = Scan({"terms": list(sc.terms)}); probe.require_sig = False
        probe.names("id", " ".join(parts[1:5]))
        if probe.hits: ident += 1
        probe2 = Scan({"terms": list(sc.terms)}); probe2.require_sig = False
        probe2.names("msg", parts[5] if len(parts) > 5 else "")
        if probe2.hits: msg += 1
    sc.info.append(f"git history: {total} commits; {ident} with an internal name in author/committer; "
                   f"{msg} with an internal name in the subject line (history is not rewritten by this tool)")

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (leak scan)"})
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            return r.status, r.read().decode("utf-8", errors="ignore")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", errors="ignore")

def scan_live(sc, start):
    _, body = fetch(start)
    urls = re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", body) if "<urlset" in body or "<sitemapindex" in body else [start]
    if "<sitemapindex" in body:
        subs, urls = urls, []
        for u in subs: urls += re.findall(r"<loc>\s*([^<\s]+)\s*</loc>", fetch(u)[1])
    origin = "{0.scheme}://{0.netloc}".format(urllib.parse.urlparse(start))
    # a preview or staging host often lists the production URLs in its sitemap: scan the host that was asked for
    urls = [origin + urllib.parse.urlparse(u).path for u in urls] or [start]
    urls.append(origin + "/leak-scan-404-probe/")
    assets = set()
    for u in urls:
        code, t = fetch(u)
        sc.site_file(f"{u} (live)", t)
        for a in re.findall(r'<(?:link[^>]+href|script[^>]+src)="([^"]+\.(?:css|js)(?:\?[^"]*)?)"', t):
            full = urllib.parse.urljoin(u, html.unescape(a))
            if full.startswith(origin): assets.add(full)
    for a in sorted(assets):
        if excluded(urllib.parse.urlparse(a).path.lstrip("/"), sc.ignore): continue
        _, t = fetch(a)
        sc.site_file(urllib.parse.urlparse(a).path.split("?")[0], t)
    for extra in ("/robots.txt",):
        code, t = fetch(origin + extra)
        if code == 200: sc.site_file(extra, t)

def main(argv):
    ap = argparse.ArgumentParser(add_help=True, description="Leak scan (public output standard).")
    ap.add_argument("targets", nargs="*")
    ap.add_argument("--repo"); ap.add_argument("--live"); ap.add_argument("--allow")
    ap.add_argument("--exclude", action="append", default=[])
    ap.add_argument("--no-signature", action="store_true"); ap.add_argument("--template", action="store_true")
    ap.add_argument("--strip-comments", action="store_true")
    ap.add_argument("--own-site", action="store_true", help="the studio's own website: its name may appear, no credit line needed")
    a = ap.parse_args(argv)
    if a.strip_comments:
        for t in a.targets: strip_dir(t)
        return 0
    if not (a.targets or a.live or a.repo): ap.print_help(); return 2
    allow = json.loads(pathlib.Path(a.allow).read_text()) if a.allow else {}
    sc = Scan(allow); sc.require_sig = not (a.no_signature or a.own_site); sc.template = a.template; sc.own_site = a.own_site
    if a.live: scan_live(sc, a.live)
    for t in a.targets: scan_dir(sc, t, a.exclude)
    if a.repo: scan_repo(sc, a.repo, a.exclude)
    if sc.hits:
        print(f"LEAKS ({len(sc.hits)}):")
        for where, kind, detail in sc.hits[:400]: print(f"  {kind:32s} {where}  {detail}")
        if len(sc.hits) > 400: print(f"  ... and {len(sc.hits) - 400} more")
    if sc.template and sc.builder_comments:
        sc.info.append(f"{sc.builder_comments} builder comments in the HTML (allowed in a template; a site built from it "
                       f"must strip them: leak_scan.py --strip-comments <site folder>, then the --launch check)")
    for i in sc.info: print("INFO " + i)
    print(f"leak_scan: {sc.files} files, {sc.pages} HTML pages, signature on {sc.signed}/{sc.pages} · "
          f"{len(sc.hits)} leaks · {'PASS' if not sc.hits else 'FAIL'}")
    return 1 if sc.hits else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
