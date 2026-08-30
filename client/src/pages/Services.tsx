import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";
import { janitorialFormUrl } from "@/data/blogPosts";

const services = [
  {
    icon: "🏠",
    title: "Residential Window Cleaning",
    body: `Your home deserves windows that let in every ray of Bay Area sunshine without streaks, spots, or smudges clouding the view. Phil's Magic Cleaning provides thorough residential window cleaning in Burlingame, San Mateo, and throughout San Mateo County — covering every pane, frame, and sill with the same meticulous care every single time.

We clean both interior and exterior glass, remove hard water stains, scrape away mineral deposits and debris that have built up over months or years, and finish with a streak-free polish that makes every window look brand new. Our team brings professional-grade equipment and cleaning solutions that are effective yet safe for your home, your family, and your landscaping.

Phil is known throughout the Bay Area community for showing up on time — often early — and working methodically through a home until every window passes his own exacting inspection. Dozens of homeowners across Burlingame and San Mateo County have made Phil their go-to window cleaner for years, returning season after season because the results speak for themselves.

Whether your home has standard single-pane windows, large picture windows, bay windows, or a mix of skylight and specialty glass, we handle it all. Book a one-time deep clean or set up a recurring maintenance schedule and never worry about dirty windows again.`,
    who: "Homeowners, condo owners, and renters across Burlingame, San Mateo, Foster City, Millbrae, Redwood City, and Palo Alto who want spotless windows without the hassle.",
    process: [
      "Free quote — call or text with your window count and home size",
      "Scheduled visit at a time that works for you",
      "Interior and exterior cleaning, screen removal and reinstallation",
      "Final walkthrough to ensure 100% satisfaction",
    ],
  },
  {
    icon: "🏪",
    title: "Commercial & Storefront Window Cleaning",
    body: `For Bay Area businesses, your storefront windows are your most visible marketing asset. Dirty, streaked, or spotted glass sends the wrong message before a single customer walks through your door. Phil's Magic Cleaning specializes in commercial window cleaning for storefronts, restaurants, salons, retail shops, offices, and any business where presentation matters.

We serve an impressive roster of local businesses — from FASTSIGNS San Mateo and Baking Arts to the Burlingame Tobacconist — many of whom have trusted Phil for two or more consecutive years. The reason is simple: Phil delivers consistent, exceptional results on a schedule that works around your business hours, minimizing disruption while maximizing curb appeal.

Commercial window cleaning requires a different level of thoroughness than a quick squeegee pass. We remove grease film, fingerprints, salt spray, pollution residue, and anything else that dulls your glass. We work carefully around signage, decals, and outdoor furniture to leave your storefront looking sharp and professional every visit.

We offer both one-time deep cleans for businesses that have let maintenance slip, and ongoing recurring service plans for businesses that want to maintain a consistently polished appearance. Weekly, bi-weekly, and monthly plans are available — call to discuss what frequency makes sense for your location and foot traffic.`,
    who: "Restaurants, cafes, retail stores, salons, medical offices, gyms, and any Bay Area business that wants a pristine, professional-looking storefront.",
    process: [
      "Consultation to understand your cleaning needs and business schedule",
      "First visit: thorough deep clean of all exterior and interior glass panels",
      "Ongoing recurring visits on your preferred cadence",
      "Quick touch-ups available between scheduled visits for high-traffic periods",
    ],
  },
  {
    icon: "🪟",
    title: "Screen Cleaning & Reinstallation",
    body: `Window screens do an important job — they keep insects out and let fresh Bay Area air in — but they also accumulate months of dust, pollen, sea salt, and grime that filters onto your freshly cleaned glass. That's why Phil's Magic Cleaning includes screen cleaning as a standard part of every window service, not an afterthought.

We carefully remove each screen, scrub it clean using brushes and professional cleaning solution, rinse it thoroughly, and allow it to dry fully before reinstalling it correctly. Many cleaners skip this step or simply wipe the screens in place, which pushes dirt back onto your newly cleaned windows the moment a breeze comes through. We do it right.

Screen cleaning is also available as a standalone service if your windows are relatively clean but your screens have become dusty, bent, or damaged. We can clean, reshape, and reinstall screens in the same visit — saving you the hassle of removing them yourself, storing them, and trying to remember which screen goes where.

If any screens need repair or replacement, Phil can advise on the best options and coordinate repairs. Having clean, properly fitted screens is the finishing touch that makes clean windows truly complete.`,
    who: "Any homeowner or business with window screens — especially useful in the Bay Area where pollen season and marine-layer humidity cause rapid screen buildup.",
    process: [
      "Screens removed carefully and labeled to ensure correct reinstallation",
      "Frames and mesh scrubbed clean with appropriate brushes and solution",
      "Thorough rinse and dry",
      "Reinstallation and fit check on every screen",
    ],
  },
  {
    icon: "🏗️",
    title: "Post-Construction Window Cleaning",
    body: `Post-construction window cleaning is one of the most challenging and specialized cleaning tasks there is. Construction projects leave windows coated with a unique combination of concrete splatter, drywall dust, paint overspray, caulk residue, adhesive sticker remnants, and fine silica particles that bond to glass at a molecular level. Standard cleaning tools and solutions won't touch it.

Phil's Magic Cleaning has earned the trust of professionals in the property restoration and construction industry — including the team at Belfor Property Restoration, one of the leading disaster-recovery and construction firms in the nation. When Belfor's own restoration pros call Phil for window cleanup, that endorsement speaks for itself.

Post-construction window cleaning requires professional-grade scraper blades used at precise angles, specialized glass-safe solvents to dissolve bonded compounds, and the patience to work through every square inch of glass without causing micro-scratches. Phil's meticulous approach means the job is done right the first time, leaving every pane clear, undamaged, and ready for occupancy.

Whether you're a homeowner finishing a renovation, a contractor handing off a completed build, or a property manager preparing a unit for new tenants, Phil's post-construction cleanup service ensures the windows look as good as everything else you worked so hard to build.`,
    who: "Homeowners after renovations, general contractors, property managers, real estate developers, and restoration companies needing a spotless handoff.",
    process: [
      "Site assessment to identify types of residue and level of buildup",
      "Dry scrape to remove large deposits without smearing",
      "Solvent application to dissolve bonded compounds like caulk and paint",
      "Final squeegee clean and frame wipe for a complete, move-in-ready result",
    ],
  },
  {
    icon: "📅",
    title: "Recurring Maintenance Plans",
    body: `The Bay Area's coastal climate, pollen seasons, and urban pollution mean that windows get dirty faster than most people realize. For homeowners and businesses that want consistently clean windows without ever having to think about it, Phil's Magic Cleaning offers flexible recurring maintenance plans that keep your glass in peak condition year-round.

Recurring clients — including FASTSIGNS San Mateo, the Burlingame Tobacconist, and many Bay Area homeowners — have been with Phil for years. The reason is simple: once you experience spotless windows on a reliable schedule, you don't want to go back to dirty glass and the hassle of scheduling one-off appointments.

Plans are fully customizable. Retail businesses in high-traffic areas often choose weekly service to keep storefronts looking sharp every day. Restaurants might prefer bi-weekly visits to stay ahead of grease and fingerprint buildup. Homeowners typically find monthly or quarterly service keeps their home looking its best throughout every season.

As a recurring client, you benefit from priority scheduling, consistent pricing, and the trust that comes with Phil knowing your property — the window layout, any tricky access points, and exactly how you like things done. It's the easiest way to guarantee that clean-window feeling all year long.`,
    who: "Bay Area homeowners who want maintenance-free windows year-round, and businesses that need consistently clean storefronts without managing ad-hoc scheduling.",
    process: [
      "Initial consultation to assess your property and determine ideal frequency",
      "First visit: comprehensive deep clean to establish a baseline",
      "Ongoing visits on your chosen schedule — weekly, bi-weekly, or monthly",
      "Flexible rescheduling with advance notice for holidays or special events",
    ],
  },
  {
    icon: "🏢",
    title: "High-Rise & Multi-Story Window Cleaning",
    body: `Not every window cleaning job is a ground-floor straightforward clean. Multi-story homes, three-story condos, tall commercial buildings, and properties with difficult exterior access require additional equipment, specialized technique, and experience working at height. Phil's Magic Cleaning is equipped and experienced to handle all of it safely.

Clients like Doug Person have trusted Phil for exterior cleaning of their third-story condo windows — work that most window cleaners won't take on or don't have the proper equipment to do safely. Phil brings the right ladders, poles, and safety practices to every elevated job, ensuring thorough coverage of every pane no matter how high.

For commercial multi-story buildings and taller residential properties, we assess each job individually to determine the safest and most effective approach. We prioritize safety without sacrificing quality — you should never have to choose between getting the job done and getting it done right.

If you have a multi-story property in the Bay Area that you've been putting off getting cleaned because of access concerns, call Phil for a free assessment. We'll give you an honest evaluation and a clear quote with no surprises.`,
    who: "Multi-story homeowners, condo associations, commercial property managers, and building owners whose exterior glass is difficult to reach from the ground.",
    process: [
      "Site assessment to plan safe ladder or pole access for all elevations",
      "Equipment setup and safety checks before any work begins",
      "Systematic cleaning from the top down to prevent re-contamination",
      "Ground-level final inspection of all upper-story windows",
    ],
  },
];

