import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";
import { janitorialFormUrl } from "@/data/blogPosts";

const SERIF = { fontFamily: "'Playfair Display', serif" };
const SANS = { fontFamily: "'Source Sans 3', sans-serif" };

const spaces = [
  ["Offices & Professional Suites", "Workstations, conference rooms, break rooms, and restrooms — cleaned around your hours so nobody works around us."],
  ["Restaurants & Food Service", "Front of house, restrooms, and hard floors. Before opening or after close, on whatever cadence your traffic demands."],
  ["Retail & Storefronts", "Floors, fixtures, restrooms, and the glass customers judge you by before they ever walk in."],
  ["Medical & Dental Offices", "Waiting rooms, treatment areas, and restrooms held to the standard a clinical space needs."],
  ["Salons, Gyms & Studios", "High-traffic spaces where clients notice everything. Floors, mirrors, restrooms, and equipment areas."],
  ["Post-Construction Cleanup", "Dust, residue, and debris removed completely so a finished build actually looks finished."],
];

const included = [
  ["Floor care", "Vacuuming, mopping, hard-surface cleaning, and buffing."],
  ["Restroom sanitation", "Cleaned, sanitized, and restocked."],
  ["Common areas", "Break rooms, lobbies, conference rooms, and workstations."],
  ["Interior glass", "Including the windows you already trust us with."],
  ["Trash and recycling", "Emptied and re-lined on every visit."],
  ["A schedule that fits", "Nightly, weekly, monthly, or something built around your hours."],
];

export default function JanitorialCleaning() {
  useSeo({
    title: "Janitorial & Commercial Cleaning on the Peninsula | Phil's Magic Cleaning",
    description:
      "Commercial and janitorial cleaning for Peninsula offices, restaurants, retail, and medical suites. Recurring schedules, 5.0-star rated, licensed and insured. Call 650-660-0430.",
    canonical: "/janitorial-cleaning",
  });

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={SANS}>
            Janitorial &amp; Commercial Cleaning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4 leading-tight" style={SERIF}>
            Your Whole Space, Held to the Same Standard
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed" style={SANS}>
            We don&rsquo;t stop at glass. Floors, restrooms, break rooms, the whole interior — kept
            to the standard that earned us 42 five-star reviews across the Peninsula. We&rsquo;re
            actively growing this side of the business, and we have room on the schedule.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            {janitorialFormUrl() && (
              <a
                href={janitorialFormUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-semibold px-7 py-3 rounded no-underline transition-colors"
                style={SANS}
              >
                Request a Janitorial Quote &rarr;
              </a>
            )}
            <a
              href="tel:6506600430"
              className="border border-[#1a3a4a] text-[#1a3a4a] hover:bg-gray-50 font-semibold px-7 py-3 rounded no-underline transition-colors"
              style={SANS}
            >
              Or call 650-660-0430
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f5f8] py-16 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white border-l-4 border-[#0d7a8a] rounded-r-lg p-6 md:p-8 max-w-3xl">
            <p className="font-bold text-[#1a3a4a] text-lg mb-2" style={SANS}>
              Already a client? $150 off your first month.
            </p>
            <p className="text-gray-600 leading-relaxed" style={SANS}>
              Set up recurring janitorial service and we&rsquo;ll take $150 off your first month —
              a thank-you for the support that built this business. No code, no signup; just
              mention it when you call. One-time deep cleans are available too, and the $150 is
              specific to ongoing monthly service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-8" style={SERIF}>
            Spaces We Clean
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {spaces.map(([title, body]) => (
              <div key={title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#1a3a4a] mb-2" style={SANS}>{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed" style={SANS}>{body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed" style={SANS}>
            Not on the list? If people walk into it, we can keep it clean.{" "}
            <a href="tel:6506600430" className="text-[#0d7a8a] no-underline hover:underline font-semibold">
              Call 650-660-0430
            </a>{" "}
            and we&rsquo;ll talk through your space.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-8" style={SERIF}>
            What&rsquo;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map(([title, body]) => (
              <div key={title} className="flex gap-3">
                <span className="text-[#0d7a8a] font-bold shrink-0" aria-hidden="true">✓</span>
                <div>
                  <p className="font-bold text-[#1a3a4a]" style={SANS}>{title}</p>
                  <p className="text-gray-600 leading-relaxed" style={SANS}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a4a] mb-4" style={SERIF}>
            Getting an Estimate
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed" style={SANS}>
            Every commercial space is different, so there&rsquo;s no flat price list — a two-room
            salon and a restaurant with a full kitchen need very different things. Send us the
            details or call, and we&rsquo;ll set up a walkthrough. Phil will look at the space, ask
            what matters most to you, and give you a straight number with no surprises.
          </p>
          <p className="text-gray-600 leading-relaxed" style={SANS}>
            We serve the Peninsula from South San Francisco through Burlingame and San Mateo down
            to Palo Alto and Mountain View.{" "}
            <Link href="/service-areas" className="text-[#0d7a8a] no-underline hover:underline font-semibold">
              See all service areas
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#1a3a4a] py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={SERIF}>
            Tell Us About Your Space
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed" style={SANS}>
            Send the details and we&rsquo;ll get back to you, or call Phil directly — he answers his
            own phone.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {janitorialFormUrl() && (
              <a
                href={janitorialFormUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0d7a8a] hover:bg-[#0a6370] text-white font-bold px-8 py-3 rounded no-underline transition-colors"
                style={SANS}
              >
                Request a Quote
              </a>
            )}
            <a
              href="tel:6506600430"
              className="inline-block bg-white text-[#1a3a4a] font-bold px-8 py-3 rounded no-underline hover:bg-gray-100 transition-colors"
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
