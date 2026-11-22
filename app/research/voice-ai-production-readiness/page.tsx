import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../../src/config";

const TITLE = "Enterprise Voice AI Production-Readiness Checklist";
const DESCRIPTION =
  "What an enterprise Voice AI pilot should prove before it reaches customers: voice conditions, accuracy, tool actions, human handoff, privacy, observability, and cost per successful resolution.";

export const metadata: Metadata = {
  title: `${TITLE} | ${siteConfig.name}`,
  description: DESCRIPTION,
  alternates: { canonical: "/research/voice-ai-production-readiness" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteConfig.baseUrl}/research/voice-ai-production-readiness`,
    siteName: siteConfig.name,
    type: "article",
  },
};

type Section = {
  id: string;
  title: string;
  why: string;
  checks: string[];
  evidence: string;
};

const SECTIONS: Section[] = [
  {
    id: "voice-conditions",
    title: "Voice conditions and turn-taking",
    why: "A demo over a clean browser connection says little about a real caller on a mobile phone in a car. Conversation quality breaks first at the audio layer.",
    checks: [
      "Response latency is measured end to end on real phone connections (PSTN or SIP), not in a browser or a vendor sandbox.",
      "Time to first audio is reported as a distribution (median and worst cases), not a single average.",
      "Barge-in works: the agent stops speaking when the caller interrupts, and recovers the thread.",
      "Tested with background noise, speakerphone, poor mobile coverage, and degraded network conditions.",
      "Silence, hold, and “one moment, let me find that” are handled without the agent talking over the caller or hanging up.",
      "Keypad (DTMF) input works where callers expect it, such as account numbers and PINs.",
    ],
    evidence: "Recorded test calls across defined acoustic conditions, with per-stage latency for speech recognition, reasoning, and speech synthesis.",
  },
  {
    id: "accuracy",
    title: "Knowledge accuracy and hallucination",
    why: "An agent that is fluent but wrong is more dangerous than one that is obviously limited, because callers believe it.",
    checks: [
      "A test set of real customer questions with known correct answers, drawn from your own call history.",
      "Out-of-scope and adversarial questions: the agent declines or escalates rather than inventing an answer.",
      "Policy-sensitive answers (pricing, eligibility, refunds, legal or medical topics) are restricted to approved content.",
      "Answers can be traced to a source document or system record.",
      "The same test set is re-run after every prompt, model, or knowledge-base change.",
    ],
    evidence: "Scored results on your test set, including the failure cases, and the regression process used when anything changes.",
  },
  {
    id: "languages",
    title: "Languages, accents, and edge cases",
    why: "Coverage claims are usually about the language model. Production quality depends on speech recognition for your callers.",
    checks: [
      "Each supported language and major accent group is tested separately, not inferred from English results.",
      "Callers switching languages mid-call are handled or routed correctly.",
      "Names, addresses, email addresses, and alphanumeric strings are captured accurately, with read-back confirmation.",
      "Numbers, dates, and currency are spoken and understood correctly in each locale.",
    ],
    evidence: "Per-language accuracy on capture-heavy tasks (names, account numbers, addresses), not just general conversation.",
  },
  {
    id: "actions",
    title: "Tool actions and permissions",
    why: "Once an agent can change records, issue refunds, or book appointments, the risk moves from saying the wrong thing to doing the wrong thing.",
    checks: [
      "A written list of every system the agent can read from and write to, with least-privilege access.",
      "Irreversible or financial actions require explicit caller confirmation before they run.",
      "API timeouts and errors are handled: the agent tells the caller, retries safely, or escalates. It never claims success it did not get.",
      "Actions are idempotent where it matters: a retry cannot issue a second refund or a duplicate booking.",
      "Every action is written to an audit log with the call, the caller, the inputs, and the result.",
    ],
    evidence: "The permission map, the audit log from test calls, and a demonstration of a failed API call mid-conversation.",
  },
  {
    id: "outcomes",
    title: "Task completion and outcome verification",
    why: "“The call ended politely” and “the customer’s problem was solved” are different measurements. Many pilots only report the first.",
    checks: [
      "Completion is defined per use case before the pilot starts (for example: address updated in the CRM, appointment confirmed in the scheduling system).",
      "Completion is verified in the system of record, not inferred from the transcript.",
      "Factual accuracy and task completion are scored separately. A call can complete the task and still give wrong information.",
      "Repeat contacts within a defined window are tracked as a signal that the first resolution failed.",
    ],
    evidence: "A completion report reconciled against back-end records for a sample of pilot calls.",
  },
  {
    id: "handoff",
    title: "Human handoff",
    why: "Handoff is where customer trust is usually won or lost. A caller who has to repeat everything to a person counts as a failure.",
    checks: [
      "A caller can always reach a person, and the path is easy to find.",
      "Escalation triggers are defined: caller request, low confidence, repeated failure, negative sentiment, and regulated topics.",
      "Context passes to the human agent: a summary, authentication status, actions already taken, and the reason for escalation.",
      "Escalation accuracy is measured both ways: unnecessary escalations and missed ones.",
      "Handoff behavior is tested when queues are long or outside staffed hours.",
    ],
    evidence: "Test calls showing exactly what the human agent sees on their screen at handoff.",
  },
  {
    id: "privacy",
    title: "Identity, privacy, and compliance",
    why: "Voice adds disclosure, recording, and authentication obligations that chat pilots often skip.",
    checks: [
      "Callers are authenticated before any account-specific information is shared or any action is taken.",
      "Callers are told they are speaking with an AI, and recording consent follows the rules in each jurisdiction you serve.",
      "Sensitive data (card numbers, government IDs, health details) is redacted from transcripts, logs, and model inputs where required.",
      "Data retention, data residency, and the vendor’s use of your data for model training are agreed in writing.",
      "Your security and compliance teams have reviewed the full data flow, including any sub-processors.",
    ],
    evidence: "A data-flow diagram, a redaction sample, and the contract terms on retention and training use.",
  },
  {
    id: "observability",
    title: "Observability and operations",
    why: "After launch, someone has to explain why a specific call went wrong and fix it without breaking others.",
    checks: [
      "Each call has a trace: transcript, model decisions, tool calls, and latency at each stage.",
      "Alerts fire on latency spikes, error rates, escalation surges, and drops in completion.",
      "Prompt, model, and knowledge changes go through versioning, testing, and staged rollout, with a rollback path.",
      "There is a named owner for the agent in production, and an incident runbook.",
    ],
    evidence: "A walkthrough of how a single failed call would be investigated end to end.",
  },
  {
    id: "economics",
    title: "Economics",
    why: "A per-minute price can look cheap until escalations, repeat calls, and rework are counted.",
    checks: [
      "Cost is modeled per successful resolution, not per minute or per call.",
      "The model includes telephony, speech recognition, speech synthesis, model usage, platform fees, and integration maintenance.",
      "The cost of escalated calls, failed calls, and repeat contacts is included.",
      "Pricing is confirmed at your expected production volume and at peak load.",
    ],
    evidence: "A cost model built from pilot data, compared with the current cost of the same task with human agents.",
  },
];

const EXIT_CRITERIA = [
  "Success thresholds for each section above are written down and agreed before the pilot starts.",
  "The pilot runs on real customer traffic (or a realistic sample of it) and enough calls to see failure patterns, not only averages.",
  "Failure cases are reviewed in detail, not just counted.",
  "Rollout is phased by use case, caller segment, or time window, with a clear rule for pausing.",
];

export default function VoiceAiReadinessPage() {
  return (
    <main style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
      {/* Top bar */}
      <header style={{ borderBottom: "1px solid var(--color-border)", background: "#fff" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-text)" }}>
            {siteConfig.name}
          </Link>
          <Link href="/#research" className="rr-link" style={{ fontSize: "0.825rem", fontWeight: 500 }}>
            ← All research
          </Link>
        </div>
      </header>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
        {/* Title block */}
        <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: 600, margin: "0 0 14px" }}>
          Voice AI · Checklist
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4vw, 2.7rem)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 18px", letterSpacing: "-0.01em" }}>
          {TITLE}
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 18px" }}>
          A Voice AI demo can sound excellent and still tell you very little about how it will behave in production. The hard questions start when the conversation leaves the script: the caller interrupts, an API times out, the agent is confident but wrong, or the customer needs a person.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "0 0 36px" }}>
          {siteConfig.name} · Working draft · November 2026
        </p>

        {/* How to use */}
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "20px 22px", margin: "0 0 40px" }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)", margin: "0 0 8px" }}>
            How to use this
          </p>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0 }}>
            Use it to scope a pilot and to compare vendors on the same terms. Each section lists what to test and the evidence to ask for. It does not set numeric thresholds, because the right ones depend on your callers, use cases, and risk tolerance. Agree on them in writing before the pilot starts.
          </p>
        </div>

        {/* Contents */}
        <nav aria-label="Checklist sections" style={{ margin: "0 0 48px" }}>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "grid", gap: "6px" }}>
            {SECTIONS.map((s) => (
              <li key={s.id} style={{ fontSize: "0.92rem" }}>
                <a href={`#${s.id}`} className="rr-link">{s.title}</a>
              </li>
            ))}
            <li style={{ fontSize: "0.92rem" }}>
              <a href="#exit-criteria" className="rr-link">Pilot exit criteria</a>
            </li>
          </ol>
        </nav>

        {/* Sections */}
        {SECTIONS.map((s, i) => (
          <section key={s.id} id={s.id} style={{ borderTop: "1px solid var(--color-border)", padding: "36px 0", scrollMarginTop: "24px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-muted)", margin: "0 0 6px", letterSpacing: "0.08em" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 10px", lineHeight: 1.3 }}>{s.title}</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 18px" }}>{s.why}</p>
            <ul className="rr-checks">
              {s.checks.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--color-text-secondary)", margin: "18px 0 0", padding: "12px 16px", borderLeft: "3px solid var(--color-accent-border)", background: "var(--color-accent-dim)", borderRadius: "0 8px 8px 0" }}>
              <strong style={{ color: "var(--color-text)" }}>Evidence to ask for:</strong> {s.evidence}
            </p>
          </section>
        ))}

        {/* Exit criteria */}
        <section id="exit-criteria" style={{ borderTop: "1px solid var(--color-border)", padding: "36px 0", scrollMarginTop: "24px" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 10px" }}>Pilot exit criteria</h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 18px" }}>
            A pilot should make failure modes visible before customers find them. Before moving to production, confirm:
          </p>
          <ul className="rr-checks">
            {EXIT_CRITERIA.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>

        {/* Feedback */}
        <section style={{ borderTop: "1px solid var(--color-border)", paddingTop: "36px" }}>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 8px" }}>
            This is a working draft. If you run Voice AI in production and think something is missing or wrong, I would like to hear it.
          </p>
          <p style={{ fontSize: "0.95rem", margin: 0 }}>
            <a href={`mailto:${siteConfig.email}`} className="rr-link" style={{ fontWeight: 600 }}>{siteConfig.email}</a>
          </p>
        </section>
      </article>

      <style>{`
        .rr-link { color: var(--color-accent); text-decoration: none; }
        .rr-link:hover { text-decoration: underline; }
        .rr-checks { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
        .rr-checks li {
          position: relative; padding-left: 30px;
          font-size: 0.95rem; line-height: 1.65; color: var(--color-text);
        }
        .rr-checks li::before {
          content: ""; position: absolute; left: 0; top: 0.2em;
          width: 16px; height: 16px; border-radius: 4px;
          border: 1.5px solid var(--color-border-strong); background: #fff;
        }
      `}</style>
    </main>
  );
}
