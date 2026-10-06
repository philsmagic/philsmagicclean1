/**
 * Blog posts — copy from Emily Matthews' AEO pass (2026-10-05), carried
 * verbatim from Assets/aeo-copy-2026-10-05/md/Resources_Blog_*.md.
 * Dates are ISO (schema needs them); the display format is derived.
 * Blog posts keep visible dates → BlogPosting schema with dates (CONVENTIONS).
 *
 * The three body-less teaser posts from the old site (how-often-clean-windows,
 * storefront-window-cleaning-roi, post-construction-window-cleaning) are NOT in
 * Emily's copy and were removed from this list on 2026-10-05. They return when
 * Emily writes them (see the "Window cleaning: a resource center" list in her
 * Notes About Edits.md).
 */
export type Block =
  | { type: "p"; text: string; link?: { text: string; href: string }; after?: string }
  | { type: "h2"; text: string; id: string }
  | { type: "list"; items: string[]; variant?: "check" | "bullet" }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "callout"; title: string; text: string }
  | { type: "button"; label: string; href: string }
  | { type: "request"; label: string; note?: string; form: "general" | "janitorial" }
  | { type: "cta"; text: string };

export type Post = {
  slug: string;
  datePublished: string; // ISO
  dateModified?: string; // ISO — only when the answer itself changed
  /** H1 (Emily's H1). */
  title: string;
  /** Emily's meta title, exactly. Falls back to `${title} | Phil's Magic Cleaning`. */
  metaTitle?: string;
  /** Blurb shown on /resources/blog (from Resources_Blog.md); also the post's intro when `intro` is absent. */
  excerpt: string;
  /** Definition paragraph directly under the H1 on the post page (from the post doc). */
  intro?: string;
  metaDescription?: string;
  body?: Block[];
  /** Client notices rather than evergreen content: badged. */
  notice?: boolean;
};

