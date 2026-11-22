import { SectionHeader } from "./SectionHeader";

const PIPELINE = [
  { name: "Inbound call", sub: "Telnyx SIP" },
  { name: "Speech-to-text", sub: "Deepgram ASR" },
  { name: "LLM reasoning", sub: "Orchestration" },
  { name: "Text-to-speech", sub: "ElevenLabs TTS" },
  { name: "Voice output", sub: "Telnyx PSTN" },
];

const FRAMEWORK_TOPICS = [
  { topic: "Latency budgets in real-time Voice AI", detail: "ASR, LLM, and TTS latency thresholds for production deployments" },
  { topic: "Failover and reliability architecture", detail: "Carrier redundancy, fallback routing, and SIP trunk design" },
  { topic: "AI evaluation for contact centers", detail: "LLM validation, regression testing, and QA automation frameworks" },
];

const GROUPS = [
  { group: "Voice AI", items: ["Speech recognition", "TTS", "AI agents", "Latency", "Audio quality"] },
  { group: "Communications infrastructure", items: ["SIP", "PSTN", "CPaaS APIs", "Routing", "Failover", "Carrier economics"] },
  { group: "Contact center", items: ["Genesys Cloud", "Amazon Connect", "Twilio Flex", "IVR", "QA", "Monitoring"] },
  { group: "Enterprise stakeholders", items: ["Engineering", "Product", "IT", "CX", "Contact Center", "Operations", "C-suite"] },
];

export function AreasOfFocus() {
  return (
    <section id="focus" style={{ padding: "80px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader
          eyebrow="Areas of Focus"
          title="How Voice AI systems are built, deployed, and fail"
          subtitle="Hands-on projects and working frameworks behind the research — built to understand production constraints from the inside."
        />

        <div className="aof-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {/* Razor Voice */}
          <div className="aof-card">
            <div className="aof-card-hd">
              <div>
                <h3 className="aof-title">Razor Voice</h3>
                <p className="aof-sub">Deepgram · Telnyx · ElevenLabs</p>
              </div>
              <a href="https://github.com/ABashir88/razor-voice-service" target="_blank" rel="noopener noreferrer" className="aof-btn">View project</a>
            </div>
            <p className="aof-body">
              Experimental real-time Voice AI pipeline exploring speech recognition, telephony orchestration, and text-to-speech. Built to understand latency constraints, failover behavior, and production reliability requirements from the inside.
            </p>
            <div className="aof-inset">
              <p className="aof-inset-label">Pipeline architecture</p>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", rowGap: "8px" }}>
                {PIPELINE.map((node, i) => (
                  <div key={node.name} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ textAlign: "center", padding: "8px 10px", background: "var(--color-surface-card)", border: "1px solid var(--color-border)", borderRadius: "6px" }}>
                      <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text)" }}>{node.name}</div>
                      <div style={{ fontSize: "10px", color: "var(--color-text-muted)", marginTop: "2px" }}>{node.sub}</div>
                    </div>
                    {i < PIPELINE.length - 1 && <span style={{ fontSize: "14px", color: "var(--color-border-strong)", padding: "0 4px" }}>→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Voice AI Architectures */}
          <div className="aof-card">
            <div className="aof-card-hd">
              <div>
                <h3 className="aof-title">Enterprise Voice AI Architectures</h3>
                <p className="aof-sub">Research and frameworks</p>
              </div>
              <a href="https://github.com/ABashir88/enterprise-voice-ai-architectures" target="_blank" rel="noopener noreferrer" className="aof-btn">View work</a>
            </div>
            <p className="aof-body">
              Practical frameworks covering latency budgets, failure modes, production reliability, and AI evaluation for enterprise contact center deployments.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {FRAMEWORK_TOPICS.map((item) => (
                <div key={item.topic} className="aof-inset" style={{ padding: "10px 14px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text)", margin: "0 0 2px" }}>{item.topic}</p>
                  <p style={{ fontSize: "12px", color: "var(--color-text-muted)", margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Topic groups */}
        <div className="aof-groups" style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {GROUPS.map((g) => (
            <div key={g.group} className="aof-card" style={{ padding: "16px 18px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-text)", margin: "0 0 8px" }}>{g.group}</p>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, margin: 0 }}>{g.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .aof-card { background: var(--color-surface-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; font-family: var(--font-body); }
        .aof-card-hd { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .aof-title { font-size: 1.05rem; font-weight: 700; color: var(--color-text); margin: 0 0 4px; }
        .aof-sub { font-size: 12px; font-weight: 600; color: var(--color-accent); margin: 0; }
        .aof-btn { font-size: 12px; font-weight: 600; color: var(--color-accent); border: 1px solid var(--color-accent-border); padding: 5px 12px; border-radius: 6px; white-space: nowrap; text-decoration: none; transition: background 0.15s ease; }
        .aof-btn:hover { background: var(--color-accent-dim); }
        .aof-body { font-size: 0.875rem; line-height: 1.7; color: var(--color-text-secondary); margin: 0 0 16px; }
        .aof-inset { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; }
        .aof-inset-label { font-size: 10px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: var(--color-text-muted); margin: 0 0 12px; }
        @media (max-width: 760px) {
          .aof-grid { grid-template-columns: 1fr !important; }
          .aof-groups { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .aof-groups { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
