import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";

const SERIF = { fontFamily: "'Playfair Display', serif" };
const SANS = { fontFamily: "'Source Sans 3', sans-serif" };

const pricingRows = [
  { type: "Standard / Oval / Octagon", panes: "1 pane each" },
  { type: "Two-Lite Slider / Double Hung", panes: "2 panes each" },
  { type: "Patio Door / Bay Window", panes: "2–3 panes each" },
  { type: "French Windows & Doors", panes: "5 panes each" },
  { type: "Bow Window", panes: "4 panes each" },
  { type: "Base Rate", panes: "$20 / pane", bold: true },
];

const included = [
  ["Interior and exterior glass", "Both sides, every pane, plus frames and sills."],
  ["Screens cleaned and reinstalled", "Removed, scrubbed, dried, and refitted — not wiped in place."],
  ["Hard water and mineral removal", "Scraped and treated, not just washed over."],
  ["Multi-story access", "Third-story condos and tall commercial facades — the right ladders and poles."],
];

export default function WindowCleaning() {
  useSeo({
    title: "Window Cleaning Pricing — $20 Per Pane | Phil's Magic Cleaning",
    description:
      "Transparent per-pane window cleaning pricing for Burlingame, San Mateo, and the Peninsula. Starting at $20 per pane. 5.0-star rated, licensed and insured. Call 650-660-0430.",
    canonical: "/window-cleaning",
  });

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={SANS}>
            Window Cleaning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={SERIF}>
            Every Pane, Perfected
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed" style={SANS}>
            The work that earned us 42 five-star reviews. Homes, storefronts, restaurants, and
            offices across the Peninsula — inside and out, screens included, no streaks and no
            shortcuts.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="tel:6506600430"
              className="bg-[#1a3a4a] hover:bg-[#0d2a38] text-white font-semibold px-7 py-3 rounded no-underline transition-colors"
              style={SANS}
            >
              Call for a Free Quote
            </a>
            <Link
              href="/reviews"
              className="border border-[#1a3a4a] text-[#1a3a4a] hover:bg-gray-50 font-semibold px-7 py-3 rounded no-underline transition-colors"
              style={SANS}
            >
              Read All 42 Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f5f8] py-16 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={SANS}>
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mt-2 mb-3" style={SERIF}>
            Simple Per-Pane Pricing
          </h2>
          <p className="text-sm text-gray-600 mb-8 max-w-xl" style={SANS}>
            Starting at <strong>$20 per pane</strong>. Each window type counts as a set number of
            panes. Call for a free quote based on your specific home or business.
          </p>

          <div className="max-w-2xl bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-5 py-2 border-b border-gray-200">
              <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={SANS}>
                Window Type Visual Guide
              </span>
            </div>
            <img
              src="/images/window-type-guide.jpg"
              alt="Visual guide showing different window types and their pane counts for pricing"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <div className="max-w-2xl bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wider" style={SANS}>
                    Window Type
                  </th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wider" style={SANS}>
                    Pane Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.type} className={`border-b border-gray-100 last:border-0 ${row.bold ? "bg-gray-50" : ""}`}>
                    <td className={`px-5 py-3 text-gray-700 ${row.bold ? "font-bold" : ""}`} style={SANS}>
                      {row.type}
                    </td>
                    <td className={`px-5 py-3 text-right text-[#0d7a8a] ${row.bold ? "font-bold" : ""}`} style={SANS}>
                      {row.panes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500" style={SANS}>
            Pricing varies by property. Call{" "}
            <a href="tel:6506600430" className="text-[#0d7a8a] no-underline hover:underline">
              650-660-0430
            </a>{" "}
            for a free estimate.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-8" style={SERIF}>
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {included.map(([title, body]) => (
              <div key={title} className="border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-[#1a3a4a] mb-2" style={SANS}>{title}</p>
                <p className="text-gray-600 leading-relaxed" style={SANS}>{body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="text-[#0d7a8a] font-semibold no-underline hover:underline"
            style={SANS}
          >
            See all window cleaning services →
          </Link>
        </div>
      </section>

      <section className="bg-[#1a3a4a] py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={SERIF}>
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed" style={SANS}>
            Call Phil directly for a free quote. He answers his own phone, and most jobs are
            scheduled within the week.
          </p>
          <a
            href="tel:6506600430"
            className="inline-block bg-white text-[#1a3a4a] font-bold px-8 py-3 rounded no-underline hover:bg-gray-100 transition-colors"
            style={SANS}
          >
            📞 Call 650-660-0430
          </a>
        </div>
      </section>
    </Layout>
  );
}
