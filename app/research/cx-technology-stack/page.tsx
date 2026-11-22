import { ArticleShell, articleMetadata } from "@/components/research/ArticleShell";

const TITLE = "Enterprise CX Technology Stack Explained";
const DESCRIPTION =
  "How network transport, CPaaS, CCaaS, AI agents, APIs and MCP, resolution workflows, and assurance tooling fit together in enterprise customer service — and where the layers are starting to blur.";

export const metadata = articleMetadata({ slug: "cx-technology-stack", title: TITLE, description: DESCRIPTION });

type Layer = { id: string; name: string; job: string; body: string[]; ask: string };

const LAYERS: Layer[] = [
  {
    id: "transport",
    name: "Network and voice transport",
    job: "Carries the call",
    body: [
      "The public phone network (PSTN), SIP trunks, carriers, and phone numbers. This layer sets the floor for audio quality and latency, decides which countries you can reach, and determines what happens when a carrier or region fails.",
      "It is easy to ignore until a Voice AI agent mishears a caller on a poor mobile connection. Everything above it inherits its limits.",
    ],
    ask: "Who owns carrier redundancy, number porting, and failover — and how is call quality measured on real connections?",
  },
  {
    id: "cpaas",
    name: "CPaaS: communications APIs",
    job: "Lets developers build communications",
    body: [
      "Communications Platform as a Service: programmable APIs for voice, messaging, verification, and numbers. Teams use CPaaS when they want to build their own customer journeys rather than configure a packaged contact center.",
      "The trade-off is flexibility versus ownership. CPaaS gives you building blocks; your team owns how they are assembled, monitored, and maintained.",
    ],
    ask: "Which parts of the journey are we building ourselves, and who maintains them after launch?",
  },
  {
    id: "ccaas",
    name: "CCaaS: the contact center platform",
    job: "Routes work to people and manages them",
    body: [
      "Contact Center as a Service: routing and queues, IVR, the agent desktop, recording, workforce management, quality management, and reporting. It is where human agents work and where most operational data about customer contact lives.",
      "For most enterprises this is the hardest layer to replace, which is why so many recent AI announcements are designed to work alongside an existing platform rather than require a migration.",
    ],
    ask: "Which AI capabilities must live inside the contact center platform, and which can sit beside it?",
  },
  {
    id: "ai",
    name: "AI conversation layer",
    job: "Understands and responds",
    body: [
      "Virtual agents that handle conversations end to end (speech recognition, a language model with orchestration logic, and speech synthesis), plus AI that assists human agents: suggested answers, knowledge retrieval, and post-contact summaries.",
      "This is the layer most demos showcase. It is also the layer where fluency can hide failure: an agent can sound confident while being wrong.",
    ],
    ask: "How is accuracy measured on our own customer questions, and what happens when the agent is unsure?",
  },
  {
    id: "integration",
    name: "Integration and action: APIs and MCP",
    job: "Connects the AI to systems that can do things",
    body: [
      "An AI agent that can only talk is limited. To resolve anything, it needs to read and write to business systems: CRM, billing, order management, claims, scheduling. Those systems expose APIs.",
      "The Model Context Protocol (MCP) is an open standard for connecting AI applications to external systems. An MCP server exposes tools, data, and prompts in a consistent way, and those tools can in turn call APIs. MCP standardizes how an AI application discovers and calls capabilities. It does not replace the APIs themselves, and it does not remove the need for authentication, authorization, and audit design.",
      "It helps to keep four things distinct: the API (a system's interface), MCP (a standard way for AI applications to reach such interfaces), orchestration (deciding which step runs next), and voice transport (carrying the audio).",
    ],
    ask: "What can the agent read and change, under whose identity, and where is every action logged?",
  },
  {
    id: "resolution",
    name: "Resolution and workflow",
    job: "Completes multi-step work",
    body: [
      "A newer layer: AI-driven workflows that complete back-office work after or beyond the conversation, such as refunds, disputes, fraud reviews, and claims. These combine model-led steps with deterministic rules, human approvals, and exception handling.",
      "Amazon Connect Resolutions, which AWS announced as generally available on November 19, 2026, is one example. AWS describes managers supplying standard operating procedures that generate work plans, with AI and deterministic steps processing cases alongside human approvals and action logs.",
    ],
    ask: "Which system becomes the record of what was decided and done — and can we extract that evidence?",
  },
  {
    id: "assurance",
    name: "Assurance and observability",
    job: "Proves it works, before and after launch",
    body: [
      "Testing before launch and monitoring after it. Two announcements from the same week show the two halves. Cresta introduced Soundcheck (November 19, 2026), which simulates real call conditions such as accents, interruptions, background noise, and network degradation. Twilio launched Task Completion and Hallucination Detection operators in public beta (November 17, 2026), which label outcomes and flag unsupported claims after a conversation ends.",
      "They are complementary, not competing. Simulation exposes failure modes before customers meet them; post-conversation scoring catches issues afterward. Both can miss silent failures, and Twilio itself cautions that AI judges can be wrong, so their scores need calibrating against human review.",
    ],
    ask: "How do we test before launch, how do we score after it, and how do we know the scorer is accurate?",
  },
];

