import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Account Executive | Hiring Manager Overview | Alrazi Bashir",
  description: "Enterprise Account Executive specializing in AI voice infrastructure, CPaaS, CCaaS, and enterprise conversational AI platforms.",
};

export default function HiringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
