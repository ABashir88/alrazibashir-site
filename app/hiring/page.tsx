"use client";

import Link from "next/link";
import { siteConfig } from "@/config";

export default function HiringPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#111827",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Top nav strip */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(255,255,255,0.97)",
          borderBottom: "1px solid #e5e7eb",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#111827",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Alrazi Bashir
          </Link>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {[
              { label: "Enterprise Wins", href: "#wins" },
              { label: "Career", href: "#career" },
              { label: "How I Sell", href: "#process" },
              { label: "Tech Stack", href: "#tech" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#111827")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#6b7280")
                }
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#0a66c2",
                textDecoration: "none",
                padding: "6px 14px",
                border: "1px solid #0a66c2",
                borderRadius: 6,
                transition: "all 0.15s",
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "72px 24px 64px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "start" }}>
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap" as const,
                marginBottom: 20,
              }}
            >
              {["AI Voice", "Conversational AI", "CPaaS", "CCaaS", "Enterprise SaaS"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase" as const,
                      color: "#0a66c2",
                      backgroundColor: "#eff6ff",
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <h1
              style={{
                fontSize: 46,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#111827",
                marginBottom: 20,
              }}
            >
              Alrazi Bashir
            </h1>

            <p
              style={{
                fontSize: 19,
                color: "#374151",
                lineHeight: 1.6,
                maxWidth: 600,
                marginBottom: 32,
                fontWeight: 400,
              }}
            >
              Enterprise Account Executive with a decade across the Voice AI,
              CPaaS, and CCaaS stack. I sell complex infrastructure into Fortune
              1000 buyers, run technical discovery with engineering and IT, and
              close multi-year commercial agreements with VP and C-suite
              stakeholders.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
              <a
                href="#wins"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor: "#0a66c2",
                  padding: "11px 22px",
                  borderRadius: 6,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Enterprise Wins
              </a>
              <a
                href="https://alrazibashir.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#374151",
                  backgroundColor: "#f3f4f6",
                  padding: "11px 22px",
                  borderRadius: 6,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Voice AI Work
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#374151",
                  backgroundColor: "#f3f4f6",
                  padding: "11px 22px",
                  borderRadius: 6,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Credential stat block */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: "28px 32px",
              minWidth: 240,
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#9ca3af",
                marginBottom: 20,
              }}
            >
              At a Glance
            </p>
            {[
              { label: "Quota", value: "$1.2M annual" },
              { label: "ACV Range", value: "$65K to $550K" },
              { label: "Buyer Level", value: "VP and C-suite" },
              { label: "Sales Cycles", value: "6 to 10 months" },
              { label: "Multi-Year Deals", value: "15+ agreements" },
              { label: "Market", value: "Fortune 1000" },
              { label: "Peak Attainment", value: "102%" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "9px 0",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
                  {stat.label}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#111827",
                    fontWeight: 700,
                    textAlign: "right" as const,
                    maxWidth: 130,
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER PROGRESSION ── */}
      <section
        id="career"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "56px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#9ca3af",
              marginBottom: 10,
            }}
          >
            Career Progression
          </p>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111827",
              marginBottom: 8,
            }}
          >
            Built across the full enterprise Voice AI and CX stack
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#6b7280",
              marginBottom: 40,
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            Each role was a deliberate move deeper into the infrastructure that
            powers modern enterprise customer experience.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              position: "relative" as const,
            }}
          >
            {[
              {
                company: "Twilio",
                years: "2018 to 2021",
                role: "Account Executive",
                category: "Cloud Communications / CPaaS",
                what: "Sold programmable voice, messaging, and contact center APIs into mid-market and enterprise accounts. Built technical buying groups across engineering, IT, and operations.",
                signal:
                  "Foundation in API-first cloud communications and enterprise developer ecosystems.",
                accent: "#e8443a",
              },
              {
                company: "Cyara",
                years: "2021 to 2022",
                role: "Senior Account Executive",
                category: "CX Assurance / Conversational AI Testing",
                what: "Sold CX assurance, IVR testing, and conversational AI validation platforms to enterprise contact center operations, QA, and CX leadership teams.",
                signal:
                  "Deep entry into CCaaS architecture, contact center production risk, and conversational AI quality.",
                accent: "#0a66c2",
              },
              {
                company: "Telnyx",
                years: "2022 to 2024",
                role: "Enterprise Account Executive",
                category: "AI Voice Infrastructure / Telephony",
                what: "Sold AI voice infrastructure, SIP trunking, carrier services, and programmable telephony into Fortune 1000 accounts with technical discovery across engineering, networking, and IT.",
                signal:
                  "Deepened into voice infrastructure, latency, reliability, failover, and AI-driven automation at the carrier layer.",
                accent: "#059669",
              },
            ].map((role, i) => (
              <div
                key={role.company}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: i === 0 ? "10px 0 0 10px" : i === 2 ? "0 10px 10px 0" : "0",
                  padding: "28px 28px 24px",
                  position: "relative" as const,
                }}
              >
                {/* Accent top bar */}
                <div
                  style={{
                    position: "absolute" as const,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    backgroundColor: role.accent,
                    borderRadius: i === 0 ? "10px 0 0 0" : i === 2 ? "0 10px 0 0" : 0,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                    marginTop: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {role.company}
                  </span>
                  {i < 2 && (
                    <span style={{ fontSize: 18, color: "#d1d5db", marginLeft: 12 }}>
                      &rarr;
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#9ca3af",
                    marginBottom: 4,
                    letterSpacing: "0.04em",
                  }}
                >
                  {role.years}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: role.accent,
                    marginBottom: 14,
                  }}
                >
                  {role.category}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#374151",
                    lineHeight: 1.6,
                    marginBottom: 14,
                  }}
                >
                  {role.what}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    lineHeight: 1.5,
                    fontStyle: "italic" as const,
                    borderTop: "1px solid #f3f4f6",
                    paddingTop: 12,
                  }}
                >
                  {role.signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE WINS ── */}
      <section
        id="wins"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: "#9ca3af",
            marginBottom: 10,
          }}
        >
          Enterprise Deal Record
        </p>
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#111827",
            marginBottom: 8,
          }}
        >
          Representative wins across complex enterprise environments
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#6b7280",
            marginBottom: 44,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          These are condensed deal reviews. Each one involved multi-stakeholder
          buying groups, technical discovery, and multi-month commercial cycles.
        </p>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
          {[
            {
              label: "Voice AI Infrastructure",
              title: "Competitive carrier displacement tied to AI-driven voice automation",
              company: "Fortune 500 technology enterprise",
              acv: "$285K ARR",
              tcv: "$855K TCV",
              cycle: "8 months",
              contract: "3-year agreement",
              problem:
                "The account was locked into a legacy carrier arrangement that could not support the latency and routing requirements for a new AI voice automation initiative. Engineering and IT were the initial entry points.",
              discovery:
                "Ran technical discovery across SIP architecture, PSTN routing, latency thresholds, failover topology, and carrier economics. Identified integration requirements with the AI automation layer before engaging commercial leadership.",
              group:
                "Engineering VP, Network Architect, IT Director, VP Operations, CFO (economic approval)",
              outcome:
                "Displaced incumbent carrier. Delivered a programmable telephony layer that enabled the voice AI deployment. Negotiated a three-year agreement with usage commitment that anchored the TCV.",
              tags: ["AI Voice", "SIP", "Carrier Replacement", "Fortune 500", "Multi-Year"],
            },
            {
              label: "Contact Center and Conversational AI Assurance",
              title: "CX assurance program tied to a cloud contact center migration",
              company: "Insurance enterprise with large contact center operation",
              acv: "$180K ARR",
              tcv: "$360K TCV",
              cycle: "7 months",
              contract: "2-year agreement",
              problem:
                "The account was mid-migration from a legacy IVR and on-premise contact center system to a cloud CCaaS environment. Production risk was the central concern. QA and CX operations had never had automated regression coverage for their IVR or conversational AI flows.",
              discovery:
                "Engaged QA leadership and CX operations to map the testing gap. Connected production risk to regulatory exposure in the insurance contact center context. Bridged technical requirements from QA to a commercial case for the VP of CX.",
              group:
                "QA Director, CX Operations VP, Contact Center Director, IT, VP CX (economic approval)",
              outcome:
                "Closed the assurance platform on a two-year agreement timed to the migration go-live. Created a production testing motion that QA could own. Eliminated manual regression testing across the IVR and conversational AI flows.",
              tags: ["CCaaS", "CX Assurance", "IVR Testing", "Insurance", "Migration"],
            },
            {
              label: "Programmable Contact Center Modernization",
              title: "Twilio Flex enterprise deployment for a mid-market financial services firm",
              company: "Financial services organization, 400-seat contact center",
              acv: "$120K ARR",
              tcv: "$240K TCV",
              cycle: "6 months",
              contract: "2-year agreement",
              problem:
                "The organization was running an aging on-premise contact center with no digital channel capability and limited integration into their CRM and case management systems. The VP of Customer Operations wanted to modernize without a full rip-and-replace.",
              discovery:
                "Technical discovery covered CRM integrations, agent desktop requirements, digital channel roadmap, and carrier interconnect. Built a phased modernization architecture with the engineering team that reduced risk and allowed a pilot approach.",
              group:
                "IT Director, VP Customer Operations, Head of Engineering, CFO (budget approval)",
              outcome:
                "Deployed Twilio Flex across 400 seats with CRM integration and digital channel enablement. Two-year agreement structured with a pilot phase that converted to full commitment at month four.",
              tags: ["CPaaS", "Twilio Flex", "Financial Services", "CCaaS Migration", "API Integration"],
            },
          ].map((deal) => (
            <div
              key={deal.title}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                overflow: "hidden" as const,
              }}
            >
              {/* Deal header */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  borderBottom: "1px solid #e5e7eb",
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap" as const,
                  gap: 12,
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase" as const,
                      color: "#0a66c2",
                    }}
                  >
                    {deal.label}
                  </span>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#111827",
                      marginTop: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {deal.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>
                    {deal.company}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  {[
                    { label: "ARR", value: deal.acv },
                    { label: "TCV", value: deal.tcv },
                    { label: "Cycle", value: deal.cycle },
                    { label: "Term", value: deal.contract },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: "center" as const }}>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#111827",
                          lineHeight: 1,
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#9ca3af",
                          marginTop: 3,
                          fontWeight: 500,
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deal body */}
              <div
                style={{
                  padding: "24px 28px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 24,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      color: "#9ca3af",
                      marginBottom: 6,
                    }}
                  >
                    Customer Problem
                  </p>
                  <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>
                    {deal.problem}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      color: "#9ca3af",
                      marginBottom: 6,
                    }}
                  >
                    Technical Discovery
                  </p>
                  <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>
                    {deal.discovery}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      color: "#9ca3af",
                      marginBottom: 6,
                    }}
                  >
                    Buying Group
                  </p>
                  <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>
                    {deal.group}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase" as const,
                      color: "#9ca3af",
                      marginBottom: 6,
                    }}
                  >
                    Outcome
                  </p>
                  <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>
                    {deal.outcome}
                  </p>
                </div>
              </div>

              {/* Deal tags */}
              <div
                style={{
                  padding: "12px 28px",
                  borderTop: "1px solid #f3f4f6",
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap" as const,
                }}
              >
                {deal.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      color: "#6b7280",
                      backgroundColor: "#f3f4f6",
                      padding: "3px 9px",
                      borderRadius: 4,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW I SELL ── */}
      <section
        id="process"
        style={{
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          padding: "64px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#9ca3af",
              marginBottom: 10,
            }}
          >
            Sales Process
          </p>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111827",
              marginBottom: 8,
            }}
          >
            How I run an enterprise deal
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#6b7280",
              marginBottom: 44,
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            MEDDIC and MEDDPICC-aligned. Not a methodology recitation. A real
            operating model for complex technical evaluations.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                stage: "Discovery",
                subtitle: "Technical and commercial",
                copy: "I open with architecture and business outcome questions before ever running a demo. I need to understand the environment, the integration requirements, the production constraints, and the economic pressure before I can build a relevant case.",
              },
              {
                stage: "Qualification",
                subtitle: "MEDDPICC rigor",
                copy: "I map the buying group, confirm budget, identify the economic buyer, and understand the decision criteria before investing in a proof of concept. I qualify hard early so I can invest deep in the right accounts.",
              },
              {
                stage: "Technical Validation",
                subtitle: "PoC and PoV management",
                copy: "I partner with solutions engineering to design evaluations that are tied to production success criteria, not generic demos. Success metrics are agreed in writing before the evaluation begins.",
              },
              {
                stage: "Executive Alignment",
                subtitle: "VP and C-suite engagement",
                copy: "I create economic buyer access early. I build executive briefings that translate technical outcomes into business value, risk reduction, and financial impact. I hold the commercial tension through procurement.",
              },
              {
                stage: "Business Case",
                subtitle: "ROI and risk framing",
                copy: "Every enterprise deal needs a business case the economic buyer can take to a CFO or board. I build quantified ROI models around cost reduction, risk mitigation, operational efficiency, and revenue enablement.",
              },
              {
                stage: "Negotiation",
                subtitle: "Multi-year commercial structure",
                copy: "I structure multi-year agreements that benefit both sides. I understand pricing levers, commit structures, volume discounts, and enterprise procurement cycles. I do not give away margin to close on time.",
              },
              {
                stage: "Procurement",
                subtitle: "Legal, security, InfoSec",
                copy: "I manage security reviews, legal redlines, InfoSec questionnaires, and vendor procurement processes. I brief internal teams and remove friction without losing control of the commercial timeline.",
              },
              {
                stage: "Close",
                subtitle: "Forecast discipline",
                copy: "I forecast accurately. I know the difference between a deal that is progressing and a deal that is stalling. I do not log hope in CRM. I create mutual close plans with milestone commitments and executive sponsorship.",
              },
            ].map((step, i) => (
              <div
                key={step.stage}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#9ca3af",
                      backgroundColor: "#f3f4f6",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#111827",
                        lineHeight: 1.2,
                      }}
                    >
                      {step.stage}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#0a66c2",
                        fontWeight: 500,
                        marginTop: 1,
                      }}
                    >
                      {step.subtitle}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH AND BUYER ECOSYSTEM ── */}
      <section
        id="tech"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {/* Technology */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#9ca3af",
                marginBottom: 10,
              }}
            >
              Technology Ecosystem
            </p>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111827",
                marginBottom: 28,
              }}
            >
              What I sell and understand
            </h2>

            {[
              {
                group: "AI Voice and Speech",
                items: [
                  "Voice AI agents",
                  "Speech recognition (ASR)",
                  "Text-to-speech (TTS)",
                  "LLM-driven voice automation",
                  "Latency and audio quality",
                ],
              },
              {
                group: "Infrastructure and Carrier",
                items: [
                  "SIP and telephony",
                  "PSTN interconnect",
                  "CPaaS and programmable APIs",
                  "WebRTC",
                  "Failover and routing",
                  "Carrier economics",
                ],
              },
              {
                group: "Contact Center and CX",
                items: [
                  "CCaaS platforms (Genesys Cloud, Amazon Connect, Twilio Flex)",
                  "IVR and conversational AI testing",
                  "CX assurance and production monitoring",
                  "Contact center QA",
                  "Enterprise integrations (CRM, ticketing, case management)",
                ],
              },
              {
                group: "Enterprise AI",
                items: [
                  "Conversational AI and NLU",
                  "Agentic workflows",
                  "AI evaluation and observability",
                  "LLM validation in production",
                ],
              },
            ].map((group) => (
              <div key={group.group} style={{ marginBottom: 20 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#374151",
                    marginBottom: 8,
                    letterSpacing: "0.01em",
                  }}
                >
                  {group.group}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 12,
                        color: "#374151",
                        backgroundColor: "#f3f4f6",
                        padding: "5px 10px",
                        borderRadius: 5,
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Buyer ecosystem */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#9ca3af",
                marginBottom: 10,
              }}
            >
              Buyer Ecosystem
            </p>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#111827",
                marginBottom: 28,
              }}
            >
              Who I sell to and with
            </h2>

            {[
              {
                group: "Economic Buyers",
                items: ["CRO", "CIO", "CTO", "CCO", "CFO", "VP CX", "VP Operations", "GM"],
              },
              {
                group: "Technical Evaluators",
                items: [
                  "Engineering VP and architects",
                  "IT Director and network teams",
                  "Solutions Engineering",
                  "QA and Contact Center Operations",
                  "Product leadership",
                ],
              },
              {
                group: "Vertical Experience",
                items: [
                  "Financial services and banking",
                  "Insurance",
                  "Healthcare",
                  "Technology enterprise",
                  "Retail and consumer",
                  "Regulated enterprise environments",
                ],
              },
              {
                group: "Deal Types",
                items: [
                  "New logo hunting",
                  "Competitive displacement",
                  "Platform consolidation",
                  "Cloud migration deals",
                  "AI modernization",
                ],
              },
            ].map((group) => (
              <div key={group.group} style={{ marginBottom: 20 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#374151",
                    marginBottom: 8,
                    letterSpacing: "0.01em",
                  }}
                >
                  {group.group}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 12,
                        color: "#374151",
                        backgroundColor: "#f3f4f6",
                        padding: "5px 10px",
                        borderRadius: 5,
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING CTA ── */}
      <section
        id="contact"
        style={{
          backgroundColor: "#0a66c2",
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center" as const,
          }}
        >
          <h2
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            Hiring for Enterprise AI, Voice AI, CPaaS, CCaaS, or CX?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            I am actively evaluating Enterprise AE and Strategic AE roles with
            $1M+ quota, technical products, and Fortune 1000 buyers. Open to
            early-stage companies building their first enterprise motion.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#0a66c2",
                backgroundColor: "#ffffff",
                padding: "13px 26px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {siteConfig.email}
            </a>
            <a
              href="https://linkedin.com/in/alrazibashir"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.15)",
                padding: "13px 26px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.15)",
                padding: "13px 26px",
                borderRadius: 6,
                textDecoration: "none",
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: "#111827",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap" as const,
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "#6b7280" }}>
            Alrazi Bashir &mdash; Enterprise Account Executive
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href="/"
              style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}
            >
              Main Site
            </Link>
            <a
              href="https://linkedin.com/in/alrazibashir"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#6b7280", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
