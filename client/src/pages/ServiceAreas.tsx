import Layout from "@/components/Layout";
import { Link } from "wouter";
import { useSeo } from "@/hooks/useSeo";

const areas = [
  {
    city: "Burlingame",
    slug: "burlingame",
    body: `Burlingame is Phil's home base, and no community has been more central to building the reputation of Phil's Magic Cleaning. From the charming storefronts along Burlingame Avenue to the beautiful residential neighborhoods between El Camino Real and the Bayshore, Phil has cleaned hundreds of homes and businesses across this city.

Window cleaning in Burlingame presents a unique set of challenges. The coastal fog that rolls in off the Bay deposits a fine layer of salt and marine particulates on every exterior surface — and windows are especially vulnerable. Homeowners near the Bay or Coyote Point area often notice glass develops a cloudy, etched quality within just a few weeks of cleaning, especially during summer fog season. Phil's professional-grade cleaning solutions and squeegee technique address this specifically, leaving glass sparkling even in the face of the Bay Area marine layer.

The Burlingame Tobacconist, FASTSIGNS San Mateo, and dozens of residential clients have trusted Phil's Magic Cleaning for years. When your windows need to look their best — whether for a Saturday open house on Hillside Drive or a Monday morning at your Broadway Business District storefront — Phil is the call to make.`,
  },
  {
    city: "San Mateo",
    slug: "san-mateo",
    body: `San Mateo is one of Phil's most active service areas, with a dense mix of residential neighborhoods, commercial corridors, and office parks that keep the schedule full year-round. From the historic downtown restaurant row on Second and Third Avenues to the single-family neighborhoods of Baywood and Beresford, Phil's Magic Cleaning serves the full spectrum of San Mateo property types.

Commercial window cleaning in San Mateo CA is particularly in demand along the downtown retail and dining corridor, where restaurant and retail storefronts see heavy foot traffic and require frequent maintenance to maintain their curb appeal. Phil currently serves multiple restaurant owners in the San Mateo area — including Theary Chhuo, who uses Phil's Magic Cleaning at multiple restaurant locations. The consistent 5-star ratings Phil receives from San Mateo clients reflect the same punctuality, attention to detail, and professional results that have made him a Bay Area institution.

Whether you need a one-time deep clean for your San Mateo home before a special occasion, or a recurring monthly window washing contract for your downtown business, call Phil at 650-660-0430 for a free estimate.`,
  },
  {
    city: "Foster City",
    slug: "foster-city",
    body: `Foster City's unique geography — built on a lagoon, surrounded by the Bay, and exposed to consistent onshore winds — creates some of the most challenging window-cleaning conditions in San Mateo County. The combination of salt air, wind-blown marine layer, and water spray means Foster City windows need more frequent cleaning than properties further inland.

Residential clients in Foster City neighborhoods like Pilgrim-Triton Marina, Shell Cove, and Bay Vista get the most from professional window cleaning when they establish a quarterly or semi-annual maintenance schedule. The salt deposits that accumulate on exterior glass in Foster City can etch into the glass surface over time if not removed professionally — a problem that regular cleaning prevents entirely. Phil's Magic Cleaning uses mineral removal solutions calibrated for Bay-front exposure, ensuring glass is truly clean rather than just visually improved.

Foster City businesses along Metro Center Boulevard and E Hillsdale also benefit from professional storefront window cleaning. Call Phil's Magic Cleaning at 650-660-0430 to schedule your Foster City window cleaning appointment.`,
  },
  {
    city: "Millbrae",
    slug: "millbrae",
    body: `Millbrae is a tight-knit community with a mix of established residential neighborhoods and a vibrant El Camino Real business corridor, all of which Phil's Magic Cleaning serves regularly. The city's location between the coastal hills and the Bay means it gets a share of both inland dust and marine-layer moisture, creating a combined window-soiling effect that responds well to professional cleaning.

Homeowners in Millbrae's hillside neighborhoods — including areas with views toward the Bay — especially benefit from regular exterior window cleaning, since elevated positions catch more wind-blown debris and sea salt than ground-level properties. Phil is experienced with multi-story residential cleaning in these areas and brings the right equipment to safely reach all elevations. Commercial clients along Broadway and El Camino Real in Millbrae appreciate Phil's flexible scheduling, which works around business hours to minimize disruption.

For professional window cleaning Millbrae CA homeowners and businesses trust, contact Phil's Magic Cleaning at 650-660-0430. Free quotes are available by phone.`,
  },
  {
    city: "Redwood City",
    slug: "redwood-city",
    body: `Redwood City is one of the fastest-growing commercial centers on the Peninsula, and Phil's Magic Cleaning is proud to serve the city's expanding residential neighborhoods and booming downtown business district. From single-family homes in Farm Hill and Emerald Hills to the restaurants and retail shops downtown, window cleaning in Redwood City CA is a year-round need.

Redwood City sits at the transition zone between the coastal fog belt and the drier inland climate, which means window cleaning needs vary somewhat by neighborhood. Properties in the western hills tend to stay cleaner longer, while those closer to the Bay shores and downtown need more frequent attention. Phil's Magic Cleaning provides tailored service recommendations based on your specific property and location, ensuring you're cleaning as often as needed — but not wasting money on unnecessary visits.

Ready to schedule professional window cleaning in Redwood City? Call Phil's Magic Cleaning at 650-660-0430. We serve the full Redwood City area including downtown, Farm Hill, Emerald Hills, and the Bayfront neighborhoods.`,
  },
  {
    city: "Palo Alto",
    slug: "palo-alto",
    body: `Palo Alto's combination of beautiful historic homes, modern tech campuses, and a thriving University Avenue retail corridor creates diverse window cleaning needs that Phil's Magic Cleaning is equipped to meet. Professional window cleaning Palo Alto CA homeowners and business owners rely on from Phil means the same meticulous attention to detail that has generated 5.0 stars across 42 reviews.

Residential clients in Palo Alto's sought-after neighborhoods — including College Terrace, Professorville, and Crescent Park — often have architecturally significant homes with custom windows, bay windows, and multi-pane configurations that require careful professional cleaning. Phil treats every pane with the same precision, using appropriate scrapers and solutions for glass type and age. Palo Alto commercial clients along University Avenue and on the Stanford Research Park campus benefit from professional exterior cleaning that supports the polished image these high-visibility locations require.

For window cleaning Palo Alto CA businesses and homeowners trust, call Phil's Magic Cleaning at 650-660-0430. We serve all Palo Alto neighborhoods and commercial areas.`,
  },
  {
    city: "Daly City",
    slug: "daly-city",
    body: `Daly City's dense, fog-exposed neighborhoods make it one of the Bay Area's most consistent window-cleaning markets. The city's position directly in the path of Pacific fog and marine layer means exterior glass accumulates salt and moisture-borne particulates faster than almost anywhere on the Peninsula. Phil's Magic Cleaning serves Daly City residential and commercial clients with the same thoroughness and reliability that has built the company's reputation.

Homeowners in Daly City neighborhoods like Westlake, Serramonte, and Mission Terrace often find that windows cleaned once and left tend to become cloudy within a month or two, particularly during fog season from May through August. A quarterly professional cleaning schedule keeps glass clear year-round and prevents the mineral etching that can permanently damage glass surfaces. Phil's team is experienced with Daly City's specific environmental challenges and provides cleaning solutions formulated for high-fog-exposure conditions.

Call Phil's Magic Cleaning at 650-660-0430 to schedule professional window cleaning in Daly City. We serve all Daly City neighborhoods for both residential and commercial properties.`,
  },
  {
    city: "South San Francisco",
    slug: "south-san-francisco",
    body: `South San Francisco's mix of established residential neighborhoods and a large commercial and industrial base creates varied window cleaning needs, all of which Phil's Magic Cleaning addresses. From homes in Sign Hill and Sunshine Gardens neighborhoods to storefronts and office buildings along El Camino Real and the Grand Avenue corridor, Phil provides the same professional-grade service across the entire South San Francisco service area.

Commercial properties in South San Francisco benefit especially from professional window cleaning — the area's concentration of biotech campuses, office parks, and retail businesses means first impressions matter to a steady stream of employees, clients, and visitors. Phil's commercial cleaning service is calibrated for these environments, delivering consistent results on a schedule that works around business operations. Residential clients in South San Francisco also appreciate Phil's flexible scheduling and attention to detail, which keeps homes looking their best in every season.

Ready to schedule window cleaning in South San Francisco? Call Phil's Magic Cleaning at 650-660-0430 for a free quote. We serve all South San Francisco neighborhoods and commercial areas.`,
  },
];

