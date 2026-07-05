import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/siteData";

export default function Industries() {
  return (
    <div data-testid="page-industries" className="bg-brand">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <p className="overline">Industries</p>
            <h1
              data-testid="industries-headline"
              className="mt-6 font-serif font-bold text-5xl md:text-7xl leading-[0.95] tracking-tighter"
            >
              Built for the industries where
              <br />
              <span className="italic text-brand-primary font-normal">
                downtime has a price tag.
              </span>
            </h1>
          </div>
          <div className="md:col-span-4 md:pt-6">
            <p className="text-lg text-brand-muted leading-relaxed">
              Regulation, resilience, uptime—we've done the calluses so your
              team doesn't have to.
            </p>
          </div>
        </div>
      </section>

      {/* Z-pattern industries */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-24 md:space-y-32">
          {INDUSTRIES.map((ind, i) => (
            <article
              key={ind.slug}
              data-testid={`industry-${ind.slug}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
            >
              <div
                className={`md:col-span-6 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="border border-brand overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-[380px] md:h-[480px] object-cover"
                  />
                </div>
              </div>
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="overline">{ind.kicker}</p>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
                  {ind.name}
                </h2>
                <p className="mt-6 text-lg text-brand-muted leading-relaxed max-w-lg">
                  {ind.description}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-8 max-w-md">
                  {ind.stats.map((st) => (
                    <div key={st.k} data-testid={`industry-stat-${ind.slug}-${st.k.replace(/\s+/g, "-")}`}>
                      <p className="font-serif text-4xl md:text-5xl text-brand-fg leading-none">
                        {st.v}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-widest text-brand-muted">
                        {st.k}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  data-testid={`industry-cta-${ind.slug}`}
                  className="mt-10 inline-flex items-center gap-2 border border-brand-fg px-6 py-3 text-sm font-medium hover:bg-brand-fg hover:text-white transition-colors"
                >
                  Talk to a {ind.name.split(" ")[0]} specialist
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-brand bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Not on the list?
            <br />
            <span className="italic text-brand-primary">We probably fit anyway.</span>
          </h2>
          <div>
            <p className="text-lg text-brand-muted leading-relaxed">
              Our pod model is industry-agnostic. If your team runs on
              computers, we can probably help—tell us more.
            </p>
            <Link
              to="/contact"
              data-testid="industries-final-cta"
              className="mt-8 inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
            >
              Start a conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
