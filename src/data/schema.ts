import { BUSINESS, SERVICE_AREA, SITE_URL } from "./site";

/** Stable entity IDs reused on every page (AEO S1 §D). Never change these. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#phil`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const addr = BUSINESS.address;

/** The one canonical Organization entity, as a LocalBusiness subtype. */
export const organization = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": ORG_ID,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.phoneE164,
  logo: { "@type": "ImageObject", url: BUSINESS.logo },
  image: BUSINESS.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: addr.street,
    addressLocality: addr.city,
    addressRegion: addr.region,
    postalCode: addr.postal,
    addressCountry: addr.country,
  },
  areaServed: SERVICE_AREA.map((city) => ({ "@type": "City", name: city })),
  founder: { "@id": PERSON_ID },
  ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
  ...(BUSINESS.openingHours.length ? { openingHours: BUSINESS.openingHours } : {}),
};

/** Phil — owner. jobTitle/sameAs filled in once E.L. supplies them. */
export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Magic Phil",
  alternateName: "Phil",
  jobTitle: "Founder",
  url: `${SITE_URL}/meet-magic-phil`,
  worksFor: { "@id": ORG_ID },
  ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: BUSINESS.name,
  publisher: { "@id": ORG_ID },
};

export function webPage(path: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1].path}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function service(path: string, name: string, description: string) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: SERVICE_AREA.map((city) => ({ "@type": "City", name: city })),
    url: `${SITE_URL}${path}`,
  };
}

/** Only call this when the Q&A is VISIBLE on the page, verbatim (S1 §G). */
export function faqPage(path: string, qa: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** Resource article: NO dates (Emily's rule — none are visible, and schema must match the page). */
export function article(path: string, headline: string, description: string) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    headline,
    description,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function blogPosting(opts: {
  path: string; headline: string; description: string; datePublished: string; dateModified?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${SITE_URL}${opts.path}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${opts.path}` },
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
  };
}
