import { ArticleShell, articleMetadata } from "@/components/research/ArticleShell";

const TITLE = "Enterprise Voice AI Production-Readiness Checklist";
const DESCRIPTION =
  "What an enterprise Voice AI pilot should prove before it reaches customers: voice conditions, accuracy, tool actions, human handoff, privacy, observability, and cost per successful resolution.";

export const metadata = articleMetadata({ slug: "voice-ai-production-readiness", title: TITLE, description: DESCRIPTION });

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
    <ArticleShell
      eyebrow="Voice AI · Checklist"
      title={TITLE}
      lead="A Voice AI demo can sound excellent and still tell you very little about how it will behave in production. The hard questions start when the conversation leaves the script: the caller interrupts, an API times out, the agent is confident but wrong, or the customer needs a person."
    >
      <div className="rr-box">
        <p className="rr-box-label">How to use this</p>
        <p className="rr-p" style={{ margin: 0 }}>
          Use it to scope a pilot and to compare vendors on the same terms. Each section lists what to test and the evidence to ask for. It does not set numeric thresholds, because the right ones depend on your callers, use cases, and risk tolerance. Agree on them in writing before the pilot starts.
        </p>
      </div>

      <nav aria-label="Checklist sections">
        <ol className="rr-toc">
          {SECTIONS.map((s) => (
            <li key={s.id}><a href={`#${s.id}`} className="rr-link">{s.title}</a></li>
          ))}
          <li><a href="#exit-criteria" className="rr-link">Pilot exit criteria</a></li>
        </ol>
      </nav>

      {SECTIONS.map((s, i) => (
        <section key={s.id} id={s.id} className="rr-section">
          <p className="rr-num">{String(i + 1).padStart(2, "0")}</p>
          <h2 className="rr-h2">{s.title}</h2>
          <p className="rr-p" style={{ marginBottom: "18px" }}>{s.why}</p>
          <ul className="rr-checks">
            {s.checks.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="rr-callout"><strong>Evidence to ask for:</strong> {s.evidence}</p>
        </section>
      ))}

      <section id="exit-criteria" className="rr-section">
        <h2 className="rr-h2">Pilot exit criteria</h2>
        <p className="rr-p" style={{ marginBottom: "18px" }}>
          A pilot should make failure modes visible before customers find them. Before moving to production, confirm:
        </p>
        <ul className="rr-checks">
          {EXIT_CRITERIA.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>
    </ArticleShell>
  );
}
