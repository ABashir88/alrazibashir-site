export const metadata = {
  title: "Alrazi Job Radar SMS Alerts",
};

export default function JobRadarSms() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.7 }}>
      <h1>Alrazi Job Radar SMS Alerts</h1>

      <p>Alrazi Job Radar is a hobbyist software project by Alrazi Bashir. The application monitors his job-search tracker and automatically sends alert texts when it finds a new high-fit job posting. Alerts are sent only to the program owner, Alrazi Bashir. No other phone numbers are collected, purchased, shared or messaged.</p>

      <h2>How to subscribe</h2>
      <p>Text <strong>JOBRADAR</strong> to <strong>(470) 287-5662</strong>. You will receive:</p>
      <blockquote style={{ borderLeft: "3px solid #ccc", paddingLeft: "1rem", margin: "1rem 0", color: "#555" }}>
        &quot;Alrazi Job Radar: personal job alerts for Alrazi Bashir. Reply YES to subscribe. Msg frequency varies. Msg &amp; data rates may apply. Help: alrazi@alrazibashir.com. Reply STOP to cancel.&quot;
      </blockquote>

      <p>Reply <strong>YES</strong> to confirm. You will receive:</p>
      <blockquote style={{ borderLeft: "3px solid #ccc", paddingLeft: "1rem", margin: "1rem 0", color: "#555" }}>
        &quot;Alrazi Job Radar: You&apos;re subscribed to personal job alerts. Msg frequency varies. Msg &amp; data rates may apply. Reply HELP for help, STOP to cancel.&quot;
      </blockquote>

      <p>Alerts are sent only after this confirmation.</p>

      <p>Message frequency varies. Message and data rates may apply. Reply HELP for help. Reply STOP to cancel at any time.</p>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        <a href="/sms-terms">Terms &amp; Conditions</a> | <a href="/sms-privacy">Privacy Policy</a>
      </p>
    </main>
  );
}
