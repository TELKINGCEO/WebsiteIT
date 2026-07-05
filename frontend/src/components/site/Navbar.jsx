import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/siteData";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--brand-bg)]/85 border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 bg-brand-primary text-white flex items-center justify-center font-serif text-lg leading-none">
            T
          </span>
          <span className="font-serif text-xl md:text-2xl tracking-tight text-brand-fg">
            {COMPANY.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm font-sans tracking-wide transition-colors ${
                  isActive
                    ? "text-brand-primary"
                    : "text-brand-fg/80 hover:text-brand-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-cta-contact"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-primary text-white px-5 md:px-6 py-3 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
          >
            Talk to us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 border border-brand"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden bg-[color:var(--brand-bg)] border-t border-brand"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-2xl font-serif ${
                    isActive ? "text-brand-primary" : "text-brand-fg"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="nav-mobile-cta"
              className="mt-2 inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-4 text-sm font-medium w-fit"
            >
              Talk to us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
