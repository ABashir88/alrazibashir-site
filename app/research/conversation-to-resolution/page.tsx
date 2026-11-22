import { ArticleShell, articleMetadata } from "@/components/research/ArticleShell";

const TITLE = "The Conversation-to-Resolution Framework";
const DESCRIPTION =
  "A six-stage framework for evaluating AI in customer service by what it resolves, not how well it talks: understand, authorize, act, verify, hand off, and close the loop.";

export const metadata = articleMetadata({ slug: "conversation-to-resolution", title: TITLE, description: DESCRIPTION });

type Stage = {
  id: string;
  name: string;
  mustBeTrue: string;
  context?: string;
  failure: string;
  measure: string[];
};

const STAGES: Stage[] = [
  {
    id: "understand",
    name: "Understand",
    mustBeTrue: "The system captures what the customer needs, and the details that matter (policy numbers, amounts, dates), under real call conditions.",
    context: "Cresta’s Soundcheck, introduced November 19, 2026, is built around this problem: simulating accents, interruptions, background noise, and degraded phone lines, and evaluating behaviors such as barge-in and time to first audio alongside the content of replies.",
    failure: "A policy-compliant assistant mishears a policy number over a noisy cellular connection, and every later step works on the wrong record.",
    measure: [
      "Capture accuracy for critical fields under defined acoustic conditions",
      "Read-back confirmation rate for high-risk details",
      "Intent accuracy on a test set drawn from your own contacts",
    ],
  },
  {
    id: "authorize",
    name: "Authorize",
    mustBeTrue: "The customer is who they claim to be, the AI is permitted to take this action, and (increasingly) any AI agent acting for the customer is legitimate.",
    context: "On November 19, 2026, ThreatFabric announced Know Your Agent capabilities for banks, aimed at distinguishing legitimate personal AI assistants from malicious or compromised ones during banking sessions. Its detection accuracy is not independently verified, but the problem it names is real: authorization now has to consider whose agent is acting, not just which credentials are used.",
    failure: "An action runs without adequate authentication. Or, in the other direction, legitimate delegated or accessibility use is blocked as fraud.",
    measure: [
      "Authentication completed before any account-specific action",
      "Unauthorized action attempts blocked",
      "False-positive blocks of legitimate customers and agents",
    ],
  },
  {
    id: "act",
    name: "Act",
    mustBeTrue: "The change actually happens in the system of record, within policy, with human approval where the stakes require it.",
    context: "Amazon Connect Resolutions, generally available November 19, 2026, is designed for this stage. AWS describes standard operating procedures generating work plans, with AI and deterministic steps processing refunds, disputes, fraud reviews, and claims alongside human approvals, exception handling, and action logs. Real-world outcomes remain vendor claims for now.",
    failure: "The agent tells the customer the refund is done, but the API call failed. Or a retry issues the refund twice.",
    measure: [
      "Action success rate, verified in the back-end system",
      "Exception and manual-approval rates, and how long approvals take",
      "Duplicate or reversed actions",
    ],
  },
  {
    id: "verify",
    name: "Verify",
    mustBeTrue: "Someone, or something, checks both that the task was completed and that what the customer was told was correct. These are two separate checks.",
    context: "Twilio’s Task Completion and Hallucination Detection operators (public beta, November 17, 2026) run after a conversation to label outcomes and flag claims that conflict with enterprise knowledge. Twilio itself cautions that AI judges can be wrong, which is why their scores need calibrating against human reviewers.",
    failure: "A banking assistant completes the dispute correctly but explains the wrong timeframe. On outcome metrics alone, this call counts as a success.",
    measure: [
      "Verified completion rate, reconciled to back-end records",
      "Factual error rate, scored separately from completion",
      "Agreement between AI graders and human reviewers on a sampled set",
    ],
  },
  {
    id: "handoff",
    name: "Hand off and record",
    mustBeTrue: "When a person takes over or follows up, the record preserves decisions, obligations, and next steps accurately, without exposing sensitive data.",
    context: "On November 19, 2026, AWS extended AI-generated post-contact summaries to chat in Amazon Connect, alongside the summaries it already offered for voice and email. The relevant measure is whether a summary is faithful to the underlying transcript, not whether it exists.",
    failure: "A summary drops the commitment the agent made, so the next person contradicts it and the customer calls back.",
    measure: [
      "Summary accuracy against the transcript for decisions and commitments",
      "Context carried at handoff: authentication status, actions taken, reason for escalation",
      "Sensitive data correctly redacted in summaries and logs",
    ],
  },
  {
    id: "close",
    name: "Close the loop",
    mustBeTrue: "The customer does not need to come back about the same issue.",
    failure: "Containment looks high because the call ended, but the customer calls again two days later through a different channel.",
    measure: [
      "Repeat contact within a defined window, across channels",
      "Case reopen rate",
      "Complaints and escalations linked to AI-handled contacts",
    ],
  },
];

