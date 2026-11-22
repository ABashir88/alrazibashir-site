import { createResearchOg, ogSize, ogContentType } from "../../../src/lib/og";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Enterprise CX Technology Stack Explained";
export default function Image() {
  return createResearchOg("Enterprise CX Technology Stack Explained", "CCaaS · CPaaS · MCP");
}
