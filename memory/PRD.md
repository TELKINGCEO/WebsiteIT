# TechAssist Pro — IT Support Website

## Original Problem Statement
> I want to create a IT Support website which need to have following pages:- Hero page, Home, Services, Industries, About US, Contact US

## User Choices
- Company name (placeholder): **TechAssist Pro**
- Design vibe: Modern corporate + Friendly & approachable + Editorial/premium
- Services: Standard set (Managed IT, Cloud Services, Cybersecurity, Network Support, Data Backup, Help Desk)
- Contact form: working, persists to MongoDB
- Integrations: none

## Architecture
- **Backend**: FastAPI + Motor (MongoDB). Routes prefixed `/api`.
  - `POST /api/contact` — create inquiry (Pydantic + EmailStr validation), stored in `contact_inquiries`.
  - `GET /api/contact` — list inquiries, sorted newest first.
  - `GET /api/`, `GET/POST /api/status` — health/legacy.
- **Frontend**: React 19 + React Router 7 + Tailwind + Shadcn UI + sonner toasts.
  - Routes: `/`, `/services`, `/industries`, `/about`, `/contact`, `*` (NotFound).
  - Shared: `Navbar`, `Footer`.
  - Design system: warm linen palette (#FAF9F6 / #F0EFEB) with terracotta accent (#E65F2B); Playfair Display (headings) + Outfit (body).

## Implemented (2026-12)
- Hero-driven Home page with editorial typography, stats, services teaser, industries teaser, testimonials, CTA.
- Services page with 6 bento-style cards, 4-step process, CTA.
- Industries page with 6 industries in alternating Z-pattern layout and per-vertical stats.
- About Us page with story (drop-cap), 4 values, leadership team, stats.
- Contact Us page with 2-column split (dark left / warm right), working form saving to MongoDB, success state + toast errors.
- Persistent glass navbar with mobile menu; premium dark footer.
- 100% pass on backend + frontend + integration tests (iteration_1).

## User Personas
- **SMB CTO / IT Director** — evaluating managed IT partners.
- **Compliance-heavy verticals** (healthcare, finance, legal) — needs regulated posture.
- **Non-technical founder** — looking for one accountable IT partner.

## Core Requirements (static)
- Marketing site with 5 primary pages + hero-led home.
- Persistent nav/footer with clear CTAs to Contact.
- Contact form persistence.
- Responsive, accessible, distinctive editorial design (no generic SaaS blue).

## Prioritized Backlog
### P1
- Admin dashboard to view submitted contact inquiries.
- SEO meta tags per page + `sitemap.xml` + Open Graph images.
- Case studies / resources section.
### P2
- Live chat or Calendly booking integration.
- Blog/CMS for thought leadership.
- Email notifications on new inquiry (Resend/SendGrid).
- Multi-language (EN/ES) support.

## Next Tasks (recommended)
1. Admin `/admin/inquiries` gated view (JWT or Emergent Google Auth).
2. Add email notification on new contact inquiry.
3. Add case-studies module to boost conversion.
