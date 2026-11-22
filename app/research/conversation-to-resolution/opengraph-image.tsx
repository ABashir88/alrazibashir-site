import { createResearchOg } from "../../../src/lib/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Conversation-to-Resolution Framework";
export default function Image() {
  return createResearchOg("The Conversation-to-Resolution Framework", "CX · Framework");
}
