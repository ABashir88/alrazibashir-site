import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alrazi Bashir | Founder & AI Industry Advisor | Hiring Overview",
  description: "AI industry advisor and former enterprise AE specializing in Voice AI, CPaaS, CCaaS, and conversational AI platforms. 6+ years closing $65K–$550K ACV deals with Fortune 1000 accounts.",
  alternates: { canonical: "/hiring" },
  openGraph: {
    title: "Alrazi Bashir | Hiring Overview",
    description: "Experience across enterprise Voice AI, communications platforms and customer experience technology.",
    url: "https://alrazibashir.com/hiring",
    type: "profile",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function HiringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
