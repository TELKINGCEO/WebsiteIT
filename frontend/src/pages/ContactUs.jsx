import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/siteData";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactUs() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim() || null,
        phone: form.phone.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
      });
      toast.success("Thanks — we'll be in touch within one business day.");
      setDone(true);
      setForm(initial);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        (Array.isArray(err?.response?.data?.detail) &&
          err.response.data.detail[0]?.msg) ||
        "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Please check the form and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="page-contact" className="bg-brand">
      <section className="pt-24 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
          {/* Left dark side */}
          <div
            data-testid="contact-left-panel"
            className="bg-brand-footer text-white px-6 md:px-14 lg:px-20 py-20 md:py-28 flex flex-col justify-between"
          >
            <div>
              <p className="overline text-white/60">Contact</p>
              <h1
                data-testid="contact-headline"
                className="mt-6 font-serif font-bold text-5xl md:text-7xl leading-[0.95] tracking-tighter"
              >
                Let's talk about
                <br />
                <span className="italic text-brand-primary font-normal">
                  what you're running.
                </span>
              </h1>
              <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-lg">
                Tell us a little about your stack, your team, and where it
                hurts. An engineer (not a sales rep) will reply within one
                business day.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Phone
                  </p>
                  <p className="mt-1 text-white" data-testid="contact-phone">
                    {COMPANY.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Email
                  </p>
                  <p className="mt-1 text-white" data-testid="contact-email">
                    {COMPANY.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Studio
                  </p>
                  <p className="mt-1 text-white whitespace-pre-line">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Hours
                  </p>
                  <p className="mt-1 text-white">{COMPANY.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form side */}
          <div className="bg-brand-surface px-6 md:px-14 lg:px-20 py-20 md:py-28">
            <p className="overline">Project brief</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">
              Tell us about your environment.
            </h2>

            {done && (
              <div
                data-testid="contact-success"
                className="mt-8 border border-brand-primary bg-brand p-6"
              >
                <p className="font-serif text-2xl text-brand-primary">
                  Message received.
                </p>
                <p className="mt-2 text-brand-muted">
                  An engineer will be in touch within one business day.
                </p>
              </div>
            )}

            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="mt-10 space-y-8"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FieldInput
                  label="Full name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  testid="contact-input-name"
                />
                <FieldInput
                  label="Work email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  testid="contact-input-email"
                />
                <FieldInput
                  label="Company"
                  value={form.company}
                  onChange={update("company")}
                  testid="contact-input-company"
                />
                <FieldInput
                  label="Phone (optional)"
                  value={form.phone}
                  onChange={update("phone")}
                  testid="contact-input-phone"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="text-xs uppercase tracking-widest text-brand-muted"
                >
                  Service of interest
                </label>
                <select
                  id="contact-service"
                  data-testid="contact-input-service"
                  value={form.service}
                  onChange={update("service")}
                  className="mt-2 w-full bg-transparent border-b-2 border-brand-fg/25 focus:border-brand-primary py-3 text-brand-fg font-sans focus:outline-none transition-colors"
                >
                  <option value="">Not sure yet</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs uppercase tracking-widest text-brand-muted"
                >
                  Where does it hurt?<span className="text-brand-primary"> *</span>
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-input-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about your stack, team size, and what's on fire."
                  className="mt-2 w-full bg-transparent border-b-2 border-brand-fg/25 focus:border-brand-primary py-3 text-brand-fg font-sans focus:outline-none transition-colors resize-none placeholder:text-brand-muted/60"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 text-sm font-medium hover:bg-[color:var(--brand-primary-hover)] transition-colors disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-brand-muted">
                By submitting, you agree we may contact you about your inquiry.
                We don't do drip campaigns.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function FieldInput({ label, required, testid, ...rest }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-brand-muted">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      <input
        data-testid={testid}
        required={required}
        {...rest}
        className="mt-2 w-full bg-transparent border-b-2 border-brand-fg/25 focus:border-brand-primary py-3 text-brand-fg font-sans focus:outline-none transition-colors placeholder:text-brand-muted/60"
      />
    </div>
  );
}
