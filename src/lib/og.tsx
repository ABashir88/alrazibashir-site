import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function createResearchOg(title: string, label: string) {
  return new ImageResponse(
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: "100%", height: "100%", padding: 72,
      color: "#172236", background: "#f8fafc",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 26, letterSpacing: 3, fontWeight: 700, color: "#356d83" }}>
          ALRAZI BASHIR · {label.toUpperCase()}
        </div>
        <div style={{ width: 115, height: 6, background: "#356d83", borderRadius: 3 }} />
      </div>
      <div style={{
        fontSize: title.length > 58 ? 57 : 66, lineHeight: 1.13,
        fontWeight: 700, maxWidth: 1030, letterSpacing: -1,
      }}>
        {title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#52647a" }}>
        <span>CX · Voice AI · CCaaS · CPaaS</span>
        <span>alrazibashir.com</span>
      </div>
    </div>,
    ogSize,
  );
}
