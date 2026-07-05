import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import {
  SERVICES,
  INDUSTRIES,
  STATS,
  TESTIMONIALS,
  CLIENT_LOGOS,
  COMPANY,
} from "@/lib/siteData";

export default function Home() {
  return (
    <div data-testid="page-home" className="bg-brand">
      {/* HERO */}
      <section
        data-testid="hero-section"
        className="pt-32 md:pt-40 pb-20 md:pb-28 border-b border-brand"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 fade-in-up">
            <p className="overline" data-testid="hero-eyebrow">
              <Sparkles className="w-3 h-3 inline mr-2 -mt-0.5" />
              Managed IT · Cloud · Security · Since 2008
            </p>
            <h1
              data-testid="hero-headline"
              className="mt-6 font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-brand-fg"
            >
              IT support,
              <br />
              <span className="italic font-normal text-brand-primary">
                engineered
              </span>{" "}
              like craft.
            </h1>
            <p
              data-testid="hero-sub"
              className="mt-8 max-w-xl text-lg text-brand-muted leading-relaxed"
            >
              {COMPANY.name} pairs a named engineering pod with a documented
              playbook, so your infrastructure feels less like a fire drill and
              more like plumbing that just works.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
              >
                Book a discovery call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-brand-fg text-brand-fg px-8 py-4 text-sm font-medium hover:bg-brand-fg hover:text-white transition-colors"
              >
                See our services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative border border-brand overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBJVCUyMHN1cHBvcnQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzgzMjU0MTc5fDA&ixlib=rb-4.1.0&q=85"
                alt="Modern professional IT office"
                data-testid="hero-image"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-brand-surface border border-brand p-5 max-w-[220px]">
              <p className="overline">Live NOC</p>
              <p className="mt-2 font-serif text-2xl leading-tight">
                99.98% uptime this quarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO MARQUEE */}
      <section
        data-testid="logos-marquee"
        className="py-10 border-b border-brand overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="overline text-center">
            Trusted by teams that don't have time for downtime
          </p>
        </div>
        <div className="mt-6 overflow-hidden no-scrollbar">
          <div className="marquee">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
              <span
                key={i}
                className="font-serif italic text-2xl md:text-3xl text-brand-fg/40 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section data-testid="stats-section" className="py-20 md:py-28 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {STATS.map((s) => (
            <div key={s.label} data-testid={`stat-${s.label.replace(/\s+/g, "-")}`}>
              <p className="font-serif text-5xl md:text-6xl font-semibold text-brand-fg leading-none">
                {s.v}
              </p>
              <p className="mt-3 text-sm uppercase tracking-widest text-brand-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section
        data-testid="services-teaser"
        className="py-24 md:py-32 border-b border-brand"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="overline">What we do</p>
              <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Six practices.
                <br />
                One accountable team.
              </h2>
            </div>
            <Link
              to="/services"
              data-testid="services-teaser-cta"
              className="inline-flex items-center gap-2 text-brand-fg hover:text-brand-primary transition-colors font-medium"
            >
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--brand-border)] border border-brand">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                data-testid={`service-teaser-${s.slug}`}
                className="group bg-brand p-8 md:p-10 hover:bg-brand-surface transition-colors relative"
              >
                <p className="font-serif italic text-xs text-brand-primary tracking-widest">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-serif text-2xl md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-4 text-brand-muted leading-relaxed">
                  {s.lead}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-fg group-hover:text-brand-primary transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES TEASER */}
      <section
        data-testid="industries-teaser"
        className="py-24 md:py-32 border-b border-brand"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="overline">Industries we serve</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Regulated, resilient,
              <br />
              relentlessly supported.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES.slice(0, 3).map((ind) => (
              <Link
                key={ind.slug}
                to="/industries"
                data-testid={`industry-teaser-${ind.slug}`}
                className="group relative h-[420px] overflow-hidden border border-brand"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    {ind.kicker}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{ind.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/industries"
              data-testid="industries-teaser-cta"
              className="inline-flex items-center gap-2 text-brand-fg hover:text-brand-primary transition-colors font-medium"
            >
              See all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        data-testid="testimonials-section"
        className="py-24 md:py-32 border-b border-brand bg-brand-surface"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="overline">Client notes</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            What clients say when
            <br />
            the pager isn't ringing.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={i}
                data-testid={`testimonial-${i}`}
                className="bg-brand border border-brand p-8 md:p-10"
              >
                <p className="font-serif text-xl md:text-2xl leading-snug text-brand-fg">
                  "{t.quote}"
                </p>
                <footer className="mt-6 text-sm">
                  <p className="font-medium text-brand-fg">{t.name}</p>
                  <p className="text-brand-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-testid="home-cta" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Ready for IT that
              <br />
              <span className="italic text-brand-primary">just works?</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-brand-muted leading-relaxed max-w-lg">
              A 30-minute discovery call is the fastest way to see if our pod
              model fits your team. No slides. No sales engineer. Just an
              engineer and a whiteboard.
            </p>
            <Link
              to="/contact"
              data-testid="home-cta-button"
              className="mt-8 inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
            >
              Book a discovery call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