export const posts: Post[] = [
  {
    slug: "new-system",
    datePublished: "2026-08-25",
    title: "What is changing with Phil’s Magic Cleaning scheduling and invoicing?",
    metaTitle: "New Scheduling & Invoicing System | Phil’s Magic Cleaning",
    excerpt:
      "Phil’s Magic Cleaning is moving to Jobber for scheduling and invoicing beginning August 28, 2026. Learn what is changing, when the new system takes effect, and whether existing customers need to take any action as Phil’s Magic transitions to the new system.",
    intro:
      "Phil’s Magic Cleaning is moving to Jobber, a new platform for scheduling and invoicing. The change begins Friday, August 28, 2026, and requires little to no action from customers.",
    metaDescription:
      "Phil’s Magic Cleaning is moving to Jobber for scheduling and invoicing. Learn when the change starts and what customers need to know.",
    notice: true,
    body: [
      { type: "h2", id: "what-system", text: "What scheduling and invoicing system is Phil’s Magic Cleaning using?" },
      // EMILY: home-cleaning wording changed per E.L. ruling 10/5 — original: "continues providing professional cleaning for businesses and homes across the San Francisco Peninsula."
      { type: "p", text: "Phil’s Magic Cleaning is moving to Jobber for customer scheduling and invoicing. The new platform will support these administrative functions as Phil’s Magic Cleaning continues providing professional cleaning for businesses and window cleaning for homes across the San Francisco Peninsula." },
      { type: "h2", id: "when", text: "When will Phil’s Magic Cleaning start using Jobber?" },
      { type: "p", text: "Phil’s Magic Cleaning will begin using Jobber for scheduling and invoicing on Friday, August 28, 2026. This transition will update how scheduling and invoicing are managed without requiring significant action from existing customers." },
      { type: "h2", id: "what-customers-need-to-do", text: "Do customers need to do anything?" },
      { type: "p", text: "Customers need to do little to nothing as Phil’s Magic Cleaning moves to the new scheduling and invoicing system. If any action is required for your account, scheduling, or invoicing, Phil’s Magic Cleaning will provide the information you need." },
      { type: "h2", id: "what-the-change-means", text: "What does the change mean for Phil’s Magic Cleaning customers?" },
      { type: "p", text: "The primary change is the platform Phil’s Magic Cleaning uses for scheduling and invoicing. Customers can continue working with Phil’s Magic Cleaning while these administrative functions transition to Jobber." },
      { type: "h2", id: "questions", text: "Have questions about scheduling or invoicing?" },
      { type: "p", text: "Contact Phil’s Magic Cleaning if you have questions about the new system or need help with scheduling or invoicing." },
      { type: "button", label: "Contact Phil’s Magic Cleaning", href: "/contact" },
    ],
  },
  {
    slug: "janitorial-services",
    datePublished: "2026-08-25",
    title: "Phil’s Magic Cleaning expands commercial and janitorial cleaning services",
    metaTitle: "Expanded Commercial Cleaning | Phil’s Magic Cleaning",
    // EMILY: the post doc has no definition paragraph under the H1; the /resources/blog blurb is reused as the intro.
    excerpt:
      "Phil’s Magic Cleaning has expanded its commercial and janitorial cleaning services for businesses across the San Francisco Peninsula. Learn about recurring and one-time cleaning options and how the expanded services support offices, storefronts, restaurants, and other local businesses.",
    metaDescription:
      "Phil’s Magic Cleaning now provides recurring and one-time commercial and janitorial cleaning for businesses across the San Francisco Peninsula.",
    body: [
      { type: "h2", id: "what-we-provide", text: "What commercial and janitorial cleaning does Phil’s Magic Cleaning provide?" },
      { type: "p", text: "Phil’s Magic Cleaning provides recurring and one-time commercial and janitorial cleaning for businesses, including cleaning for floors, restrooms, break rooms, common areas, and interior glass." },
      { type: "p", text: "Commercial cleaning can be tailored to the needs of the property and business, with one-time service or recurring cleaning based on the required scope and schedule." },
      { type: "h2", id: "types-of-businesses", text: "What types of businesses can use Phil’s Magic Cleaning?" },
      { type: "p", text: "Phil’s Magic Cleaning provides commercial and janitorial cleaning for offices, restaurants, storefronts, medical and dental offices, salons, gyms, and other businesses on the San Francisco Peninsula." },
      { type: "p", text: "Cleaning needs vary by property type. An office can have different priorities from a restaurant, storefront, medical or dental office, salon, or gym, so the cleaning scope and schedule can be based on how the space is used." },
      { type: "h2", id: "still-window-cleaning", text: "Does Phil’s Magic Cleaning still provide window cleaning?" },
      { type: "p", text: "Yes. Phil’s Magic Cleaning continues to provide professional window cleaning for homes and businesses. Commercial and janitorial cleaning expands the company’s services for businesses rather than replacing its window cleaning services." },
      { type: "p", text: "Phil’s Magic Cleaning began as a window cleaning business and built its reputation through detailed work and strong customer relationships. The company has expanded that approach to professional cleaning for more areas of commercial properties." },
      { type: "h2", id: "one-time-or-recurring", text: "Are commercial cleaning services available one time or on a recurring schedule?" },
      { type: "p", text: "Both. Phil’s Magic Cleaning provides one-time and recurring commercial and janitorial cleaning so businesses can select service based on their property, cleaning needs, and schedule." },
      { type: "p", text: "Recurring cleaning provides ongoing care for businesses that need regular service, while one-time service addresses needs that don't require an ongoing schedule." },
      { type: "h2", id: "where", text: "Where does Phil’s Magic Cleaning provide commercial cleaning?" },
      { type: "p", text: "Phil’s Magic Cleaning provides commercial and janitorial cleaning for businesses across the San Francisco Peninsula, with a primary service area from South San Francisco to Mountain View." },
      { type: "h2", id: "introductory-offer", text: "Is there an introductory offer for existing window cleaning customers?" },
      { type: "p", text: "Existing Phil’s Magic Cleaning window cleaning customers can receive $150 off their first month of recurring commercial or janitorial cleaning service." },
      { type: "h2", id: "more-information", text: "More information" },
      // Emily's contact link is inline in the sentence ("[LINK TO CONTACT PAGE]"). The Jobber request form lives in the CtaBand below the post.
      { type: "p", text: "To confirm current eligibility and offer details, ", link: { text: "contact Phil’s Magic Cleaning", href: "/contact" }, after: "." },
    ],
  },
];

export const published = () => posts.filter((p) => p.body);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const displayDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
