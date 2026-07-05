import { Link } from "react-router-dom";
import { COMPANY, SERVICES } from "@/lib/siteData";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-brand-footer text-brand-footer-text"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="overline text-white/60">{COMPANY.name}</p>
          <h3 className="mt-4 font-serif text-3xl md:text-4xl leading-tight max-w-md">
            IT support, engineered like craft.
          </h3>
          <p className="mt-6 text-white/70 max-w-md leading-relaxed">
            A named engineering pod, a documented playbook, and a phone that
            gets picked up in under a minute. That's the whole pitch.
          </p>
          <Link
            to="/contact"
            data-testid="footer-cta-contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
          >
            Start a conversation →
          </Link>
        </div>

        <div className="md:col-span-3">
          <p className="overline text-white/60">Services</p>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  data-testid={`footer-service-${s.slug}`}
                  className="text-white/80 hover:text-brand-primary transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="overline text-white/60">Company</p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/about" className="text-white/80 hover:text-brand-primary transition-colors" data-testid="footer-link-about">
                About
              </Link>
            </li>
            <li>
              <Link to="/industries" className="text-white/80 hover:text-brand-primary transition-colors" data-testid="footer-link-industries">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white/80 hover:text-brand-primary transition-colors" data-testid="footer-link-contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="overline text-white/60">Reach us</p>
          <ul className="mt-5 space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{COMPANY.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{COMPANY.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="whitespace-pre-line">{COMPANY.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="font-sans tracking-wider uppercase">
            Crafted with care — engineered for uptime.
          </p>
        </div>
      </div>
    </footer>
  );
}
