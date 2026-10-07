# Build conventions — philsmagicclean AEO rebuild

Read before writing any page. Source of the rules: `~/Agency-AI-Team/agency/knowledge/sop-website-creation.md`
and the two audits in `~/Agency-AI-Team/agency/projects/phils-magic/AEO-AUDIT-2026-10-05-article-{1,2}.md`.

## Stack
Astro 5, static output, Tailwind v4 (tokens in `src/styles/global.css`), **pnpm only**. No React, no
client-side routing, no JS except the header menu toggle and the Meta pixel (both in the layout).

## Page skeleton (every page)
```astro
---
import Base from "@/layouts/Base.astro";
import Toc from "@/components/Toc.astro";          // when the page has 3+ sections
import Faq from "@/components/Faq.astro";          // only with real, visible Q&A
import CtaBand from "@/components/CtaBand.astro";
import { BUSINESS, REQUEST_FORM_URL, JANITORIAL_FORM_URL } from "@/data/site";
import { breadcrumbs, service, faqPage } from "@/data/schema";
const path = "/window-cleaning";
const title = "…";            // ≤ 60 chars, ends "| Phil's Magic Cleaning"
const description = "…";      // ≤ 160 chars
const faq = [{ q: "…", a: "…" }];   // same array → <Faq> AND faqPage() so text matches verbatim
---
<Base {title} {description} {path} schema={[breadcrumbs([{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:"Window Cleaning",path}]), service(path, "Window Cleaning", description), faqPage(path, faq)]}>
  <article class="container mx-auto px-4 max-w-7xl py-12">
    <p class="eyebrow">…</p>
    <h1 class="text-4xl md:text-5xl mb-4">…</h1>
    <p class="text-lg text-muted max-w-3xl">ONE- or two-sentence direct answer/definition — first thing after the H1.</p>
    <div class="brand-rule max-w-xs my-6"></div>
    <Toc items={[{id:"what-we-clean",label:"What we clean"}, …]} />
    <section id="what-we-clean"> <h2 id="…">…</h2> … </section>
    <Faq items={faq} />
  </article>
  <CtaBand />
</Base>
```

## AEO structure rules
- Exactly one `<h1>`. Heading order H1 → H2 → H3, never skipping.
- Definition/answer `<p>` immediately after the H1.
- Every H2 (and FAQ H3) has a **stable, descriptive `id`** (`id="pricing"`, not `id="section-2"`). These are permanent URLs; pick them once.
- Steps → `<ol><li>`. Feature lists → `<ul>`. Callouts → `<aside class="callout">`.
- Links are plain `<a href="/path">`. Anchor text says where it goes ("Window cleaning pricing"), never "read more" / "click here" / "learn more".
- Hub ↔ spoke: `/services` links to every service page; every service page links back to `/services`.
- Images: `<img src width height alt loading="lazy" decoding="async">` (hero image: no lazy).
- Breadcrumb schema must match a **visible** breadcrumb trail. Render it:
  `<nav aria-label="Breadcrumb" class="text-sm text-muted mb-4"><ol class="flex gap-2"><li><a href="/">Home</a></li><li aria-hidden="true">›</li>…<li aria-current="page">Window Cleaning</li></ol></nav>`
- FAQPage schema only when the Q&A is on the page, verbatim, not collapsed.

## Copy rules (1:1 pass, 2026-10-05)
- **Carry the live copy as written.** Do not rewrite, embellish, or add claims. Emily's copy replaces it later.
- Restructuring IS allowed: splitting a paragraph into a definition + sections, turning a run-on Q&A list into FAQ items, adding section headings. Keep the words.
- Phone: `{BUSINESS.phoneDisplay}` → (650) 660-0430 in text; `tel:{BUSINESS.phoneE164}` in href.
- Facts come from `src/data/site.ts`. Never hard-code the address, rating or phone.
- **Flag, don't delete:** if the source names a client of Phil's (FASTSIGNS, Belfor, Baking Arts, Burlingame Tobacconist…) or makes a scale/percentage claim ("100% satisfaction"), keep it and add `<!-- REVIEW E.L.: named client / unverified claim -->` beside it. E.L. decides.
- Never add "house cleaning". Pressure washing IS a current service.
- Reviewer names/initials from the live site stay (they are public Google reviews).

## Brand
- Headings: Archivo (display token). Body: Source Sans 3. Set by global.css; don't inline fonts.
- Colour classes: `text-ink`, `text-muted`, `bg-wash`, `border-line`, `text-blue`, `text-action`, `bg-action`.
- **Teal (`btn-action`) = the ONE primary action per screen** (quote/book). Secondary = `btn-outline`.
- Logo: `/images/logo-landscape.png` (header), `/images/logo-stacked.png` (square). Never on dark.
- Old colours `#1a3a4a` `#0d7a8a` `#f0f5f8` `#0a6370`, Playfair Display and inline `style={{fontFamily}}` must not survive translation.