export default function ServiceAreas() {
  useSeo({
    title: "Service Areas — Peninsula Cleaning | Phil's Magic Cleaning",
    description:
      "Janitorial and window cleaning across the Peninsula: Burlingame, San Mateo, Foster City, Millbrae, Redwood City, Palo Alto, South San Francisco and surrounding communities.",
    canonical: "/service-areas",
  });

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <span className="text-xs font-bold text-[#0d7a8a] uppercase tracking-widest" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Where We Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a4a] mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cleaning Across the Bay Area Peninsula
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Phil's Magic Cleaning serves Burlingame, San Mateo, Foster City, Millbrae, Redwood City, Palo Alto, Daly City, South San Francisco, and surrounding communities of San Mateo County.
          </p>

          {/* Both service lines are available everywhere we work. The per-city
              write-ups below are window-specific because that is the work with
              a local track record - no janitorial history is implied per city. */}
          <div className="bg-[#f0f5f8] border-l-4 border-[#0d7a8a] rounded-r-lg p-6 mb-12 max-w-3xl">
            <p className="font-bold text-[#1a3a4a] mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Janitorial &amp; commercial cleaning is available everywhere we work
            </p>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Offices, restaurants, retail, and medical suites across every city listed here &mdash;
              floors, restrooms, break rooms, and the whole interior, on a recurring schedule that
              works around your hours.
            </p>
            <Link
              href="/janitorial-cleaning"
              className="text-[#0d7a8a] font-semibold no-underline hover:underline"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Janitorial services &rarr;
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Window Cleaning, City by City
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            What the local conditions do to your glass, and how we handle it.
          </p>

          <div className="space-y-16">
            {areas.map((area, i) => (
              <div key={area.slug} className={`${i > 0 ? "border-t border-gray-100 pt-16" : ""}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a4a] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Window Cleaning {area.city}, CA
                </h2>
                <div className="max-w-3xl space-y-4">
                  {area.body.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href="tel:6506600430"
                    className="inline-block text-[#0d7a8a] font-semibold text-sm hover:underline no-underline"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Get a Free {area.city} Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see your city */}
          <div className="mt-20 bg-[#f0f5f8] rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Don't See Your City?
            </h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Phil also serves many other communities throughout the Bay Area. Call to check — most of the time the answer is yes.
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
