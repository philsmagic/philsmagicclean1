import Layout from "@/components/Layout";
import { Link } from "wouter";

const services = [
  {
    icon: "🏠",
    title: "Residential Window Cleaning",
    desc: "From single-story homes to multi-floor condos, we leave every window sparkling — inside and out.",
  },
  {
    icon: "🏪",
    title: "Commercial & Storefront Window Cleaning",
    desc: "Restaurants, salons, retail shops, and offices. Your first impression starts with your windows.",
  },
  {
    icon: "🪟",
    title: "Screen Cleaning & Reinstallation",
    desc: "We clean and reinstall screens so you get the full crystal-clear effect — not just halfway there.",
  },
  {
    icon: "🏗️",
    title: "Post-Construction Window Cleaning",
    desc: "Construction dust and residue removed completely. Trusted by Belfor and major restoration firms.",
  },
  {
    icon: "📅",
    title: "Recurring Maintenance Plans",
    desc: "Weekly, bi-weekly, or monthly plans for homes and businesses that need consistent, reliable cleaning.",
  },
  {
    icon: "🏢",
    title: "High-Rise & Multi-Story Window Cleaning",
    desc: "Third-story condos, tall commercial facades — we have the equipment and experience to reach it all.",
  },
];

const reviews = [
  {
    initials: "KK",
    name: "Klara Kallis",
    role: "Homeowner",
    text: "Phil's Magic Window Cleaning was fantastic from start to finish. Professional, punctual, and incredibly efficient. Left our windows sparkling like new. He's just a joy to work with.",
  },
  {
    initials: "MO",
    name: "Mesut Ozcab",
    role: "Salon Owner",
    text: "He cleans the windows, doors, and the entire front of my salon perfectly. He does an amazing job with love and passion. Thank you, Phil, for keeping my place spotless!",
  },
  {
    initials: "TC",
    name: "Theary Chhuo",
    role: "Restaurant Owner",
    text: "My restaurant windows are perfect now! Crystal clear. He's also cleaned my other restaurant location. I would highly recommend this cleaning service!",
  },
  {
    initials: "BR",
    name: "Becca Russell",
    role: "Property Manager",
    text: "Hired Phil to clean windows for a client in Burlingame and he did a fantastic job. Thorough, punctual (early, in fact!), and personable. Reasonably priced for the quality.",
  },
  {
    initials: "BR",
    name: "Betsy Rosen",
    role: "Homeowner",
    text: "Phil and his assistant did an amazing job. Easy to schedule, arrived on time, totally professional. I've used others — will only go with Phil in the future.",
  },
  {
    initials: "DA",
    name: "Dan A",
    role: "Restoration Pro",
    text: "I work for Belfor in property restoration and I've seen my fair share of cleaning crews. But I've never seen anyone clean windows the way Phil Magic and his team did.",
  },
];

const whyItems = [
  {
    title: "Always on time — often early",
    desc: "Clients regularly note Phil arrives before the scheduled window. Your time is respected.",
  },
  {
    title: "Meticulous on every pane",
    desc: "Phil scrapes, deep cleans, and inspects each window before considering the job complete.",
  },
  {
    title: "Professional and personable",
    desc: "Consistently described as warm and a genuine pleasure to work with.",
  },
  {
    title: "Licensed, insured, and community-trusted",
    desc: "Trusted by FASTSIGNS, Baking Arts, Burlingame Tobacconist, and Belfor Restoration for years.",
  },
];

