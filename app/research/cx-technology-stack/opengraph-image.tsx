import { createResearchOg } from "../../../src/lib/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Enterprise CX Technology Stack Explained";
export default function Image() {
  return createResearchOg("Enterprise CX Technology Stack Explained", "CCaaS · CPaaS · MCP");
}
