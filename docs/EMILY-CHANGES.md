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
