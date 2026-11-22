import { createResearchOg, ogSize, ogContentType } from "../../../src/lib/og";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "The Conversation-to-Resolution Framework";
export default function Image() {
  return createResearchOg("The Conversation-to-Resolution Framework", "CX · Framework");
}
