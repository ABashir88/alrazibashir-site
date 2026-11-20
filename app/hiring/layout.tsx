import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alrazi Bashir | Founder & AI Industry Advisor | Hiring Overview",
  description: "AI industry advisor and former enterprise AE specializing in Voice AI, CPaaS, CCaaS, and conversational AI platforms. 6+ years closing $65K–$550K ACV deals with Fortune 1000 accounts.",
};

export default function HiringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
