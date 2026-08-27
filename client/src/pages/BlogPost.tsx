import Layout from "@/components/Layout";
import { Link, useRoute } from "wouter";
import NotFound from "@/pages/NotFound";
import { getPost, REQUEST_FORM_URL, type Block } from "@/data/blogPosts";
import { useSeo } from "@/hooks/useSeo";

const SERIF = { fontFamily: "'Playfair Display', serif" };
const SANS = { fontFamily: "'Source Sans 3', sans-serif" };

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mt-10 mb-4" style={SERIF}>
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-lg text-gray-700 leading-relaxed mb-5" style={SANS}>
          {block.text}
        </p>
      );
    case "list": {
      // Checkmarks read as reassurance, so they suit "what stays the same" but
      // oversell a list that includes things the client has to act on.
      const marker = block.variant === "bullet" ? "\u2022" : "\u2713";
      return (
        <ul key={i} className="mb-6 space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-lg text-gray-700 leading-relaxed" style={SANS}>
              <span className="text-[#0d7a8a] font-bold shrink-0" aria-hidden="true">
                {marker}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    case "callout":
      return (
        <div key={i} className="bg-[#f0f5f8] border-l-4 border-[#0d7a8a] rounded-r-lg p-6 my-8">
          <p className="font-bold text-[#1a3a4a] text-lg mb-1" style={SANS}>
            {block.title}
          </p>
          <p className="text-gray-700 leading-relaxed" style={SANS}>
            {block.text}
          </p>
        </div>
      );
    case "button": {
      // Internal hrefs go through wouter so they do not reload the whole SPA;
      // external ones open in a new tab.
      const internal = block.href.startsWith("/");
      const classes =
        "inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-7 py-3 rounded no-underline transition-colors";
      return (
        <div key={i} className="my-8">
          {internal ? (
            <Link href={block.href} className={classes} style={SANS}>
              {block.label} →
            </Link>
          ) : (
            <a
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
              style={SANS}
            >
              {block.label} →
            </a>
          )}
        </div>
      );
    }
    case "request":
      // Renders only when a form URL is configured. Phone stays the primary
      // route; this is the alternative for people who would rather not call.
      if (!REQUEST_FORM_URL) return null;
      return (
        <div key={i} className="my-8">
          <a
            href={REQUEST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-7 py-3 rounded no-underline transition-colors"
            style={SANS}
          >
            {block.label} →
          </a>
          {block.note && (
            <p className="text-sm text-gray-500 mt-3 mb-0" style={SANS}>
              {block.note}
            </p>
          )}
        </div>
      );
    case "cta":
      return (
        <p key={i} className="text-lg text-[#1a3a4a] font-semibold mt-10 mb-2" style={SANS}>
          {block.text}
        </p>
      );
  }
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const [isShortUrl] = useRoute("/update");

  // The short /update URL exists for SMS, where every character costs money.
  // It serves the same notice, canonicalised to the blog URL so the duplicate
  // does not compete with the original in search.
  const slug = isShortUrl ? "new-system" : params?.slug;
  const post = slug ? getPost(slug) : undefined;

  // A post without a body is a teaser on the index with no article behind it,
  // so it must read as missing here too - otherwise the 404 page inherits the
  // article's title and description, and can be indexed under them.
  const published = post?.body ? post : undefined;

  useSeo({
    title: published
      ? `${published.title} | Phil's Magic Cleaning`
      : "Article Not Found | Phil's Magic Cleaning",
    description: published?.metaDescription ?? published?.excerpt,
    canonical: published ? `/blog/${published.slug}` : undefined,
    noindex: !published,
  });

  if (!published) return <NotFound />;

  return (
    <Layout>
      <article className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#0d7a8a] hover:underline no-underline"
            style={SANS}
          >
            ← Back to all articles
          </Link>

          <div className="text-sm text-gray-500 mt-6 mb-2" style={SANS}>
            {published.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a3a4a] mb-8 leading-tight" style={SERIF}>
            {published.title}
          </h1>

          {published.body!.map(renderBlock)}

          <div className="mt-14 bg-[#f0f5f8] rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={SERIF}>
              Questions about any of this?
            </h2>
            <p className="text-gray-600 mb-6" style={SANS}>
              Call or text Phil directly. He answers his own phone.
            </p>
            <a
              href="tel:6506600430"
              className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={SANS}
            >
              📞 Call or Text 650-660-0430
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