## Analytics — production hostname only
**Never ship a live measurement ID without a hostname gate.** `Base.astro` loads GA4 + the Meta pixel only when `location.hostname` is in `PROD_HOSTS` (site.ts). Localhost and previews get inert `gtag`/`fbq` stubs that record to `window.dataLayer` / `window.__fbqRecord`. Verify events by reading those, never by watching GA4 Realtime. (Learned 5 Oct: ungated preview sent 6 phone_tap + 3 quote_click into Phil's production property.)

## Pixel
Nothing to do per page. `Base.astro` fires PageView per load and `Lead` on any click to a
`clienthub.getjobber.com` link (janitorial form id `5126135` → "Janitorial request form", else "General").
Keep Jobber links as plain `<a href={JANITORIAL_FORM_URL} target="_blank" rel="noopener noreferrer">`.

## Done means
`pnpm build` passes; page has 1 H1, a definition `<p>` under it, ids on H2s, breadcrumb nav + schema
agree, no old hex colours, no "read more" anchors, all links resolve to real routes.

### Hazard: Phil's OLD repo (`philsmagic/philsmagicclean1`) has no gate
The retired wouter site hard-codes GA4 `G-V3TMEPTD2V` and Meta pixel `1076653965253682` in
`client/index.html` with no hostname check. **Any local `pnpm dev` or preview of that repo sends real
page views, PageViews, `Lead` (on Jobber clicks) and, after the `ga4-quote-click` retrofit, `quote_click`
into Phil's production datasets.** Decision (Sable, 2026-10-05): not fixed there — the repo is being
retired and the retrofit PR stays at 11 lines. Mitigations: (1) before clicking anything in a local run,
record-wrap: `window.fbq = function(){ (window.__r = window.__r||[]).push([...arguments]); }` and read
`window.dataLayer` instead of GA4 Realtime; (2) the systemic control is a hostname ≠ localhost filter on
the Looker Studio reports (GA4 Admin has no native hostname data filter).

---

# Emily's copy pass (branch `emily-copy`, 2026-10-05)

Source of truth for every word: `Development/ACTIVE PROJECTS/2026 - Phil's Magic/Assets/aeo-copy-2026-10-05/md/*.md`
(converted from Emily Matthews' docx; the docx are beside them). Read `Notes About Edits.md` first.

## Emily's rules (all binding)
- **Carry her copy verbatim**, including deliberate repetition across pages and **sentence-case headings** (do not
  title-case; do not add CSS uppercase). Exception: the home page keeps her capitalisation as written.
- Her meta title / meta description per page, exactly (she kept titles <55, descriptions <160).
- Her H1 and H2s. "Existing | Recommended" tables mean: replace the Existing text with the Recommended text,
  in place. "NEW / ADD …" rows insert new blocks where she says.
- **Resource articles carry NO visible dates**, so their schema is `Article` with `author` + `publisher` and
  **no datePublished/dateModified** (schema must not claim what the page doesn't show).
- **"By Magic Phil"** byline on each resource article links (`href="#about-the-author"`) to the long bio block at
  the bottom of that page (`<section id="about-the-author">`). Build one `AuthorBio.astro` and reuse it.
- Table of contents = **only the H2s Emily lists in her TOC**, not all H2s.
- Blog posts keep visible dates (Aug 25, 2026) → `BlogPosting` with dates as before.

## E.L. ruling 2026-10-05 — HOUSE CLEANING IS NOT A SERVICE
Emily's copy introduces "home cleaning" as a service line. **It is not one.** Phil serves homes only with
window cleaning (and pressure washing). Apply, and **flag every instance** with
`<!-- EMILY: home-cleaning wording changed per E.L. ruling 10/5 — original: "…" -->` so she can re-word:
- "commercial and home cleaning" → "commercial cleaning and window cleaning for businesses and homes"
- "Commercial & Home" in meta titles → "Commercial & Window"  (keep <55 chars)
- "commercial, janitorial, and home cleaning" → "commercial, janitorial, and window cleaning"
- Any sentence/paragraph that *defines or offers* home/house cleaning (e.g. "Home cleaning provides general
  cleaning for houses…") → **remove**, keep the surrounding structure, flag it.
- "homeowners" is fine when the context is window cleaning or choosing a cleaner in general.
- The "Home cleaning services: a resource center" (coming soon) is **not built**.
Keep a running list of every substitution in `docs/EMILY-CHANGES.md` (one line each: page · original → change).

## URL map (ranking URLs preserved; nothing moves)
| Emily's page | URL | Notes |
|---|---|---|
| Home | `/` | nav + footer per `Home.md` (already in `site.ts`) |
| Cleaning Services (was Janitorial) | `/janitorial-cleaning` | URL unchanged; nav label "Cleaning Services" |
| Services | `/services` | hub; footer-only |
| Window Cleaning | `/window-cleaning` | |
| Service Areas | `/service-areas` | |
| Reviews | `/reviews` | |
| About | `/about` | company page |
| **Meet Magic Phil** (NEW) | `/meet-magic-phil` | Person entity URL (schema.ts already points here) |
| **Resources landing** (NEW) | `/resources` | |
| Blog (news) | `/resources/blog` | **moved** (E.L. 10/5); `/blog` and `/blog/*` 301 → `/resources/blog/*`; `/update` 301 → `/resources/blog/new-system` |
| Blog posts | `/resources/blog/new-system`, `/resources/blog/janitorial-services` | slugs unchanged; titles/copy from `Resources_Blog_*.md` |
| **Choosing & managing… hub** (NEW) | `/resources/choosing-professional-cleaning-services` | |
| **How do you choose a professional cleaning company?** | `/resources/choosing-professional-cleaning-services/how-to-choose-a-cleaning-company` | |
| **One-time, deep, and recurring cleaning** | `/resources/choosing-professional-cleaning-services/one-time-deep-and-recurring-cleaning` | |
| **What should you expect…** | `/resources/choosing-professional-cleaning-services/what-to-expect` | |
Breadcrumbs follow this hierarchy; `breadcrumbs()` schema must match the visible trail.

## Still E.L.'s decisions — carry and keep flagged (don't resolve)
Named clients (FASTSIGNS, Baking Arts, Burlingame Tobacconist, Belfor; "Don's" on Meet Magic Phil) ·
"42 five-star reviews" (count sweep pending — leave 42) · any "100%" claim.

---

# Resource centers 2 + 3 (branch `resource-centers-commercial-window`, 2026-10-07)

Copy: `Development/ACTIVE PROJECTS/2026 - Phil's Magic/Assets/aeo-copy-2026-10-07/md/` (emails summarised in `../EMAILS.md`).
Build each exactly like the existing **choosing-professional-cleaning-services** center — copy its hub
(`src/pages/resources/choosing-professional-cleaning-services/index.astro`) and an article
(`…/how-to-choose-a-cleaning-company.astro`) as the pattern: same components (Base, Toc, Faq, AuthorBio,
CtaBand), same schema (`breadcrumbs`, `article()` with no dates, `faqPage` from the same array), same
"By Magic Phil" → `#about-the-author`, TOC = only the H2s Emily lists in her "Table of contents", Related
articles as a `<nav>`. Every rule in "Emily's copy pass" above still applies (verbatim, sentence case,
house-cleaning ruling + flag + EMILY-CHANGES.md line).

| Page | URL |
|---|---|
| Commercial hub | `/resources/commercial-cleaning` |
| What is commercial cleaning…? | `/resources/commercial-cleaning/what-is-commercial-cleaning` |
| How do you choose a commercial cleaning company? | `/resources/commercial-cleaning/how-to-choose-a-commercial-cleaning-company` |
| …restaurants, retail stores, salons, and other customer-facing businesses | `/resources/commercial-cleaning/customer-facing-businesses` |
| …offices and professional spaces | `/resources/commercial-cleaning/offices-and-professional-spaces` |
| Window hub | `/resources/window-cleaning` |
| What should you know about professional window cleaning? | `/resources/window-cleaning/professional-window-cleaning` |
| Should you clean your windows yourself or hire a professional? | `/resources/window-cleaning/diy-vs-professional-window-cleaning` |
| How do you choose a professional window cleaning company? | `/resources/window-cleaning/how-to-choose-a-window-cleaning-company` |
| How often should storefront and restaurant windows be cleaned? | `/resources/window-cleaning/storefront-and-restaurant-window-cleaning-frequency` |
| What should post-construction window cleaning include? | `/resources/window-cleaning/post-construction-window-cleaning` |
| How do professional window cleaners clean hard-to-reach and multi-story windows? | `/resources/window-cleaning/hard-to-reach-and-multi-story-windows` |

Breadcrumbs: Home › Resources › <hub H1 short name> › <article>. Placeholders: `[LINK TO MEET MAGIC PHIL]` → `/meet-magic-phil`;
`[LINK TO CONTACT PAGE]` → `/contact`; `[BUTTON WITH LINK TO CLEANING SERVICES PAGE]` → `/janitorial-cleaning` (btn-outline);
`[BUTTON WITH LINK TO WINDOW CLEANING PAGE]` → `/window-cleaning` (btn-outline); `[LINK TO <article title>]` → that article's URL
above; `[LINK TO Resources_Choosing and managing professional cleaning services]` → `/resources/choosing-professional-cleaning-services`;
`LINK TO Resources_Window cleaning resource center]` (missing "[") → `/resources/window-cleaning`.
**E.L. ruling 2026-10-07:** the "Professional cleaning services overview" block at the end of the commercial articles keeps
linking to the **Choosing** hub, as Emily's docs have it (its text describes that hub). Do not change it.
Review/quote request buttons follow the existing articles: `btn-action` → the Jobber form (janitorial form `JANITORIAL_FORM_URL`
on commercial pages, `REQUEST_FORM_URL` on window pages).
The `$150 off` offer appears in both hubs — carry it verbatim (it is live on the site already).