const SOURCES = [
  { label: "Cresta: Soundcheck (Nov 19, 2026)", href: "https://cresta.com/blog/test-and-evaluate-voice-ai-agents-under-real-call-conditions-with-soundcheck" },
  { label: "ThreatFabric: Agentic AI Risk and Know Your Agent (Nov 19, 2026)", href: "https://www.threatfabric.com/press-releases/agentic-ai-risk" },
  { label: "AWS: Amazon Connect Resolutions general availability (Nov 19, 2026)", href: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-connect-resolutions/" },
  { label: "Twilio: Conversation Intelligence operators, public beta (Nov 17, 2026)", href: "https://www.twilio.com/en-us/blog/products/launches/conversation-intelligence-operators-ai-agent-supervision" },
  { label: "AWS: AI post-contact summaries for chat in Amazon Connect (Nov 19, 2026)", href: "https://aws.amazon.com/about-aws/whats-new/2026/11/connect-ai-chat-summaries-ccp/" },
];

export default function ConversationToResolutionPage() {
  return (
    <ArticleShell
      eyebrow="CX Assurance · Framework"
      title={TITLE}
      lead="Most metrics for AI in customer service measure the conversation: containment, handle time, sentiment. Customers care whether their problem was solved. This framework traces the path from a conversation to a completed, accountable outcome, and names what has to be true, and measured, at each step."
      status="Proposed framework · Working draft"
    >
      <section className="rr-section" style={{ borderTop: "none", paddingTop: 0 }}>
        <h2 className="rr-h2">Why fluency is no longer the differentiator</h2>
        <p className="rr-p">
          Language models made fluent conversation cheap. Most serious platforms now sound good in a demo. What separates them in production is what happens around the conversation: whether the right action was taken, under the right authority, and whether anyone can prove it.
        </p>
        <p className="rr-p">
          The vendor announcements of November 17–20, 2026 point the same way. In four days, the notable launches were about resolution and assurance: agentic back-office workflows, post-conversation task-completion scoring, and real-call-condition testing. None were about making agents more conversational.
        </p>
        <p className="rr-quote">How does an enterprise turn a customer conversation into a completed, accountable outcome?</p>
      </section>

      {/* Stage flow */}
      <section className="rr-section" aria-labelledby="stages">
        <h2 id="stages" className="rr-h2">Six stages</h2>
        <p className="rr-p">A conversation becomes a resolution only if every stage holds. A failure at any one of them can look like success in conversation-level metrics.</p>
        <ol className="c2r-flow">
          {STAGES.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="c2r-step">
                <span className="c2r-n">{i + 1}</span>
                <span className="c2r-name">{s.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {STAGES.map((s, i) => (
        <section key={s.id} id={s.id} className="rr-section">
          <p className="rr-num">STAGE {i + 1}</p>
          <h2 className="rr-h2">{s.name}</h2>
          <p className="rr-p"><strong>What has to be true:</strong> {s.mustBeTrue}</p>
          {s.context && <p className="rr-p">{s.context}</p>}
          <p className="rr-p"><strong>How it fails:</strong> {s.failure}</p>
          {s.id === "handoff" && (
            <p className="rr-quote">Will better wrap-up summaries reduce repeat contacts, or merely make inaccurate notes faster to generate?</p>
          )}
          <p className="rr-box-label" style={{ marginTop: "18px" }}>What to measure</p>
          <ul className="rr-checks">
            {s.measure.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </section>
      ))}

      <section id="ownership" className="rr-section">
        <h2 className="rr-h2">Who owns the outcome?</h2>
        <p className="rr-p">
          As vendors move from handling conversations to completing work, a new question appears: which system holds the record of what was decided and done? A contact center vendor that owns the full resolution workflow can make that workflow simpler. It can also become a new system of record that sits outside your existing controls.
        </p>
        <p className="rr-p">Before a pilot, write down for each stage:</p>
        <ul className="rr-bullets">
          <li><strong>Owner:</strong> the team accountable when the stage fails.</li>
          <li><strong>Evidence:</strong> where proof that the stage held is stored, and whether you can export it.</li>
          <li><strong>Threshold:</strong> the measured level at which you would pause rollout.</li>
        </ul>
      </section>

      <section id="limits" className="rr-section">
        <h2 className="rr-h2">Limits of this framework</h2>
        <p className="rr-p">
          This is a proposed framework, not a validated model. The stages are drawn from how enterprise customer operations work and from the direction of recent product launches; the vendor capabilities cited are announced features, and their production performance has not been independently verified. Testing it against real deployments, including where it does not fit, is the next step.
        </p>
      </section>

      <section id="sources" className="rr-section">
        <h2 className="rr-h2">Sources</h2>
        <ol className="rr-sources">
          {SOURCES.map((s) => (
            <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="rr-link">{s.label}</a></li>
          ))}
        </ol>
      </section>

      <style>{`
        .c2r-flow { list-style: none; margin: 18px 0 0; padding: 0; display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; counter-reset: none; }
        .c2r-flow li { position: relative; }
        .c2r-flow li:not(:last-child)::after {
          content: "→"; position: absolute; right: -9px; top: 50%; transform: translateY(-50%);
          color: var(--color-border-strong); font-size: 12px; z-index: 1;
        }
        .c2r-step {
          display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center;
          padding: 14px 6px; border: 1px solid var(--color-border); border-radius: 10px;
          background: var(--color-surface-card); text-decoration: none; height: 100%;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .c2r-step:hover { border-color: var(--color-accent-border); background: var(--color-accent-dim); }
        .c2r-n {
          width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
          background: var(--color-accent); color: #fff; font-size: 12px; font-weight: 700;
        }
        .c2r-name { font-size: 0.8rem; font-weight: 600; color: var(--color-text); line-height: 1.3; }
        @media (max-width: 640px) {
          .c2r-flow { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .c2r-flow li::after { display: none; }
        }
      `}</style>
    </ArticleShell>
  );
}
