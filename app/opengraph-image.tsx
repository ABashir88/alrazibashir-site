import { createResearchOg } from "../src/lib/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alrazi Bashir — CX & Voice AI research";
export default function Image() {
  return createResearchOg("Making sense of enterprise CX, Voice AI, and intelligent automation.", "Research & Advisory");
}
