import { createResearchOg, ogSize, ogContentType } from "../src/lib/og";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Alrazi Bashir — CX & Voice AI research";
export default function Image() {
  return createResearchOg("Making sense of enterprise CX, Voice AI, and intelligent automation.", "Research & Advisory");
}
