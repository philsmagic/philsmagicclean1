import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img
              src="/images/logo.jpg"
              alt="Phil's Magic Cleaning logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-[#1a3a4a] text-base leading-tight hidden sm:block" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Phil's Magic Cleaning
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors no-underline ${
                  location === link.href
                    ? "text-[#0d7a8a]"
                    : "text-[#1a3a4a] hover:text-[#0d7a8a]"
                }`}
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6506600430"
              className="text-sm font-semibold text-[#1a3a4a] hover:text-[#0d7a8a] no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              650-660-0430
            </a>
            <a
              href="tel:6506600430"
              className="bg-[#0d7a8a] hover:bg-[#0a6370] text-white text-sm font-semibold px-4 py-2 rounded transition-colors no-underline"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Free Quote
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:6506600430"
              className="text-sm font-semibold text-[#1a3a4a] no-underline"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              650-660-0430
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#1a3a4a]"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <>
                    <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1a3a4a] hover:text-[#0d7a8a] no-underline"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:6506600430"
              className="bg-[#0d7a8a] text-white text-sm font-semibold px-4 py-2 rounded text-center no-underline"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Free Quote — 650-660-0430
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 no-underline mb-3">
              <img
                src="/images/logo.jpg"
                alt="Phil's Magic Cleaning logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-white text-base" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Phil's Magic Cleaning
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Professional window cleaning for homes and businesses across the Bay Area. Licensed, insured, and rated 5.0 stars.
            </p>
            <a
              href="tel:6506600430"
              className="block mt-3 text-sm font-semibold text-white hover:text-[#7dd3db] no-underline transition-colors"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              650-660-0430
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Pages
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white no-underline transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              <li>
                <a href="tel:6506600430" className="hover:text-white no-underline transition-colors">
                  650-660-0430
                </a>
              </li>
              <li>1404 Burlingame Ave</li>
              <li>Burlingame, CA 94010</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-gray-400 text-center" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Serving Burlingame · San Mateo · Foster City · Millbrae · Redwood City · Palo Alto
          </p>
          <p className="text-xs text-gray-500 text-center mt-2" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            © {new Date().getFullYear()} Phil's Magic Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
