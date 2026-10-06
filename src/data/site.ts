/**
 * Single source of truth for business facts used in copy, schema and the
 * footer. Every value here must be on Emily's Verified Facts sheet or in the
 * client file. Nothing here is invented.
 */
export const SITE_URL = "https://philsmagicclean.com";

export const BUSINESS = {
  name: "Phil's Magic Cleaning",
  legalName: "Phil's Magic Cleaning",
  phone: "650-660-0430",
  phoneE164: "+16506600430",
  phoneDisplay: "(650) 660-0430",
  owner: "Phil",
  address: {
    street: "1404 Burlingame Ave",
    city: "Burlingame",
    region: "CA",
    postal: "94010",
    country: "US",
  },
  rating: { value: "5.0", count: 42 }, // Google — Phil's own achievement; keep current
  yearsServing: "4+",
  logo: `${SITE_URL}/images/logo.jpg`,
  /** Profile URLs for schema sameAs. EMPTY until E.L. supplies them (GBP, Facebook, Instagram, Yelp). */
  sameAs: [
    "https://maps.google.com/?cid=2561441622886334181", // Google Business Profile
    "https://www.facebook.com/philsmagiccleaning",
    "https://www.instagram.com/philsmagiccleaning/",
    "https://www.yelp.com/biz/phils-magic-cleaning-burlingame",
  ] as string[],
  /** Public hours — EMPTY until E.L. confirms. Schema omits openingHours while empty. */
  openingHours: [] as string[],
};

export const SERVICE_AREA = [
  // Confirmed list — agency/projects/phils-magic/seo-plan.md (2026-08-09, from the GBP
  // dashboard; safe for page copy AND GBP). Brisbane is NOT served (E.L., 2026-10-05).
  // Must match the Google Business Profile service area exactly (NAP consistency).
  "South San Francisco",
  "San Bruno",
  "Millbrae",
  "Burlingame",
  "San Mateo",
  "Foster City",
  "Belmont",
  "San Carlos",
  "Redwood City",
  "Atherton",
  "Menlo Park",
  "East Palo Alto",
  "Palo Alto",
  "Mountain View",
];

/**
 * Jobber request forms (Settings > Requests and Bookings > Share links).
 * Two forms on purpose: a janitorial-form submission is by definition a
 * janitorial lead, so attribution needs no UTM. The pixel's Lead event keys
 * off the form id in the URL (see Base.astro).
 */
export const REQUEST_FORM_URL =
  "https://clienthub.getjobber.com/hubs/c080b44c-658d-4e03-aad4-23bd241272cb/public/requests/5008849/new";
export const JANITORIAL_FORM_URL =
  "https://clienthub.getjobber.com/hubs/c080b44c-658d-4e03-aad4-23bd241272cb/public/requests/5126135/new";

/** Top nav per Emily's copy (2026-10-05): Services moves to the footer; Blog becomes Resources. */
export const NAV_LINKS = [
  { label: "Cleaning Services", href: "/janitorial-cleaning" },
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Footer "Pages" column — keeps Services, adds Meet Magic Phil. */
export const FOOTER_LINKS = [
  { label: "Commercial Cleaning Services", href: "/janitorial-cleaning" }, // EMILY: was "Commercial and Home Cleaning Services" — house cleaning is not a service (E.L. 10/5)
  { label: "Window Cleaning", href: "/window-cleaning" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Meet Magic Phil", href: "/meet-magic-phil" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

/** Analytics fire ONLY on these hostnames. Localhost and previews send nothing (see Base.astro). */
export const PROD_HOSTS = ["philsmagicclean.com", "www.philsmagicclean.com"];
export const GA_ID = "G-V3TMEPTD2V";
export const META_PIXEL_ID = "1076653965253682";
