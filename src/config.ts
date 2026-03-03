export const siteConfig = {
  name: "Alrazi Bashir",
  title: "Alrazi Bashir | Enterprise AI & Revenue Systems",
  description:
    "Enterprise account executive and systems thinker focused on AI infrastructure, CX platforms, and revenue operations.",
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
    github: "https://github.com/ABashir88",
    dealCommandCenter: "/deal-command-center.xlsx",
    searvis: "https://searvis.io",
  },
  hero: {
    eyebrow: "Enterprise AI · Voice Infrastructure · Revenue Systems",
    headline: "I help enterprise teams turn AI, voice infrastructure, and revenue systems into reliable growth engines.",
    subheadline:
      "Enterprise account executive focused on AI-driven customer experience, voice infrastructure, and revenue operations—pairing GTM strategy with the systems, workflows, and integrations that actually move pipeline and NRR.",
    primaryCta: {
      label: "Email me",
      href: "mailto:alrazi@alrazibashir.com",
    },
    secondaryCta: {
      label: "View resume",
      href: "/resume.pdf",
    },
    tertiaryCta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/alrazibashir",
    },
  },
  proofBar: {
    label: "Experience building and selling with",
    items: ["Telnyx", "Cyara", "Twilio"],
  },
  sections: {
    whatIDo: {
      eyebrow: "What I do",
      title: "I design and operationalize enterprise AI and revenue systems.",
      body:
        "Usually as the enterprise AE who can sit with product, RevOps, and CX teams, map the real workflows, and then drive the commercial and technical decisions that make systems reliable and revenue-aligned.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Enterprise AI, CX infrastructure, and revenue systems where dollars are on the line.",
    },
    wins: {
      eyebrow: "Selected wins",
      title: "A few anonymized, outcome-first stories from complex enterprise environments.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Concepts and experiments that reflect how I think about GTM systems and CX platforms.",
      visitLabel: "Visit",
    },
    contact: {
      eyebrow: "Contact",
      title:
        "If you’re leading GTM, CX, or AI initiatives and need a partner who speaks both systems and deals, I’d love to talk.",
      body:
        "Best fit: founders, GTM leaders, and CX/AI teams working on AI infrastructure, conversational platforms, or revenue-critical workflows. Send a short note with your context and timelines.",
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
      title: "Enterprise GTM systems",
      description:
        "Design end-to-end GTM systems across CRM, CPQ, billing, and data to give leadership real pipeline visibility, reduce handoff friction, and keep reps selling instead of reconciling tools.",
    },
    {
      title: "AI & CX platform commercialization",
      description:
        "Bridge AI/voice platform capabilities with real enterprise use cases—packaging, pricing, and positioning offerings so buyers understand value, risk, and how they’ll operationalize the stack.",
    },
    {
      title: "Revenue operations & automation",
      description:
        "Partner with RevOps to automate approvals, routing, and reporting—shrinking time-to-decision from weeks to days and creating workflows that are auditable, predictable, and easy to iterate on.",
    },
  ],
  experience: [
    {
      company: "Telnyx",
      title: "Enterprise Account Executive, AI & Voice Infrastructure",
      period: "2022 – 2025",
      location: "Remote",
      bullets: [
        "Owned strategic AI and voice infrastructure accounts, helping revenue and CX leaders design platforms that could handle high-volume, high-stakes interactions.",
        "Partnered with RevOps and product teams to implement workflows that reduced manual deal handling time by ~30% and improved forecasting accuracy.",
        "Drove multi-stakeholder cycles (product, security, procurement) from initial design reviews to go-live, shortening complex enterprise deals from months to weeks where possible.",
      ],
    },
    {
      company: "Cyara",
      title: "Enterprise Account Executive, CX Testing & Monitoring",
      period: "2020 – 2022",
      location: "Remote",
      bullets: [
        "Worked with enterprise contact center teams to commercialize CX testing and monitoring programs that improved reliability of critical journeys by double-digit percentages.",
        "Helped customers move from ad-hoc testing to structured, automated CX assurance—compressing incident detection from days to hours.",
        "Collaborated with solutions and product teams to package offers that aligned engineering effort with measurable CX and NPS outcomes.",
      ],
    },
    {
      company: "Twilio",
      title: "Account Executive & Solutions Partner, Communications APIs",
      period: "2017 – 2020",
      location: "San Francisco, CA",
      bullets: [
        "Partnered with product and engineering to help high-growth companies design messaging and voice architectures that could scale from pilot to millions of interactions.",
        "Led deal cycles where API design, compliance, and reliability were as important as commercials, aligning stakeholders on clear success metrics.",
        "Helped customers move from siloed, channel-specific tools to unified communications patterns that supported new revenue streams.",
      ],
    },
  ],
  wins: [
    {
      title: "Reduced enterprise deal friction and time-to-close",
      role: "Enterprise AE & RevOps partner",
      summary:
        "For a B2B platform selling into complex enterprises, bespoke contracts and fragmented approval flows made deals unpredictable and slow.",
      outcome:
        "Standardized and automated deal workflows with RevOps, improving approval clarity and cutting cycle time by roughly weeks while reducing late-stage surprises.",
    },
    {
      title: "Stabilized mission-critical CX tooling for high-volume teams",
      role: "Partner to CX leadership and platform teams",
      summary:
        "Support teams were resolving high-stakes incidents across multiple consoles and brittle scripts, with leadership lacking a reliable view of impact or risk.",
      outcome:
        "Drove adoption of a unified console and safer workflows, reducing escalations, shrinking time-to-resolution, and giving CX leaders clearer, near real-time incident visibility.",
    },
    {
      title: "Gave leadership a trustworthy revenue and CX signal",
      role: "Partner to data, product, and RevOps",
      summary:
        "Revenue and CX leaders lacked a single, trusted view across CRM, billing, and product usage to make confident bets.",
      outcome:
        "Partnered on a unified data model and reporting cadence that enabled meaningful forecasting, cohort analysis, and board-ready views of pipeline and retention.",
    },
  ],
  projects: [
    {
      name: "Deal Command Center",
      description:
        "A concept for a single pane of glass where GTM and RevOps leaders can see risk, approvals, and blockers across complex B2B deals in real time.",
      hrefKey: "dealCommandCenter" as const,
    },
    {
      name: "Searvis.io",
      description:
        "An early CX consulting and platform concept exploring how buyers evaluate voice/AI vendors and how to make reliability and pricing radically clearer.",
      hrefKey: "searvis" as const,
    },
    {
      name: "GitHub",
      description:
        "Open-source experiments, small tools, and prototypes that show how I think about systems, developer ergonomics, and GTM workflows.",
      hrefKey: "github" as const,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
