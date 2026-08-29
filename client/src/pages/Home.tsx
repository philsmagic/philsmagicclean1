import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";
import { janitorialFormUrl } from "@/data/blogPosts";

const commercialServices = [
  {
    icon: "🏢",
    title: "Offices & Professional Suites",
    desc: "Workstations, conference rooms, break rooms, and restrooms — cleaned around your hours so nobody works around us.",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Food Service",
    desc: "Front of house, restrooms, and hard floors. Scheduled before opening or after close, on whatever cadence your traffic demands.",
  },
  {
    icon: "🏪",
    title: "Retail & Storefronts",
    desc: "Floors, fixtures, restrooms, and the glass customers judge you by before they ever walk in.",
  },
  {
    icon: "🩺",
    title: "Medical & Dental Offices",
    desc: "Waiting rooms, treatment areas, and restrooms held to the standard a clinical space needs.",
  },
  {
    icon: "💇",
    title: "Salons, Gyms & Studios",
    desc: "High-traffic spaces where clients notice everything. Floors, mirrors, restrooms, and equipment areas.",
  },
  {
    icon: "🏗️",
    title: "Post-Construction Cleanup",
    desc: "Dust, residue, and debris removed completely so a finished build actually looks finished.",
  },
];

const windowServices = [
  {
    icon: "🏠",
    title: "Residential Window Cleaning",
    desc: "From single-story homes to multi-floor condos — inside, outside, screens included.",
  },
  {
    icon: "🪟",
    title: "Commercial & Storefront Windows",
    desc: "Restaurants, salons, retail, and offices. Your first impression starts with your glass.",
  },
  {
    icon: "📅",
    title: "Recurring Maintenance Plans",
    desc: "Weekly, bi-weekly, or monthly schedules for homes and businesses that want it handled.",
  },
  {
    icon: "🏢",
    title: "High-Rise & Multi-Story",
    desc: "Third-story condos and tall commercial facades — the equipment and experience to reach it all.",
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
    title: "Meticulous on every surface",
    desc: "Phil deep cleans and inspects the work himself before considering a job complete \u2014 glass, floors, or anything else.",
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

export default function Home() {
  useSeo({
    title: "Janitorial & Window Cleaning on the Peninsula | Phil's Magic Cleaning",
    description:
      "Commercial janitorial and window cleaning for Peninsula homes and businesses \u2014 offices, restaurants, retail, and storefronts. 5.0-star rated, licensed and insured. Call 650-660-0430.",
    canonical: "/",
  });

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
                Spotless Windows Built Our Name. We Clean Everything Else Too.
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Phil's Magic Cleaning serves homes, restaurants, offices, and storefronts across the Peninsula — full janitorial and commercial cleaning alongside the window work that earned us 42 five-star reviews.
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
                {janitorialFormUrl() && (
                  <a
                    href={janitorialFormUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-6 py-3 rounded no-underline transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Request a Janitorial Quote
                  </a>
                )}
                {/* Paired with the janitorial CTA so the two service lines read as
                    equals, and window pricing stays one click away rather than
                    dominating the page with per-pane detail janitorial cannot share. */}
                <Link
                  href="/window-cleaning"
                  className="border border-[#0d7a8a] text-[#0d7a8a] hover:bg-[#f0f5f8] font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Window Cleaning &amp; Pricing
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

      {/* Janitorial band - sits above the window pricing table so the new
          service line is seen before a visitor concludes this is a window site. */}
      <section className="bg-[#f0f5f8] py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            For Peninsula Businesses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Janitorial &amp; Commercial Cleaning
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            We don&rsquo;t stop at glass. Offices, storefronts, restaurants &mdash; floors, restrooms, break rooms, the whole interior, held to the same standard that earned us 42 five-star reviews. We&rsquo;re actively growing this side of the business.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              ["Your whole space", "Floors, restrooms, break rooms, and the glass you already trust us with."],
              ["On your schedule", "Nightly, weekly, or a cadence built around your business hours."],
              ["Across the Peninsula", "South San Francisco through Burlingame and San Mateo to Mountain View."],
            ].map(([title, body]) => (
              <div key={title} className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-bold text-[#1a3a4a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{title}</p>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-l-4 border-[#0d7a8a] rounded-r-lg p-6 mb-8 max-w-3xl">
            <p className="font-bold text-[#1a3a4a] mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Already a client? $150 off your first month.
            </p>
            <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Set up recurring janitorial service and we&rsquo;ll take $150 off your first month &mdash; a thank-you for the support that built this business. One-time deep cleans are available too; just call for a quote.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            {janitorialFormUrl() && (
              <a
                href={janitorialFormUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-7 py-3 rounded no-underline transition-colors"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Tell us about your space &rarr;
              </a>
            )}
            <a
              href="tel:6506600430"
              className="border border-[#1a3a4a] text-[#1a3a4a] hover:bg-white font-semibold px-7 py-3 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Or call 650-660-0430
            </a>
            <Link
              href="/janitorial-cleaning"
              className="text-[#0d7a8a] font-semibold no-underline hover:underline"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Read more
            </Link>
          </div>
        </div>
      </section>


      {/* Services */}
      {/* Services - split into two labelled groups. A single mixed grid put one
          janitorial tile against six window tiles, which read as a window company
          that also mops. */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Two Services, One Standard
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Full commercial and janitorial cleaning for Peninsula businesses, and the window
            work that earned us 42 five-star reviews. Same crew, same standard.
          </p>

          <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
            <h3 className="text-2xl font-bold text-[#1a3a4a]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Commercial &amp; Janitorial Cleaning
            </h3>
            <Link
              href="/janitorial-cleaning"
              className="text-sm text-[#0d7a8a] hover:underline no-underline font-medium"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Janitorial services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {commercialServices.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className="font-bold text-[#1a3a4a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {s.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mb-14 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Not on the list? If people walk into it, we can keep it clean.{" "}
            <a href="tel:6506600430" className="text-[#0d7a8a] no-underline hover:underline font-semibold">
              Call 650-660-0430
            </a>{" "}
            and we&rsquo;ll talk through your space.
          </p>

          <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
            <h3 className="text-2xl font-bold text-[#1a3a4a]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Window Cleaning
            </h3>
            <Link
              href="/window-cleaning"
              className="text-sm text-[#0d7a8a] hover:underline no-underline font-medium"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Window pricing &amp; details &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {windowServices.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className="font-bold text-[#1a3a4a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                  {s.title}
                </h4>
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
            Ready for a Spotless Space?
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
