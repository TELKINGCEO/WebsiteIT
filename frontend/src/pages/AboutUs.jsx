import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { VALUES, TEAM, STATS } from "@/lib/siteData";

export default function AboutUs() {
  return (
    <div data-testid="page-about" className="bg-brand">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <p className="overline">About us</p>
            <h1
              data-testid="about-headline"
              className="mt-6 font-serif font-bold text-5xl md:text-7xl leading-[0.95] tracking-tighter"
            >
              A small firm that
              <br />
              <span className="italic text-brand-primary font-normal">
                takes IT personally.
              </span>
            </h1>
          </div>
          <div className="md:col-span-4 md:pt-6">
            <p className="text-lg text-brand-muted leading-relaxed">
              Founded in 2008. Still independent. Still answering the phone.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="border border-brand overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjB0ZWNoJTIwb2ZmaWNlfGVufDB8fHx8MTc4MzI1NDE3OXww&ixlib=rb-4.1.0&q=85"
                alt="Diverse tech team meeting"
                data-testid="about-team-image"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="overline">Our story</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.05]">
              We started as the IT team a hedge fund refused to lose.
            </h2>
            <p
              data-testid="about-story"
              className="drop-cap mt-8 text-lg text-brand-fg/85 leading-relaxed"
            >
              In 2008, our founder Elena took a call at 2:14 a.m. from a small
              hedge fund that had lost half its trading environment to a
              botched patch. She rebuilt it before markets opened. They hired
              her the next morning—and asked if she'd do it again, on retainer,
              for their whole portfolio. That first client is still with us.
              What started as one engineer on a red-eye is now a firm of 80+
              engineers across three time zones—but the promise is unchanged:
              named humans, written playbooks, and a phone that gets picked up.
            </p>
            <p className="mt-6 text-lg text-brand-muted leading-relaxed">
              We're independently owned, deliberately small per client, and
              measured by outcomes—not ticket volume. If that sounds unusual,
              that's kind of the point.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 border-b border-brand bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="overline">What we believe</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              Four principles.
              <br />
              Written on the wall.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                data-testid={`value-${i}`}
                className="bg-brand border border-brand p-8 md:p-10"
              >
                <p className="font-serif italic text-brand-primary text-sm">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">
                  {v.title}
                </h3>
                <p className="mt-5 text-brand-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {STATS.map((s) => (
            <div key={s.label}>
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

      {/* Team */}
      <section className="py-24 md:py-32 border-b border-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="overline">Leadership</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
              Names.
              <br />
              Not queues.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM.map((p, i) => (
              <div
                key={p.name}
                data-testid={`team-${i}`}
                className="bg-brand-surface border border-brand p-6 md:p-8"
              >
                <div className="aspect-square w-full bg-brand mb-6 border border-brand flex items-center justify-center">
                  <span className="font-serif text-6xl text-brand-primary">
                    {p.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <p className="font-serif text-xl">{p.name}</p>
                <p className="mt-1 text-sm text-brand-muted">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Want to meet the pod
            <br />
            <span className="italic text-brand-primary">before you sign?</span>
          </h2>
          <div>
            <p className="text-lg text-brand-muted leading-relaxed">
              You'll meet the exact engineers you'll be working with on the
              first call. That's not a demo—that's just how we work.
            </p>
            <Link
              to="/contact"
              data-testid="about-cta-final"
              className="mt-8 inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
            >
              Meet the team <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
