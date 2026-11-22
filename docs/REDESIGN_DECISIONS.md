# alrazibashir.com — Redesign Decision Record

**Owner:** Alrazi Bashir · **First established:** November 21, 2026  
**Purpose:** The human-approved *why* behind the personal brand website. This is **not** an automatically inferred decision register.

> **Governance:** Only explicitly approved decisions belong here. Automatic commits belong in [SITE_CHANGELOG.md](./SITE_CHANGELOG.md). Agents may propose amendments in a pull request or draft, but must not change decisions or the public site without Alrazi's approval. Public repository: never add private client details, outreach records, confidential commercial information, or expert-network material.

## Brand goals and audience

- **Homepage** (https://alrazibashir.com): a research-led personal brand for enterprise CX, Voice AI, CCaaS, CPaaS, communications APIs, MCP, agent evaluation, and customer operations; professional experience supports the analysis.
- **Hiring** (/hiring): a separate recruiting entry point retaining career, deal record, sales process, resume and Deal Command Center.
- **Research** (/research): public, linkable, mobile-friendly source-backed explanations and useful frameworks.
- **Searvis** (https://searvis.io): separately labeled customer-operations research and scoped advisory. Research participation must not become an undisclosed sales pitch.
- **Contact:** distinct research collaboration, advisory and hiring pathways. LinkedIn outreach and publishing remain human-approved.

## Approved redesign decisions — November 21, 2026

| Decision | Why it was made | Implemented design |
| --- | --- | --- |
| Replace hiring-first hero with research positioning | Establish credibility with practitioners and CX leaders before recruiters' sales metrics | “Making sense of enterprise CX, Voice AI, and intelligent automation.” Research, experience and LinkedIn CTAs |
| Separate two audiences, not two websites | A unified AE portfolio served neither audience well | Main homepage for practitioners and dedicated /hiring for recruiting |
| Lead with original research | Useful evaluation resources provide proof of thinking and reasons to connect | CX Intelligence Library and three initial articles |
| Keep full sales proof in /hiring | Protect recruiting utility without dominating public thought leadership | Career timeline, deal record, sales process and downloadable resume |
| Order homepage as a research conversation | Show a perspective, evidence, background and a relevant next step | Hero → Research → Areas of Focus → Experience → Searvis → Contact |
| Publish research as Next.js pages, not PDFs | Search discoverability, easy links, mobile reading and continuous revision | /research plus separate permanent URLs |
| Use shared research article layout | Consistent reading experience and easier publication | Title, byline, working-draft status, sources and feedback invitation |
| Publish hypotheses as hypotheses | Unsupported claims damage long-term credibility | Dated vendor citations, clear limitations and requests for corrections |
| Keep daily intelligence internal by default | Research inputs are not automatically editorially approved | Public articles only after review |
| Preserve lightweight infrastructure | Avoid recurring cost and fragile added services | Next.js, GitHub, Vercel; no extra database or subscriber system required |
| Make configuration and code traceable | Future changes need a clear source of truth | GitHub main is the code record; Vercel builds production |
| Require a controlled publishing process | Public changes need human approval and tests | Branch → build/link checks → review → explicit approval → merge |
| Keep /hiring claims and employment selection user-controlled | User explicitly chose the scope of the brand update | No unsolicited changes to deal claims or addition of Kognitos |
| Remove redundant or obsolete sections | Avoid confusing overlapping content | Sales-focused homepage sections removed; recruiting material retained |

## Current research routes

- [/research](https://alrazibashir.com/research)
- [/research/voice-ai-production-readiness](https://alrazibashir.com/research/voice-ai-production-readiness)
- [/research/cx-technology-stack](https://alrazibashir.com/research/cx-technology-stack)
- [/research/conversation-to-resolution](https://alrazibashir.com/research/conversation-to-resolution)

## Approved SEO and editorial follow-up — November 21, 2026

Subsequently authorized changes included: sitemap/robots metadata routes, route-specific canonical metadata for /hiring, Open Graph and Twitter preview support, conservative identity/article structured data, and clearly labeled research review dates. An editorial review qualified sweeping statements, distinguished vendor announcements from independent outcomes, and added a checklist bibliography. These are code commits, not evidence of live performance improvements. The canonical hostname remains https://alrazibashir.com pending an independent hosting configuration check.

## Editorial and technical guardrails

1. Cite primary sources for dated product and standards claims; preserve dates, GA/beta/preview distinctions and clearly distinguish vendor assertions from field evidence.
2. Clearly mark evaluation guidance as proposed, not a legally mandated or independently validated universal standard.
3. Maintain a concise, relaxed, specific voice without invented personal experience or case-study outcomes.
4. Do not alter the user's intentionally excluded career history or user-approved hiring claims unless asked.
5. Keep research and advisory routes clearly distinct, including consent and confidentiality boundaries.
6. In agent briefs, distinguish **planned**, **committed**, **deployed**, and **verified in production** status.

## Updating this record (human approval)

When a new brand/site decision is made, propose a concise pull request adding:

- **Date and decision:** what Alrazi explicitly approved.
- **Why:** audience/problem/tradeoff.
- **Scope:** pages/components affected.
- **Evidence:** link to reviewed work or tests if applicable.
- **Status:** approved, implemented, deployed, verified.
- **Supersedes:** any old decision it changes.

Never infer *why* from a git commit. Use [SITE_CHANGELOG.md](./SITE_CHANGELOG.md) for automatic technical activity.

**Source:** “alrazibashir.com Redesign: What Changed and Why,” supplied by Alrazi, November 21, 2026. The original narrative is a historical account; this file is its concise operating decision record.