export default function Services() {
  useSeo({
    title: "Cleaning Services — Janitorial & Window | Phil's Magic Cleaning",
    description:
      "Commercial janitorial cleaning and professional window cleaning across the Peninsula. Offices, restaurants, retail, and homes from South San Francisco to Mountain View.",
    canonical: "/services",
  });

  return (
    <Layout>
      {/* Hub: both service lines get equal billing before the window detail,
          which previously ran the length of the page unopposed. */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Two Services, One Standard
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-10" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Commercial janitorial cleaning for Peninsula businesses, and the window cleaning that
            earned us 42 five-star reviews. Same crew, same standard, from South San Francisco to
            Mountain View.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🧹</div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Janitorial &amp; Commercial Cleaning
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Offices, restaurants, retail, medical suites, salons and gyms. Floors, restrooms,
                break rooms, and the whole interior &mdash; on a schedule built around your hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/janitorial-cleaning"
                  className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Janitorial services &rarr;
                </Link>
                {janitorialFormUrl() && (
                  <a
                    href={janitorialFormUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#0d7a8a] text-[#0d7a8a] hover:bg-[#f0f5f8] font-semibold px-6 py-3 rounded no-underline transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Request a quote
                  </a>
                )}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🪟</div>
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Window Cleaning
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Homes, storefronts, and multi-story properties. Inside and out, screens included,
                with transparent per-pane pricing starting at $20.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/window-cleaning"
                  className="bg-[#1a3a4a] hover:bg-[#0d2a38] text-white font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Window pricing &rarr;
                </Link>
                <a
                  href="tel:6506600430"
                  className="border border-[#1a3a4a] text-[#1a3a4a] hover:bg-gray-50 font-semibold px-6 py-3 rounded no-underline transition-colors"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Call for a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-4 pt-8 border-t border-gray-200" style={{ fontFamily: "'Playfair Display', serif" }}>
            Window Cleaning in Detail
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-12" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            From single-story homes to multi-story commercial buildings, Phil's Magic Cleaning has the expertise, equipment, and track record to get it done right.
          </p>

          <div className="space-y-16">
            {services.map((s, i) => (
              <div key={s.title} className={`${i > 0 ? "border-t border-gray-100 pt-16" : ""}`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{s.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {s.title}
                  </h2>
                </div>
                <div className="max-w-3xl space-y-4">
                  {s.body.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-[#f0f5f8] rounded-lg p-5">
                    <h4 className="font-bold text-[#1a3a4a] mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      Who It's For
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {s.who}
                    </p>
                  </div>
                  <div className="bg-[#f0f5f8] rounded-lg p-5">
                    <h4 className="font-bold text-[#1a3a4a] mb-2 text-sm uppercase tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      Our Process
                    </h4>
                    <ol className="space-y-1">
                      {s.process.map((step, si) => (
                        <li key={si} className="text-sm text-gray-600 flex gap-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                          <span className="font-semibold text-[#0d7a8a] flex-shrink-0">{si + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="tel:6506600430"
                    className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-6 py-3 rounded no-underline transition-colors text-sm"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Call 650-660-0430 for a Free Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 bg-[#1a3a4a] rounded-xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Call Phil for a free quote on any of our services. Most jobs scheduled within the week.
            </p>
            <a
              href="tel:6506600430"
              className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-8 py-3 rounded no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              📞 Call 650-660-0430
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
