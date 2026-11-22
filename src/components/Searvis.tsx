import { SectionHeader } from "./SectionHeader";
import { siteConfig } from "../config";

const HELPS_WITH = [
  {
    title: "Evaluating Voice AI and CX vendors",
    body: "Comparing platforms on production readiness, integration depth, and cost per resolution — before a pilot is scoped.",
  },
  {
    title: "Designing pilots that surface failure modes",
    body: "Success criteria, test cases, and exit criteria agreed in writing, so a pilot proves what it needs to prove.",
  },
  {
    title: "Diagnosing customer-operations breakdowns",
    body: "Finding where conversations stop turning into completed, accountable outcomes — across people, platforms, and workflows.",
  },
];

export function Searvis() {
  const advisoryMail = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Advisory inquiry")}`;

  return (
    <section id="advisory" style={{ padding: "80px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Searvis · Advisory"
          title="Customer-operations research and scoped advisory"
          subtitle="Searvis is my independent practice. It researches how customer operations fail and how AI is reshaping CX, Voice AI, CCaaS, and CPaaS — and offers focused advisory work for teams building or buying in this space."
          marginBottom="32px"
        />

        <div className="srv-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "28px" }}>
          {HELPS_WITH.map((h) => (
            <div key={h.title} style={{ background: "var(--color-surface-card)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "20px 22px", fontFamily: "var(--font-body)" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px", lineHeight: 1.35 }}>{h.title}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: 0 }}>{h.body}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <a href={advisoryMail} className="srv-btn srv-btn-primary">Discuss an engagement</a>
          <a href={siteConfig.social.searvis} target="_blank" rel="noopener noreferrer" className="srv-btn">Visit searvis.io →</a>
        </div>
      </div>

      <style>{`
        .srv-btn {
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.85rem; font-weight: 600; padding: 0.6rem 1.4rem; border-radius: 999px;
          border: 1px solid var(--color-border-strong); color: var(--color-text);
          text-decoration: none; white-space: nowrap; font-family: var(--font-body);
          transition: border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .srv-btn:hover { border-color: var(--color-accent-border); color: var(--color-accent); }
        .srv-btn-primary { background: var(--color-accent); border-color: var(--color-accent); color: #fff; font-weight: 700; }
        .srv-btn-primary:hover { color: #fff; box-shadow: 0 4px 20px rgba(10,102,194,0.3); }
        @media (max-width: 760px) {
          .srv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
