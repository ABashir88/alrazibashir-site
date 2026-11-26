export const metadata = {
  title: "Privacy Policy",
};

export default function SmsPrivacy() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.7 }}>
      <h1>Privacy Policy</h1>

      <p>This Privacy Policy covers the Alrazi Job Radar SMS program operated by Alrazi Bashir.</p>

      <p><strong>Information collected:</strong> one mobile phone number, belonging to the program owner, Alrazi Bashir, and the record of his opt-in (the JOBRADAR and YES messages).</p>

      <p><strong>How it is used:</strong> only to send the Alrazi Job Radar alerts described in the <a href="/sms-terms">Terms &amp; Conditions</a>, and to respond to HELP and STOP requests.</p>

      <p><strong>Sharing:</strong> We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes. Text messaging opt-in data and consent are not shared with any third parties. The number is processed only by the messaging provider (Twilio), and only to deliver messages.</p>

      <p><strong>Retention:</strong> the number is kept only while the program is active, and is deleted when the program ends or after a STOP request.</p>

      <p><strong>Contact:</strong> <a href="mailto:alrazi@alrazibashir.com">alrazi@alrazibashir.com</a></p>

      <p style={{ fontSize: "0.85rem", color: "#666" }}>Last updated: November 26, 2026</p>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        <a href="/job-radar-sms">Alrazi Job Radar SMS Alerts</a> | <a href="/sms-terms">Terms &amp; Conditions</a>
      </p>
    </main>
  );
}
