# alrazibashir.com: Decision Record

**Owner:** Alrazi Bashir · **Last updated:** November 21, 2026

The approved *why* behind the website, shared so every agent works from the same context. Only decisions Alrazi has explicitly approved belong here. This is a public repository: never add private client details, prospect or outreach records, confidential commercial information, or expert-network material.

## How we work

| Role | Who | Does |
| --- | --- | --- |
| Owner | Alrazi | Approves every public change and every decision in this file |
| Site code | Claude Code (only) | Changes the code, builds and checks before publishing, publishes only after Alrazi says so |
| Brand and content | ChatGPT Personal Brand Manager and agents | Strategy, research, draft copy and recommendations, passed to Alrazi; no commits, pull requests or pushes to this repository |

- **One code owner.** Only Claude Code changes this repository. Other agents send proposals to Alrazi, who passes approved ones to Claude Code.
- **Check before publishing.** Every change is built (`npm run build`) and linted (`npm run lint`), and its pages are loaded, before it is published.
- **A commit is not a deployment.** A change is live only when Vercel shows the deployment as Ready and the live page shows it.
- **History** is the commit log: https://github.com/ABashir88/alrazibashir-site/commits/main

## Audiences and pages

- **Homepage** (https://alrazibashir.com): research-led personal brand for enterprise CX, Voice AI, CCaaS, CPaaS, communications APIs, MCP, agent evaluation and customer operations. Experience supports the analysis.
- **Hiring** (/hiring): separate recruiting page with career history, deal record, sales process, resume and the Deal Command Center.
- **Research** (/research): public, linkable, source-backed explainers and frameworks.
- **Searvis** (https://searvis.io): separately labeled customer-operations research and scoped advisory.
- **Contact:** distinct paths for research collaboration, advisory and hiring.

## Approved decisions

| Decision | Why | What it looks like |
| --- | --- | --- |
| Research positioning in the hero | Credibility with practitioners and CX leaders before sales metrics | "Making sense of enterprise CX, Voice AI, and intelligent automation." CTAs: Explore research, About my experience, LinkedIn |
| Two audiences, one site | A single AE portfolio served neither audience well | Homepage for practitioners; /hiring for recruiters |
| Lead with original research | Useful resources prove thinking and give people a reason to connect | CX Intelligence Library with three pieces |
| Full sales proof stays on /hiring | Keeps recruiting complete without dominating the homepage | Career timeline, deal record, sales process, resume |
| Homepage order | Perspective, evidence, background, then a next step | Hero, Research, Areas of Focus, Experience, Searvis, Contact |
| Research as web pages, not PDFs | Search, links, mobile reading, easy revision | /research plus one permanent URL per piece |
| Hypotheses labeled as hypotheses | Unsupported claims damage credibility | Dated vendor citations, "announced" not "proven", working-draft labels, invitation to correct |
| Daily intelligence stays internal | Research inputs are not approved for publication | Public articles only after review |
| Lightweight infrastructure | No recurring cost or fragile services | Next.js, GitHub, Vercel; no database, no extra services |
| Career content is user-controlled | Alrazi chose what to show | No changes to career history or /hiring deal claims unless Alrazi asks |
| No real deal or customer data | Confidentiality | Downloadable Deal Command Center uses fictional sample data only |
| No em dashes in site copy | Style choice | Use commas, colons, periods or pipes instead |

## Research pages

- https://alrazibashir.com/research
- https://alrazibashir.com/research/voice-ai-production-readiness
- https://alrazibashir.com/research/cx-technology-stack
- https://alrazibashir.com/research/conversation-to-resolution

## Editorial guardrails

1. Cite primary sources for dated product and standards claims. Keep GA, beta and preview distinctions, and separate vendor statements from field evidence.
2. Mark evaluation guidance as proposed, not as a mandated or independently validated standard.
3. Keep the voice concise and specific. No invented personal experience or case-study outcomes.
4. Keep research and advisory clearly distinct, including consent and confidentiality boundaries.
5. In status updates, separate **planned**, **committed**, **deployed** and **verified live**.

## Proposing a change

Send Alrazi a short note with: the change, why, which page or section, any sources, and what would show it worked. Once Alrazi approves, Claude Code implements, checks and publishes it, then updates this file if a decision changed.
