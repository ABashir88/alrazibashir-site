export const siteConfig = {
  name: "Alrazi Bashir",
  title: "Alrazi Bashir – Product & Growth Engineering",
  description:
    "Product-minded engineer helping B2B companies design, ship, and scale revenue-critical systems.",
  email: "alrazi@alrazibashir.com",
  baseUrl: "https://alrazibashir.com",
  resumeUrl: "/resume.pdf",
  resumeLabel: "Resume",
  logoInitials: "AR",
  nav: [
    { label: "What I Do", href: "#what-i-do" },
    { label: "Experience", href: "#experience" },
    { label: "Wins", href: "#wins" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    github: "https://github.com/alrazi",
    dealCommandCenter: "https://dealcommand.center",
    searvis: "https://searvis.io",
  },
  hero: {
    eyebrow: "Product & Growth Engineering",
    headline: "I help B2B teams turn complex revenue problems into simple systems.",
    subheadline:
      "Hands-on builder with a track record shipping revenue-critical workflows for sales, support, and operations.",
    primaryCta: {
      label: "Email me",
      href: "mailto:alrazi@alrazibashir.com",
    },
    secondaryCta: {
      label: "View resume",
      href: "/resume.pdf",
    },
  },
  proofBar: {
    label: "Previously helped teams at",
    items: ["Telnyx", "Cyara", "Twilio"],
  },
  sections: {
    whatIDo: {
      eyebrow: "What I do",
      title: "I specialize in making complex revenue systems feel straightforward.",
      body:
        "Usually as the engineer who can sit with sales, support, or ops, understand the mess, and then design and ship something durable.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Shipping and owning systems where revenue is on the line.",
    },
    wins: {
      eyebrow: "Selected wins",
      title: "A few anonymized projects where I owned the outcome.",
    },
    projects: {
      eyebrow: "Projects",
      title: "A few things I’ve shipped recently or still think about.",
      visitLabel: "Visit",
    },
    contact: {
      eyebrow: "Contact",
      title:
        "If you’re thinking about your next system, I’d love to talk.",
      body:
        "The best way to reach me is over email with a bit of context on your team, the problem, and any timelines.",
      ctaPrefix: "Email",
      responseNote: "I usually respond within a few days.",
    },
    footer: {
      copyrightName: "Alrazi Bashir",
      builtWith: "Built with Next.js.",
    },
  },
  whatIDo: [
    {
      title: "Revenue workflows",
      description:
        "Design and implement resilient workflows across CRM, billing, support, and internal tools so teams can move faster with less chaos.",
    },
    {
      title: "Product discovery",
      description:
        "Partner with GTM and product to clarify the problem, define success, and ship what actually matters to customers.",
    },
    {
      title: "Technical execution",
      description:
        "Own the full stack from data models and APIs to polished UIs, with an obsession for reliability and maintainability.",
    },
  ],
  experience: [
    {
      company: "Telnyx",
      title: "Senior Software Engineer",
      period: "2022 – 2025",
      location: "Remote",
      bullets: [
        "Led engineering for revenue-critical internal tooling used daily by sales and support.",
        "Reduced manual deal processing time by double-digit percentage through workflow automation.",
      ],
    },
    {
      company: "Cyara",
      title: "Software Engineer",
      period: "2020 – 2022",
      location: "Remote",
      bullets: [
        "Built features for CX testing and monitoring platform used by enterprise contact centers.",
        "Improved reliability of key services through better observability and guardrails.",
      ],
    },
    {
      company: "Twilio",
      title: "Software Engineer",
      period: "2017 – 2020",
      location: "San Francisco, CA",
      bullets: [
        "Shipped features for communications APIs powering high-volume messaging and voice use cases.",
        "Collaborated with product and customer teams to design scalable patterns for new workloads.",
      ],
    },
  ],
  wins: [
    {
      title: "Shortening enterprise deal cycles",
      role: "Lead engineer & partner to sales ops",
      summary:
        "For a B2B SaaS company with long, bespoke contracts, fragmented tools and manual approvals made deals slow and error-prone.",
      outcome:
        "Standardized deal workflows, automated approvals, and centralized visibility, cutting cycle time and reducing surprises late in the process.",
    },
    {
      title: "Stabilizing critical support tooling",
      role: "Hands-on owner for internal apps",
      summary:
        "Support teams were juggling multiple consoles and brittle scripts to resolve customer issues on shared infrastructure.",
      outcome:
        "Consolidated workflows into a single tool, improved safety rails, and reduced escalations while keeping engineers in the loop only when needed.",
    },
    {
      title: "Designing a unified data backbone",
      role: "Partner to data and product",
      summary:
        "Leaders lacked a reliable view of revenue performance across CRM, billing, and product usage.",
      outcome:
        "Collaborated on a shared data model and pipelines that made it possible to ship meaningful reporting and forecasting tools.",
    },
  ],
  projects: [
    {
      name: "Deal Command Center",
      description:
        "An opinionated internal console pattern for running complex B2B deals with clarity.",
      hrefKey: "dealCommandCenter" as const,
    },
    {
      name: "Searvis.io",
      description:
        "A small product experiment exploring service discovery and transparent pricing.",
      hrefKey: "searvis" as const,
    },
    {
      name: "GitHub",
      description: "Open source work, experiments, and small tools.",
      hrefKey: "github" as const,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
