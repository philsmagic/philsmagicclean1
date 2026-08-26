export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[]; variant?: "check" | "bullet" }
  | { type: "callout"; title: string; text: string }
  | { type: "button"; label: string; href: string }
  | { type: "cta"; text: string };

export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  /** Meta description. Falls back to excerpt when absent. */
  metaDescription?: string;
  /** Posts without a body are teasers only — the index renders no "read more" link. */
  body?: Block[];
  /** Client notices rather than evergreen SEO content: pinned first, badged. */
  notice?: boolean;
};

export const posts: Post[] = [
  {
    slug: "new-system",
    date: "August 25, 2026",
    title: "We're Upgrading Our Scheduling & Invoicing System",
    excerpt:
      "Starting Friday, August 28, Phil's Magic Cleaning is moving to a new platform called Jobber for scheduling and invoicing. Here's everything you need to know — and what you need to do (almost nothing).",
    metaDescription:
      "Phil's Magic Cleaning is moving from Square to Jobber for scheduling and invoicing on August 28, 2026. Your appointments carry over automatically. Here's what to expect.",
    notice: true,
    body: [
      {
        type: "p",
        text: "We're upgrading the system we use for scheduling and invoicing, and we wanted you to hear the details directly from us before anything changes.",
      },
      {
        type: "callout",
        title: "No interruption to your service",
        text: "This change is designed to be completely hands-off on your end — same team, same great service, and nothing you need to do to keep your appointments on track.",
      },
      { type: "h2", text: "What's changing" },
      {
        type: "p",
        text: "Starting Friday, August 28, we're moving from Square to a new platform called Jobber for scheduling and invoicing. Jobber is built specifically for service businesses like ours, and it lets us do a better job of keeping your appointments, quotes, and invoices organized in one place.",
      },
      { type: "h2", text: "What stays exactly the same" },
      {
        type: "list",
        items: [
          "Same team, same quality of work",
          "Same phone number: 650-660-0430",
          "All your existing appointments carry over automatically — nothing to rebook",
        ],
      },
      { type: "h2", text: "What to expect on your next invoice" },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Your next invoice will come from Jobber, with instructions for completing payment.",
          "You'll have access to your own Client Portal, where you can view upcoming appointments and invoices. To log in, use the email address we have on file and select \"Forgot Password\" on the login screen — that sets your credentials, no separate signup needed.",
          "You'll be asked to re-enter your payment details. This is for your protection: we don't carry payment information between systems, your old payment details were never visible to us, and they'll be deleted.",
          "Your Jobber portal will show invoices going forward. Past Square invoices won't carry over into it — if you need a copy of an older invoice, just call or text and we'll get it to you.",
        ],
      },
      {
        type: "button",
        label: "Open Your Client Portal",
        href: "https://clienthub.getjobber.com/client_hubs/c080b44c-658d-4e03-aad4-23bd241272cb/login/new?source=share_login",
      },
      { type: "h2", text: "Coming soon: our referral program" },
      {
        type: "p",
        text: "We're also rolling out a referral program. Refer a friend, neighbor, or business, and you'll earn a reduction on your own service for every referral that becomes a client. We'll share the details shortly — but if you've already been sending people our way, thank you. Word of mouth is how this business was built.",
      },
      { type: "h2", text: "One more thing: janitorial services" },
      {
        type: "p",
        text: "Alongside the system change, we've made our commercial and janitorial cleaning an official service line \u2014 offices, restrooms, floors, restaurants, and post-construction cleanup. As a thank-you, existing clients get $100 off their first month of janitorial service.",
      },
      {
        type: "button",
        label: "Read about janitorial services",
        href: "/blog/janitorial-services",
      },
      { type: "h2", text: "Questions?" },
      {
        type: "p",
        text: "If anything here is unclear, just call or text us at 650-660-0430. You'll reach Phil directly — happy to walk you through it.",
      },
      { type: "cta", text: "Thanks for trusting us with your space. — Phil" },
    ],
  },
  {
    slug: "janitorial-services",
    date: "August 25, 2026",
    title: "Now Offering Janitorial & Commercial Cleaning",
    excerpt:
      "Phil's Magic Cleaning has been quietly handling commercial cleaning for our business clients for a while now. We're making it official — and existing window cleaning clients get $100 off their first month of service.",
    metaDescription:
      "Janitorial and commercial cleaning across the Peninsula from Phil's Magic Cleaning \u2014 offices, restaurants, retail, and post-construction. 5.0-star rated, licensed and insured. Call 650-660-0430.",
    body: [
      {
        type: "p",
        text: "If you've had Phil out to clean your storefront, you already know how he works: on time, often early, and he doesn't consider a job done until he's inspected it himself. What you might not know is that for a while now we've been doing more than windows for a number of our commercial clients \u2014 floors, restrooms, break rooms, the whole interior.",
      },
      {
        type: "p",
        text: "We're making it official. Janitorial and commercial cleaning is now a full service line at Phil's Magic Cleaning, with the same standard we've always held on glass.",
      },
      { type: "h2", text: "What janitorial service covers" },
      {
        type: "list",
        variant: "bullet",
        items: [
          "Office cleaning \u2014 workstations, common areas, conference rooms, break rooms",
          "Restroom sanitation and restocking",
          "Floor care \u2014 vacuuming, mopping, hard-surface cleaning, and buffing",
          "Restaurant and food-service cleaning, worked around your hours",
          "Retail and storefront interiors, including the glass you already trust us with",
          "Post-construction and post-renovation cleanup",
          "Recurring schedules \u2014 nightly, weekly, or whatever your space actually needs",
        ],
      },
      { type: "h2", text: "Who it's for" },
      {
        type: "p",
        text: "Offices, restaurants, salons, medical suites, retail shops, gyms, and property managers across the Peninsula \u2014 from South San Francisco down through Burlingame, San Mateo, and San Carlos to Palo Alto and Mountain View. If you run a space that people walk into, we can keep it clean.",
      },
      {
        type: "callout",
        title: "A thank-you to our window cleaning clients",
        text: "If you're already a Phil's Magic Cleaning client, you get $100 off your first month of janitorial service. No code, no signup \u2014 just mention it when you call. This one is a gift from Phil, for the years of support and referrals that built this business.",
      },
      { type: "h2", text: "Getting an estimate" },
      {
        type: "p",
        text: "Every commercial space is different, so there's no flat price list \u2014 a two-room salon and a restaurant with a full kitchen need very different things. Call or text 650-660-0430 and we'll set up a walkthrough. Phil will look at the space, ask what matters most to you, and give you a straight number with no surprises.",
      },
      {
        type: "p",
        text: "Same team. Same standard. More of your space covered.",
      },
      { type: "cta", text: "\u2014 Phil" },
    ],
  },
  {
    slug: "how-often-clean-windows",
    date: "May 14, 2025",
    title: "How Often Should You Clean Your Windows? A Bay Area Homeowner's Guide",
    excerpt:
      "Bay Area homeowners face unique challenges: marine layer, salt air, pollen, and urban dust all conspire to dirty your windows faster than you'd expect. Here's a practical guide to cleaning frequency.",
  },
  {
    slug: "storefront-window-cleaning-roi",
    date: "April 28, 2025",
    title: "Why Storefront Window Cleaning Is Your Best Marketing Investment",
    excerpt:
      "Before a customer ever reads your menu, sees your products, or talks to your staff, they've already formed an opinion — based on your windows. Here's why storefront window cleaning delivers a real marketing ROI.",
  },
  {
    slug: "post-construction-window-cleaning",
    date: "March 19, 2025",
    title: "Post-Construction Window Cleaning: What to Expect",
    excerpt:
      "Finishing a home renovation or new construction project in California? Post-construction window cleaning is a specialized job that requires more than soap and a squeegee. Here's what the process involves.",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
