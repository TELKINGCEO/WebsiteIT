import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section data-testid="page-not-found" className="min-h-screen flex items-center justify-center bg-brand pt-24 px-6">
      <div className="max-w-2xl text-center">
        <p className="overline">404</p>
        <h1 className="mt-6 font-serif font-bold text-6xl md:text-8xl leading-none tracking-tighter">
          Off the map.
        </h1>
        <p className="mt-6 text-lg text-brand-muted leading-relaxed">
          That page doesn't exist—or it's been retired. Let's get you back to
          somewhere useful.
        </p>
        <Link
          to="/"
          data-testid="notfound-home"
          className="mt-10 inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors"
        >
          Back to home <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
