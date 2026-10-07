/**
 * The six window-cleaning resource articles: URL, title (= H1), Emily's hub blurb and link text
 * (2026-10-07, verbatim). Used by the hub and by each article's "Related articles" block, whose
 * text in Emily's docs is identical to the hub blurb. Underscore prefix: Astro does not route this.
 */
export const HUB = "/resources/window-cleaning";
export const HUB_NAME = "Window cleaning resource center";

export const ARTICLES = {
  professional: {
    href: `${HUB}/professional-window-cleaning`,
    title: "What should you know about professional window cleaning?",
    blurb:
      "Professional window cleaning can include interior and exterior glass, screens, and hard-to-reach or multi-story windows for homes and businesses. Learn what services can include, how residential and commercial window cleaning differ, what affects cost and frequency, and what information to provide when requesting an estimate.",
    linkText: "Explore professional window cleaning",
  },
  diy: {
    href: `${HUB}/diy-vs-professional-window-cleaning`,
    title: "Should you clean your windows yourself or hire a professional window cleaner?",
    blurb:
      "Compare DIY and professional window cleaning based on cost, equipment, access, time, results, and safety. Learn when cleaning your own windows is practical, when professional service is a better fit, and how window height, project size, difficult access, and recurring needs can affect the decision.",
    linkText: "Compare DIY and professional cleaning",
  },
  choose: {
    href: `${HUB}/how-to-choose-a-window-cleaning-company`,
    title: "How do you choose a professional window cleaning company?",
    blurb:
      "Learn how to evaluate a professional window cleaning company based on insurance, relevant experience, service scope, pricing, scheduling, reviews, and ability to handle your windows. See what to ask before hiring, what a quote should include, and how to compare providers using consistent criteria.",
    linkText: "Choose a window cleaning company",
  },
  frequency: {
    href: `${HUB}/storefront-and-restaurant-window-cleaning-frequency`,
    title: "How often should storefront and restaurant windows be cleaned?",
    blurb:
      "Learn how to determine an appropriate window cleaning schedule for storefronts, restaurants, and other customer-facing businesses. See how customer traffic, fingerprints, street visibility, environmental exposure, window location, and appearance standards affect cleaning frequency and when recurring commercial window cleaning can be useful.",
    linkText: "Determine your cleaning frequency",
  },
  postConstruction: {
    href: `${HUB}/post-construction-window-cleaning`,
    title: "What should post-construction window cleaning include?",
    blurb:
      "Post-construction window cleaning addresses glass affected by construction, remodeling, renovation, or window installation. Learn what the cleaning process can include, what types of project-related residue can remain, when sticker or adhesive removal is included, and what information to provide when requesting a post-construction window cleaning estimate.",
    linkText: "Review post-construction window cleaning",
  },
  hardToReach: {
    href: `${HUB}/hard-to-reach-and-multi-story-windows`,
    title: "How do professional window cleaners clean hard-to-reach and multi-story windows?",
    blurb:
      "Professional window cleaners evaluate window height, location, building configuration, obstacles, and interior and exterior access before choosing an approach for difficult-access glass. Learn how cleaners assess whether they can service elevated windows, what equipment they can use, and what property details to provide before scheduling.",
    linkText: "Understand hard-to-reach window cleaning",
  },
} as const;