const BLURS = [
  {
    title: "The AI layer is becoming portable",
    body: "Microsoft announced general availability of Contact Center Intelligence on November 18, 2026, with connector partnerships with Avaya, Cisco, and Five9, positioning it as an AI layer for contact centers that do not immediately migrate. A day earlier, Genesys announced generally available Standalone AI Agents for customers that want its virtual agents without moving their whole contact center.",
    question: "If the AI layer becomes portable, what differentiation remains in the underlying contact center platform?",
  },
  {
    title: "Conversation and screen are merging",
    body: "On November 20, 2026, AWS published guidance on Amazon Connect Modalities (structured visual components such as option cards) and Live Sync (commands passed between an AI agent and an existing web or mobile interface). The agent is no longer confined to the conversation panel; it can act in the surrounding application.",
    question: "If the AI fills in the customer’s form, who is accountable for the final action — and what proof of consent is recorded?",
  },
  {
    title: "Pricing is shifting from seats to work",
    body: "Genesys also introduced Experience Units, pricing based on whether work is simple, moderate, or complex. As AI does more of the work, pricing follows the work rather than the number of human agents.",
    question: "Does effort-based pricing align cost with value, or make the vendor the arbiter of what counts as complex?",
  },
];

const SOURCES = [
  { label: "AWS — Amazon Connect Resolutions general availability (Nov 19, 2026)", href: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-connect-resolutions/" },
  { label: "AWS — Modalities and Live Sync in Amazon Connect (Nov 20, 2026)", href: "https://aws.amazon.com/blogs/contact-center/modalities-and-live-sync-give-agents-the-screen-in-amazon-connect-customer/" },
  { label: "Microsoft — Contact Center Intelligence generally available (Nov 18, 2026)", href: "https://www.microsoft.com/en-us/dynamics-365/blog/it-professional/2026/11/18/microsoft-contact-center-intelligence-now-generally-available-transform-customer-interactions/" },
  { label: "Genesys — Standalone AI Agents and Genesys Arena (Nov 17, 2026)", href: "https://www.genesys.com/company/newsroom/announcements/genesys-launches-standalone-ai-agents-and-genesys-arena-for-faster-agentic-ai-deployment" },
  { label: "Cresta — Soundcheck (Nov 19, 2026)", href: "https://cresta.com/blog/test-and-evaluate-voice-ai-agents-under-real-call-conditions-with-soundcheck" },
  { label: "Twilio — Conversation Intelligence operators, public beta (Nov 17, 2026)", href: "https://www.twilio.com/en-us/blog/products/launches/conversation-intelligence-operators-ai-agent-supervision" },
  { label: "Model Context Protocol — introduction", href: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro" },
  { label: "Model Context Protocol — server concepts", href: "https://modelcontextprotocol.io/docs/2026-07-28/learn/server-concepts" },
];

export default function CxStackPage() {
  return (
    <ArticleShell
      eyebrow="CCaaS · CPaaS · MCP · Explainer"
      title={TITLE}
      lead="Enterprise CX technology is usually described by vendor category: CCaaS, CPaaS, conversational AI. It is more useful to describe it by job — what carries the call, what routes it, what understands it, what acts on it, and what proves it worked. This explainer maps those layers, then looks at where recent announcements are blurring them."
    >
      <div className="rr-box">
        <p className="rr-box-label">The short version</p>
        <ul className="rr-bullets" style={{ margin: 0 }}>
          <li>Seven layers, from phone network to assurance. Each one has a different owner and a different way to fail.</li>
          <li>AI value comes less from the conversation layer than from the layers beneath and beside it: integration, resolution, and assurance.</li>
          <li>The boundaries are moving. AI layers are being sold independently of the contact center platform, and agents are starting to act inside applications, not just talk.</li>
        </ul>
      </div>

      {/* Layer map */}
      <section className="rr-section" aria-labelledby="map">
        <h2 id="map" className="rr-h2">The stack at a glance</h2>
        <div className="rr-table-wrap">
          <table className="rr-table">
            <thead><tr><th>Layer</th><th>Its job</th><th>Question to ask</th></tr></thead>
            <tbody>
              {LAYERS.map((l) => (
                <tr key={l.id}><td><a href={`#${l.id}`} className="rr-link">{l.name}</a></td><td>{l.job}</td><td>{l.ask}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {LAYERS.map((l, i) => (
        <section key={l.id} id={l.id} className="rr-section">
          <p className="rr-num">LAYER {i + 1}</p>
          <h2 className="rr-h2">{l.name}</h2>
          {l.body.map((p) => <p key={p.slice(0, 32)} className="rr-p">{p}</p>)}
          <p className="rr-callout"><strong>Ask:</strong> {l.ask}</p>
        </section>
      ))}

      <section id="blurring" className="rr-section">
        <h2 className="rr-h2">Where the layers are blurring</h2>
        <p className="rr-p">
          Four days of announcements, November 17–20, 2026, show three shifts at once. These are announced capabilities, not proven results: vendor launches are evidence of what is available, not of how it performs in your environment.
        </p>
        {BLURS.map((b) => (
          <div key={b.title}>
            <h3 className="rr-h3">{b.title}</h3>
            <p className="rr-p">{b.body}</p>
            <p className="rr-callout" style={{ margin: "0 0 8px" }}><strong>Open question:</strong> {b.question}</p>
          </div>
        ))}
      </section>

      <section id="buyers" className="rr-section">
        <h2 className="rr-h2">What this means for buyers</h2>
        <ul className="rr-bullets">
          <li><strong>Decide who owns orchestration.</strong> When AI can sit beside the contact center, someone still has to own governance, telemetry, and change management across both.</li>
          <li><strong>Test integration in real workflows.</strong> Check transfers, CRM writes, and incident handling end to end, not just in a demo environment.</li>
          <li><strong>Make audit evidence portable.</strong> Before accepting a “no migration needed” claim, confirm you can extract a complete record of what the AI decided and did.</li>
          <li><strong>Price the outcome, not the minute.</strong> Model cost per verified resolution, including retries, escalations, and repeat contacts.</li>
        </ul>
      </section>

      <section id="sources" className="rr-section">
        <h2 className="rr-h2">Sources</h2>
        <p className="rr-p">Primary vendor sources, checked against their publication dates. Vendor statements describe announced capabilities and are not independent proof of results.</p>
        <ol className="rr-sources">
          {SOURCES.map((s) => (
            <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="rr-link">{s.label}</a></li>
          ))}
        </ol>
      </section>
    </ArticleShell>
  );
}
