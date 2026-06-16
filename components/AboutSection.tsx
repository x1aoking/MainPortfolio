export default function AboutSection() {
  const skills = [
    "Creative Problem-Solving", "Teamwork & Collaboration", "Time Management",
    "Attention to Detail", "Adaptability", "Willingness to Learn", "Meeting Deadlines",
  ];

  return (
    <div className="card card-hover">
      <h2 className="stitle">About</h2>
      <p style={{
        color: "var(--text-body)",
        fontSize: 13,
        lineHeight: 1.8,
        margin: 0,
        wordBreak: "break-word",
        overflowWrap: "break-word",
        maxWidth: "100%",
      }}>
        Information Technology graduate with hands-on experience building Web3 decentralized
        application interfaces as an OJT Front-End Developer at Makerspace InnovHub OPC.
        Proficient in React, Next.js, TypeScript, and Node.js. Experienced in front-end web
        development, relational databases, and backend services — with a collaborative work
        ethic and a consistent ability to meet deadlines.
      </p>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 6,
        marginTop: 14,
        paddingTop: 14,
        borderTop: "1px solid var(--border)",
        maxWidth: "100%",
        overflow: "hidden",
      }}>
        {skills.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>
    </div>
  );
}