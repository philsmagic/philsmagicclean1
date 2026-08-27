import Layout from "@/components/Layout";
import { Link } from "wouter";
import { posts } from "@/data/blogPosts";
import { useSeo } from "@/hooks/useSeo";

const SERIF = { fontFamily: "'Playfair Display', serif" };
const SANS = { fontFamily: "'Source Sans 3', sans-serif" };

export default function Blog() {
  useSeo({
    title: "Window Cleaning Tips & Guides | Phil's Magic Cleaning Blog",
    description:
      "Expert advice on window and commercial cleaning for Bay Area homes and businesses, from Burlingame's 5.0-star rated cleaning service.",
    canonical: "/blog",
  });

  // Client notices are time-sensitive, so they lead regardless of date order.
  const ordered = [...posts].sort((a, b) => Number(!!b.notice) - Number(!!a.notice));

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={SANS}>
            Tips &amp; Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={SERIF}>
            The Phil's Magic Cleaning Blog
          </h1>
          <p className="text-lg text-gray-600 mb-12" style={SANS}>
            Expert advice on keeping Bay Area homes and businesses looking their best — straight from the professionals.
          </p>

          <div className="space-y-10">
            {ordered.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-10 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  {post.notice && (
                    <span
                      className="text-xs font-bold uppercase tracking-wider bg-[#0d7a8a] text-white px-2.5 py-1 rounded"
                      style={SANS}
                    >
                      Client Notice
                    </span>
                  )}
                  <span className="text-sm text-gray-500" style={SANS}>
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#1a3a4a] mb-3" style={SERIF}>
                  {post.body ? (
                    <Link href={`/blog/${post.slug}`} className="no-underline hover:text-[#0d7a8a] transition-colors">
                      {post.title}
                    </Link>
                  ) : (
                    post.title
                  )}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-4" style={SANS}>
                  {post.excerpt}
                </p>

                {/* Only posts with a written body get a link. The previous version
                    linked every "Read Full Article" to tel:6506600430, which called
                    Phil instead of opening the article. */}
                {post.body && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-[#0d7a8a] hover:underline no-underline"
                    style={SANS}
                  >
                    Read Full Article →
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 bg-[#f0f5f8] rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={SERIF}>
              Ready for Spotless Windows?
            </h2>
            <p className="text-gray-600 mb-6" style={SANS}>
              Put our expertise to work for your home or business. Call Phil for a free quote.
            </p>
            <a
              href="tel:6506600430"
              className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={SANS}
            >
              📞 Call 650-660-0430
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
