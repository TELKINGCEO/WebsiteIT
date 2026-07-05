import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/siteData";

export default function Services() {
  return (
    <div data-testid="page-services" className="bg-brand">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <p className="overline" data-testid="services-eyebrow">
              Services
            </p>
            <h1
              data-testid="services-headline"
              className="mt-6 font-serif font-bold text-5xl md:text-7xl leading-[0.95] tracking-tighter"
            >
              Six practices.
              <br />
              <span className="italic text-brand-primary font-normal">
                One team
              </span>{" "}
              accountable end to end.
            </h1>
          </div>
          <div className="md:col-span-4 md:pt-6">
            <p className="text-lg text-brand-muted leading-relaxed">
              We don't sell shelfware. Every practice below is delivered by the
              same pod, on the same SLA, with the same phone number.
            </p>
          </div>
        </div>
      </section>

      {/* Bento grid of services */}
      <section className="py-20 md:py-28 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {SERVICES.map((s, i) => {
              const spans = [
                "md:col-span-4",
                "md:col-span-2",
                "md:col-span-3",
                "md:col-span-3",
                "md:col-span-2",
                "md:col-span-4",
              ];
              return (
                <article
                  key={s.slug}
                  data-testid={`service-card-${s.slug}`}
                  className={`group ${spans[i]} bg-brand-surface border border-brand p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="font-serif italic text-xs text-brand-primary tracking-widest">
                        0{i + 1}
                      </p>
                      <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                        {s.name}
                      </h2>
                      <p className="mt-4 text-brand-muted leading-relaxed max-w-xl">
                        {s.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 max-w-xl">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            data-testid={`service-feature-${s.slug}-${f
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="flex items-start gap-2 text-sm text-brand-fg/80"
                          >
                            <Check className="w-4 h-4 mt-0.5 text-brand-primary shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:block w-32 lg:w-44 shrink-0 overflow-hidden border border-brand">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-32 lg:h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-serif italic text-brand-muted">
                      {s.lead}
                    </span>
                    <Link
                      to="/contact"
                      data-testid={`service-cta-${s.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-fg group-hover:text-brand-primary transition-colors"
                    >
                      Discuss engagement <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        data-testid="services-process"
        className="py-24 md:py-32 border-b border-brand"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="overline">How we engage</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              A predictable
              <br />
              four-step onboarding.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-brand border border-brand">
            {[
              {
                t: "Discover",
                d: "A 30-minute call, then a 2-week environment audit. Zero commitment.",
              },
              {
                t: "Design",
                d: "We write a runbook and SLA proposal in plain English—not a deck.",
              },
              {
                t: "Deploy",
                d: "Pod goes live in 14 days. Every change is documented and reversible.",
              },
              {
                t: "Defend",
                d: "Monthly ops reviews, quarterly DR drills, continuous improvement.",
              },
            ].map((step, i) => (
              <div
                key={step.t}
                data-testid={`process-step-${i}`}
                className="bg-brand-surface p-8 md:p-10"
              >
                <p className="font-serif italic text-brand-primary text-sm">
                  Step 0{i + 1}
                </p>
                <h3 className="mt-3 font-serif text-3xl">{step.t}</h3>
                <p className="mt-4 text-brand-muted leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-2xl">
            Bring us the messy stack.
            <br />
            <span className="italic text-brand-primary">We'll bring the plan.</span>
          </h2>
          <Link
            to="/contact"
            data-testid="services-cta-final"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors w-fit"
          >
            Book a discovery call <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