const pricingRows = [
  { type: "Standard / Oval / Octagon", panes: "1 pane each" },
  { type: "Two-Lite Slider / Double Hung", panes: "2 panes each" },
  { type: "Patio Door / Bay Window", panes: "2–3 panes each" },
  { type: "French Windows & Doors", panes: "5 panes each" },
  { type: "Bow Window", panes: "4 panes each" },
  { type: "Base Rate", panes: "$20 / pane", bold: true },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-sm text-gray-600" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  5.0 Stars · Burlingame, CA
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold text-[#1a3a4a] leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bay Area Window Cleaning Done Right
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Phil's Magic Cleaning serves homes, restaurants, and storefronts across the Peninsula. Spotless results, punctual service, fair prices.
              </p>
              <a
                href="tel:6506600430"
                className="block text-2xl font-bold text-[#1a3a4a] mb-1 no-underline"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                650-660-0430
              </a>
              <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Free quotes · Licensed &amp; insured
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:6506600430"
                  className="bg-[#1a3a4a] hover:bg-[#0d2a38] text-white font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Call for a Free Quote
                </a>
                <Link
                  href="/reviews"
                  className="border border-[#1a3a4a] text-[#1a3a4a] hover:bg-gray-50 font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Read Reviews
                </Link>
              </div>
            </div>
           <div className="flex-shrink-0 w-full md:w-80">
             <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-sm">
              <img
                  src="/images/logo.jpg"
                  alt="Phil's Magic Cleaning logo"
                  className="w-48 h-auto mb-2"
              />
             </div>
           </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1a3a4a] py-6">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5.0★", label: "GOOGLE RATING" },
             { value: "42", label: "FIVE-STAR REVIEWS" },
              { value: "4+ yrs", label: "SERVING THE BAY AREA" },
             { value: "100%", label: "SATISFACTION RATE" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-yellow-400" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 mt-1 tracking-wider uppercase" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
         <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
           Transparent Pricing
         </span>
         <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
           Simple Per-Pane Pricing
         </h2>
         <p className="text-sm text-gray-600 mb-8 max-w-xl" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
           Starting at <strong>$20 per pane</strong>. Each window type counts as a set number of panes. Call for a free quote based on your specific home or business.
         </p>
        {/* Window Type Visual Guide — below the pricing intro, above the table */}
        <div className="max-w-2xl border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="bg-gray-50 px-5 py-2 border-b border-gray-200">
            <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Window Type Visual Guide
            </span>
          </div>
          <img
            src="/images/window-type-guide.jpg"
            alt="Visual guide showing different window types and their pane counts for pricing"
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-2xl border border-gray-200 rounded-lg overflow-hidden mb-8">
           <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Window Type
                  </th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700 uppercase text-xs tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    Pane Count
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, i) => (
                  <tr key={row.type} className={`border-b border-gray-100 last:border-0 ${row.bold ? "bg-gray-50" : ""}`}>
                    <td className={`px-5 py-3 text-gray-700 ${row.bold ? "font-bold" : ""}`} style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {row.type}
                    </td>
                    <td className={`px-5 py-3 text-right text-[#0d7a8a] ${row.bold ? "font-bold" : ""}`} style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {row.panes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Pricing varies by property. Call{" "}
            <a href="tel:6506600430" className="text-[#0d7a8a] no-underline hover:underline">
              650-660-0430
            </a>{" "}
            for a free estimate.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              What We Do
            </span>
            <Link
              href="/services"
              className="text-sm text-[#0d7a8a] hover:underline no-underline font-medium"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              View all services →
            </Link>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Every Pane, Perfected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1a3a4a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              What People Say
            </span>
            <Link
              href="/reviews"
              className="text-sm text-[#0d7a8a] hover:underline no-underline font-medium"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Read all 42 reviews →
            </Link>
          </div>
         <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Neighbors Are Asking for Phil's Number
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name + r.role} className="border border-gray-200 rounded-lg p-6">
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <blockquote className="text-sm text-gray-700 italic leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  "{r.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a3a4a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a3a4a]" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {r.name}
                    </div>
                    <div className="text-xs text-gray-500" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phil's Magic */}
      <section className="bg-[#f0f5f8] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Why Phil's Magic
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mt-2 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Done Right, Every Single Time
          </h2>
          <div className="space-y-6 max-w-2xl">
            {whyItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1a3a4a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3a4a] mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <span className="inline-block bg-white border border-gray-200 text-sm text-gray-700 px-4 py-2 rounded" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              ✅ Licensed &amp; Insured · Burlingame, CA
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a3a4a] py-16 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Crystal-Clear Windows?
          </h2>
          <p className="text-gray-300 mb-4 max-w-xl mx-auto" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Call Phil directly for a free quote. He answers his own phone. Most jobs scheduled within the week.
          </p>
          <a
            href="tel:6506600430"
            className="block text-2xl font-bold text-white mb-6 no-underline"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            650-660-0430
          </a>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:6506600430"
              className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Call Now — It's Free
            </a>
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
