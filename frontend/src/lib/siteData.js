export const COMPANY = {
  name: "TechAssist Pro",
  tagline: "IT support, engineered like craft.",
  phone: "+1 (415) 555-0134",
  email: "hello@techassistpro.io",
  address: "228 Mission Street, Suite 900\nSan Francisco, CA 94105",
  hours: "Mon – Fri · 24/7 emergency line",
};

export const SERVICES = [
  {
    slug: "managed-it",
    name: "Managed IT",
    lead: "Your outsourced IT department, in-house responsive.",
    description:
      "Proactive monitoring, patching, asset lifecycle and vendor management—delivered by a named engineering pod that learns your business.",
    features: [
      "24/7 endpoint & server monitoring",
      "Quarterly business reviews",
      "Dedicated pod with named engineers",
      "Predictable flat-fee pricing",
    ],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJVCUyMHN1cHBvcnQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzgzMjU0MTc5fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "cloud-services",
    name: "Cloud Services",
    lead: "AWS, Azure & GCP architected for scale and spend control.",
    description:
      "From lift-and-shift migrations to greenfield cloud-native builds, we design, implement and finops-optimize your workloads end to end.",
    features: [
      "Migration & modernization",
      "Infrastructure as Code (Terraform)",
      "Cost optimization & FinOps",
      "Multi-cloud & hybrid strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGF8ZW58MHx8fHwxNzgzMjU0MTg2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    lead: "Defense-in-depth for the way your business really operates.",
    description:
      "Threat detection, endpoint protection, identity hardening and compliance-ready programs (SOC 2, HIPAA, ISO 27001).",
    features: [
      "24/7 MDR & SIEM monitoring",
      "Zero-trust identity & MFA",
      "Phishing simulation & training",
      "Compliance readiness programs",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5JTIwc2NyZWVuJTIwY29kZXxlbnwwfHx8fDE3ODMyNTQxODZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "network-support",
    name: "Network Support",
    lead: "Resilient networks—wired, wireless and everything between.",
    description:
      "Design, deploy and support high-availability LAN/WAN, SD-WAN and Wi-Fi 6E infrastructure across single or multi-site operations.",
    features: [
      "SD-WAN & MPLS design",
      "Enterprise Wi-Fi surveys",
      "Firewall & VPN management",
      "24/7 NOC support",
    ],
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyJTIwY2FibGVzfGVufDB8fHx8MTc4MzI1NDE3OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    slug: "data-backup",
    name: "Data Backup & Recovery",
    lead: "Immutable backups. Tested recovery. Sleepable nights.",
    description:
      "Off-site, air-gapped, ransomware-resistant backups with quarterly recovery drills—so a disaster is an inconvenience, not a headline.",
    features: [
      "Immutable off-site backups",
      "Quarterly DR drills",
      "RPO/RTO SLAs in writing",
      "Ransomware rollback",
    ],
    image:
      "https://images.pexels.com/photos/17489156/pexels-photo-17489156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "help-desk",
    name: "Help Desk",
    lead: "A human answer, in under 47 seconds on average.",
    description:
      "Tier 1–3 help desk staffed by engineers, not scripts. Chat, phone, email, portal—one ticket, one owner, one outcome.",
    features: [
      "< 47s average answer time",
      "97% first-contact resolution",
      "Chat, phone, email & portal",
      "Bilingual EN/ES coverage",
    ],
    image:
      "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjYWxsJTIwY2VudGVyJTIwaGVscCUyMGRlc2t8ZW58MHx8fHwxNzgzMjU0MTg2fDA&ixlib=rb-4.1.0&q=85",
  },
];

export const INDUSTRIES = [
  {
    slug: "finance",
    name: "Finance & Fintech",
    kicker: "01 — Regulated",
    description:
      "SOC 2, PCI-DSS and SEC-aware operations for banks, RIAs, hedge funds and fintech scaleups. Zero-trust from ledger to laptop.",
    image:
      "https://images.unsplash.com/photo-1686100511314-7d4a52987f2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBmaW5hbmNlJTIwY29ycG9yYXRlJTIwb2ZmaWNlfGVufDB8fHx8MTc4MzI1NDE3OXww&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "of AUM protected", v: "$40B+" },
      { k: "audit pass rate", v: "100%" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    kicker: "02 — HIPAA-first",
    description:
      "EHR-adjacent infrastructure, HIPAA-compliant cloud, and 24/7 support for hospitals, clinics and med-tech companies.",
    image:
      "https://images.unsplash.com/photo-1628372095387-017d1099fc19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzgzMjU0MTg2fDA&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "clinics supported", v: "180+" },
      { k: "PHI-safe uptime", v: "99.99%" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    kicker: "03 — OT + IT",
    description:
      "Bridge IT and OT with air-gapped networks, MES integrations and edge deployments that survive the plant floor.",
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwdGVjaCUyMG1vZGVybnxlbnwwfHx8fDE3ODMyNTQxODd8MA&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "plants networked", v: "42" },
      { k: "unplanned downtime cut", v: "-64%" },
    ],
  },
  {
    slug: "legal",
    name: "Legal & Professional",
    kicker: "04 — Confidential",
    description:
      "Matter-centric workflows, document security, e-discovery readiness and airtight client confidentiality for law firms.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBJVCUyMHN1cHBvcnQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzgzMjU0MTc5fDA&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "firms served", v: "60+" },
      { k: "average case IT overhead", v: "-38%" },
    ],
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    kicker: "05 — Omni-channel",
    description:
      "POS uptime, PCI-scoped networks and cloud commerce stacks tuned for peak seasons and multi-site operations.",
    image:
      "https://images.unsplash.com/photo-1712159018726-4564d92f3ec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjYWxsJTIwY2VudGVyJTIwaGVscCUyMGRlc2t8ZW58MHx8fHwxNzgzMjU0MTg2fDA&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "storefronts", v: "900+" },
      { k: "peak POS uptime", v: "99.98%" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    kicker: "06 — Learner-first",
    description:
      "Campus-wide Wi-Fi, classroom devices, LMS integrations and student data privacy programs for K-12 and higher ed.",
    image:
      "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGF8ZW58MHx8fHwxNzgzMjU0MTg2fDA&ixlib=rb-4.1.0&q=85",
    stats: [
      { k: "students supported", v: "120K+" },
      { k: "classroom SLA", v: "99.9%" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "TechAssist Pro doesn't feel like a vendor—they feel like the IT team we always wished we had. Three tickets in and I stopped worrying about our infrastructure.",
    name: "Priya Ramanathan",
    role: "COO, Northshore Capital",
  },
  {
    quote:
      "We moved 14 clinics to a HIPAA-ready cloud in nine months without a single hour of downtime. That's the whole review.",
    name: "Dr. Marcus Bell",
    role: "CIO, Coastline Health",
  },
  {
    quote:
      "The help desk answers in seconds, and the engineers actually solve the ticket. It's embarrassingly refreshing.",
    name: "Alicia Ortega",
    role: "Ops Lead, Foundry Legal",
  },
];

export const STATS = [
  { v: "17", label: "years in IT services" },
  { v: "1,200+", label: "clients supported" },
  { v: "99.98%", label: "average uptime SLA" },
  { v: "47s", label: "avg help-desk answer" },
];

export const CLIENT_LOGOS = [
  "Northshore",
  "Coastline",
  "Foundry",
  "Kestrel & Co",
  "Vantage Labs",
  "Meridian",
  "Aurora Health",
  "Ironclad",
];

export const VALUES = [
  {
    title: "Craft, not tickets.",
    body: "We measure ourselves on outcomes—downtime avoided, breaches prevented, engineers your team trusts—not on ticket volume.",
  },
  {
    title: "Named humans, always.",
    body: "You'll know your pod's names, their voices and their calendars. No mystery queues, no bounced escalations.",
  },
  {
    title: "Written down, on purpose.",
    body: "Runbooks, RPO/RTO SLAs, decision logs. If it isn't documented, it isn't done.",
  },
  {
    title: "Boringly reliable.",
    body: "Excitement is for weekends. Your infrastructure should feel like plumbing that just works.",
  },
];

export const TEAM = [
  { name: "Elena Vasquez", role: "Founder & CEO" },
  { name: "Rahul Menon", role: "VP Engineering" },
  { name: "Cassie Booker", role: "Head of Security" },
  { name: "Daniel Osei", role: "Cloud Practice Lead" },
];
