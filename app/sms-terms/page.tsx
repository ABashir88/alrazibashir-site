export const metadata = {
  title: "Terms & Conditions",
};

export default function SmsTerms() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.7 }}>
      <h1>Terms &amp; Conditions</h1>

      <p>These Terms &amp; Conditions cover the Alrazi Job Radar SMS program operated by Alrazi Bashir.</p>

      <h2>SMS Terms</h2>
      <ul>
        <li><strong>Program name:</strong> Alrazi Job Radar, operated by Alrazi Bashir.</li>
        <li><strong>Program description:</strong> application-generated text alerts sent to the program owner, Alrazi Bashir, when his job-search tracker finds a new high-fit job posting. This is a hobbyist software project with a single subscriber.</li>
        <li><strong>How to opt in:</strong> text JOBRADAR to (470) 287-5662, then reply YES to confirm.</li>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li><strong>To stop messages, reply STOP.</strong> You will receive one confirmation message and no further messages. Reply START to resubscribe.</li>
        <li><strong>For help, reply HELP</strong> or email <a href="mailto:alrazi@alrazibashir.com">alrazi@alrazibashir.com</a>.</li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
        <li><strong>Privacy:</strong> see our <a href="/sms-privacy">Privacy Policy</a>.</li>
      </ul>

      <p style={{ fontSize: "0.85rem", color: "#666" }}>Last updated: November 26, 2026</p>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        <a href="/job-radar-sms">Alrazi Job Radar SMS Alerts</a> | <a href="/sms-privacy">Privacy Policy</a>
      </p>
    </main>
  );
}
