import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description?: string;
  /** Path only, e.g. "/blog/new-system". Canonical host is added automatically. */
  canonical?: string;
  /** Set true for pages that should not be indexed (e.g. duplicate short URLs). */
  noindex?: boolean;
};

const SITE = "https://philsmagicclean.com";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

/**
 * Sets per-page title, description, canonical, and Open Graph tags.
 *
 * The site is a client-rendered SPA with a single static index.html, so without
 * this every route shares one title and one description — which makes it
 * impossible for individual service, city, or blog pages to rank separately.
 */
export function useSeo({ title, description, canonical, noindex }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    }

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });

    const href = `${SITE}${canonical ?? window.location.pathname}`;
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: href });

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = href;

    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta('meta[name="robots"]', { name: "robots", content: "noindex, follow" });
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, canonical, noindex]);
}
