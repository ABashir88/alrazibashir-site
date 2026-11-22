import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

// Condensed homepage summary. The full career grid, deal record, and resume live on /hiring.
const ROLES = [
  { company: "Searvis", role: "Founder & Independent AI Industry Advisor", period: "2026 – Present", current: true },
  { company: "Telnyx", role: "Enterprise AE · AI voice infrastructure", period: "2025 – 2026" },
  { company: "Cyara", role: "Enterprise AE · Contact center AI assurance", period: "2023 – 2024" },
  { company: "Twilio", role: "Enterprise AE · Programmable communications", period: "2019 – 2021" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 0", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Experience"
          title="Where the perspective comes from"
          subtitle="Before founding Searvis, I spent years inside enterprise buying decisions for communications and CX technology at Twilio, Cyara, and Telnyx, working through long technical evaluations with engineering, CX, operations, and executive teams. That is the vantage point behind the research."
          marginBottom="32px"
        />

        <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0, borderTop: "1px solid var(--color-border)" }}>
          {ROLES.map((r) => (
            <li key={r.company} className="exp-row">
              <span style={{ fontWeight: 700, color: "var(--color-text)" }}>
                {r.company}
                {r.current && <span style={{ marginLeft: "8px", fontSize: "10px", fontWeight: 600, color: "var(--color-accent)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Now</span>}
              </span>
              <span style={{ color: "var(--color-text-secondary)" }}>{r.role}</span>
              <span className="exp-period">{r.period}</span>
            </li>
          ))}
        </ul>

        <Link href="/hiring" className="exp-link">Full career history, deal record, and resume →</Link>
      </div>

      <style>{`
        .exp-row {
          display: grid; grid-template-columns: 140px 1fr auto; gap: 4px 20px; align-items: baseline;
          padding: 14px 0; border-bottom: 1px solid var(--color-border);
          font-size: 0.9rem; font-family: var(--font-body);
        }
        .exp-period { font-size: 12px; color: var(--color-text-muted); white-space: nowrap; }
        .exp-link { font-size: 0.875rem; font-weight: 600; color: var(--color-accent); text-decoration: none; font-family: var(--font-body); }
        .exp-link:hover { text-decoration: underline; }
        @media (max-width: 600px) {
          .exp-row { grid-template-columns: 1fr auto; }
          .exp-row > span:nth-child(2) { grid-column: 1 / -1; grid-row: 2; }
        }
      `}</style>
    </section>
  );
}
