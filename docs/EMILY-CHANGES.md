# Emily copy pass — substitutions log (branch `emily-copy`)

One line per change: page · original → change. Rule source: `docs/CONVENTIONS.md` → "E.L. ruling 2026-10-05 — HOUSE CLEANING IS NOT A SERVICE". Every entry is also flagged inline in the page with `<!-- EMILY: … -->` so Emily can re-word.

## Resource articles (hub + 3), 2026-10-05

- AuthorBio (all three articles) · "Today, Phil’s Magic Cleaning provides professional cleaning for homes and businesses, including window cleaning, across the San Francisco Peninsula" → "Today, Phil’s Magic Cleaning provides commercial cleaning and window cleaning for businesses and homes across the San Francisco Peninsula"
- how-to-choose-a-cleaning-company · "Phil’s Magic Cleaning is licensed and insured for residential and commercial cleaning across the San Francisco Peninsula." → "…licensed and insured for commercial cleaning and window cleaning across the San Francisco Peninsula." (also `REVIEW E.L.` — "licensed and insured" is Emily's claim; confirm)
- how-to-choose-a-cleaning-company · services section: "provides professional cleaning for homes and businesses … Services include janitorial and general cleaning for homes and businesses, including commercial cleaning for businesses, plus residential and commercial window cleaning." → "provides commercial cleaning and window cleaning for businesses and homes … Services include janitorial and commercial cleaning for businesses, plus residential and commercial window cleaning."
- how-to-choose-a-cleaning-company · button "View commercial and home cleaning services" → "View commercial cleaning services"
- one-time-deep-and-recurring-cleaning · services section: same substitution as above
- one-time-deep-and-recurring-cleaning · button "View commercial and home cleaning services" → "View commercial cleaning services"
- what-to-expect · services section: same substitution as above
- what-to-expect · button "View commercial and home cleaning services" → "View commercial cleaning services"

## Kept, flagged for E.L. (generic industry wording, not Phil's offering — not changed)

- one-time-deep-and-recurring-cleaning · FAQ "Can homes use recurring professional cleaning?" / "Home cleaning can be scheduled weekly, biweekly, monthly…" — kept, `REVIEW E.L.` comment in the faq array
- what-to-expect · "Home cleaning can identify specific rooms, surfaces, and household priorities." — kept, `REVIEW E.L.` comment beside it

## Structural notes (not wording changes)

- one-time-deep-and-recurring-cleaning · Emily's "Related articles" listed the resource center twice and omitted "How do you choose a professional cleaning company?"; rendered as two siblings + hub once, using her hub-page blurb for the missing item
- what-to-expect · TOC line "What should happen after a professional cleaning service?How can you get the most from a professional cleaning service?" (docx conversion) treated as two TOC items
- All three · "How can I request cleaning…" has no button text in her doc; built as `btn btn-action` "Request a free estimate" → Jobber general request form
- All three · bold inside FAQ answers (article 2) dropped so page text and FAQPage schema match; the two-paragraph FAQ answer in article 1 ("…with confidence?") is one answer string
- /resources/…/one-time-deep-and-recurring-cleaning · FAQ "Can homes use recurring professional cleaning?" (defines home cleaning) → REMOVED from page + FAQPage schema (E.L. ruling 10/5)
- /resources/…/what-to-expect · "Home cleaning can identify specific rooms, surfaces, and household priorities." → "Homeowners scheduling window cleaning can identify specific windows, access points, and household priorities."

## Resources landing + home cards, 2026-10-07
- /resources · her 10/06 17:45 block "Professional cleaning services overview" (text describes the choosing center, link to the commercial center) → per E.L., one block per hub: commercial block uses the commercial hub's own H1 + intro and links to /resources/commercial-cleaning. Choosing block unchanged. Window block (10/07) added verbatim.
- / (home) · "Cleaning resources" cards for the commercial and window centers now link to the real hubs (were /resources placeholders).

## Commercial and janitorial cleaning resource center (hub + 4), 2026-10-07 — branch `resource-centers-commercial-window`

- /resources/commercial-cleaning (hub) · H2 "How do you choose a commercial cleaning company?" description duplicated the customer-facing-businesses paragraph ("Restaurants, retail stores, salons, gyms, offices, and other customer-facing businesses have different commercial cleaning priorities…") → replaced with the article's own opening definition ("Choose a commercial cleaning company by evaluating its experience, insurance, scope of work…")
- what-is-commercial-cleaning, customer-facing-businesses, offices-and-professional-spaces · Related articles → "How do you choose a commercial cleaning company?" blurb had the same duplicated customer-facing paragraph → same replacement (article's own definition)
- how-to-choose-a-commercial-cleaning-company · services section: "Phil’s Magic Cleaning provides professional cleaning for homes and businesses across the San Francisco Peninsula. Services include janitorial and general cleaning for homes and businesses, including commercial cleaning for businesses, plus residential and commercial window cleaning." → "Phil’s Magic Cleaning provides commercial cleaning and window cleaning for businesses and homes across the San Francisco Peninsula. Services include janitorial and commercial cleaning for businesses, plus residential and commercial window cleaning." (same wording as the live choosing articles; E.L. ruling 10/5)
- the other three commercial articles · services section already uses Emily's newer compliant wording ("…commercial and janitorial cleaning for businesses and professional window cleaning for homes and businesses…") → carried verbatim, no change
- how-to-choose-a-commercial-cleaning-company · Related articles item "What is commercial cleaning, and what services does it include?" was marked H2 under the "Related articles" H2 → rendered as H3 like the other related items
- /resources/commercial-cleaning (hub) · "More information" sentence "…contact Phil’s Magic Cleaning [LINK TO CONTACT PAGE]" had no closing period → period added after the /contact link

## Structural notes (commercial center, not wording changes)

- All four commercial articles · "About the author" uses Emily's 10/7 bio verbatim (already compliant: "commercial and janitorial cleaning for businesses and window cleaning for homes and businesses") via `src/pages/resources/commercial-cleaning/_AuthorBio.astro` (same `#about-the-author` markup) instead of the shared `AuthorBio.astro`, whose text is the older 10/5 edit
- All four · "How can I request…" has no button in her doc; built as `btn btn-action` "Request a free estimate" → `JANITORIAL_FORM_URL` (per CONVENTIONS, commercial pages)
- Hub + all four · CtaBand uses `formUrl={JANITORIAL_FORM_URL} formLabel="Request commercial cleaning"` (same as the home page) instead of the general request form
- All four · "Professional cleaning services overview" related item links to `/resources/choosing-professional-cleaning-services` as her docs have it (E.L. ruling 10/7)
- what-is, how-to-choose, customer-facing · fully-bold closing paragraphs ("How can businesses define…", "How can you make a confident…", "How can businesses define cleaning priorities…") kept bold as `<strong>`

## Window cleaning resource center (hub + 6), 2026-10-07
Source: `Assets/aeo-copy-2026-10-07/md/Resources_Window cleaning resource center*.md`. Pages in `src/pages/resources/window-cleaning/`; shared closing blocks in `_ArticleClose.astro`, related-articles block in `_Related.astro`, URLs/blurbs in `_articles.ts`.
- House-cleaning ruling · nothing to substitute: all 6 "What cleaning services does Phil’s Magic Cleaning provide?" paragraphs, the bylines and the bios already say "commercial and janitorial cleaning for businesses and professional window cleaning for homes and businesses"; buttons already read "View commercial cleaning services" / "View window cleaning services". Carried verbatim.
- All 6 articles · "About the author" (10/07 text) differs from shared `AuthorBio.astro` (10/05 text + E.L. substitution) → carried Emily's 10/07 text verbatim in `_ArticleClose.astro` (same `#about-the-author` id) instead of reusing AuthorBio. E.L.: decide whether AuthorBio adopts the 10/07 wording site-wide.
- All 6 articles · "Professional window cleaning overview" link placeholder `LINK TO Resources_Window cleaning resource center]` (missing "[") → `/resources/window-cleaning`; bold on that H3/paragraph dropped (rendered like the sibling related item).
- Hub + all 6 articles · "How can I request … from Phil’s Magic Cleaning?" has no button in the doc → `btn btn-action` "Request a free estimate" → `REQUEST_FORM_URL` (as in the existing articles).
- Hub · "$150 off" offer carried verbatim (live already); "To confirm current eligibility and offer details, contact Phil’s Magic Cleaning [LINK TO CONTACT PAGE]" had no closing period → link on "contact Phil’s Magic Cleaning" → `/contact`, period added.
- how-to-choose-a-window-cleaning-company · "Why should a window cleaning company be insured?" repeats its own sentence as a separate paragraph ("Insurance matters because window cleaners work around customer property and may face elevated or difficult access conditions.") → duplicate paragraph removed.
- post-construction-window-cleaning · `REVIEW E.L.` — post-construction window cleaning is not on the live /window-cleaning page; FAQ "Can post-construction cleaning include hard-to-reach windows?" says "so we can evaluate…" (implies Phil's offers it). Kept verbatim, flagged.
- hard-to-reach-and-multi-story-windows · `REVIEW E.L.` — "extension tools, water-fed poles, ladders" not named on the live /window-cleaning page. Kept verbatim, flagged.
- Not changed, noted: post-construction "An assessment can determine:" is followed by imperative items ("Identify affected windows…"); DIY FAQ "second story" unhyphenated (hyphenated in the hard-to-reach FAQ). Verbatim.
