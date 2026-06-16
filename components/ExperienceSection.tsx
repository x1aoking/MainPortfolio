const timeline = [
  {
    title: "Web3 Front-End Developer",
    sub: "Makerspace InnovHub OPC · OJT",
    year: "2026",
    current: true,
    bullets: [
      "Developed front-end interfaces for Web3 decentralized applications using React and TypeScript.",
      "Built responsive, cross-browser-compatible UI components ensuring optimal user experience.",
      "Managed source code with Git; participated in code reviews and team architecture discussions.",
    ],
  },
  {
    title: "BS Information Technology",
    sub: "University of Eastern Pangasinan · Philippines",
    year: "2022 – 2026",
    current: false,
    bullets: ["Relevant Coursework: Web Development, Database Management, Cybersecurity."],
  },
  {
    title: "Hello World 👋",
    sub: "Started learning to code",
    year: "—",
    current: false,
    bullets: [],
  },
];

export default function ExperienceSection() {
  return (
    <div className="card card-hover">
      <h2 className="stitle">Experience</h2>
      <div style={{ maxWidth: "100%" }}>
        {timeline.map((item, i) => (
          <div key={i} style={{
            display: "flex", gap: 12,
            minWidth: 0, maxWidth: "100%",
          }}>
            {/* Indicator + line */}
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", width: 16, flexShrink: 0,
            }}>
              <div style={{
                width: 14, height: 14, borderRadius: 3,
                flexShrink: 0, marginTop: 2,
                background: item.current ? "var(--text-head)" : "transparent",
                border: item.current
                  ? "2px solid var(--text-head)"
                  : "2px solid var(--border-mid)",
                transition: "background 0.2s, border-color 0.2s",
              }} />
              {i < timeline.length - 1 && (
                <div style={{
                  width: 2, flex: 1,
                  background: "var(--border)",
                  marginTop: 4,
                  transition: "background 0.2s",
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{
              paddingBottom: i < timeline.length - 1 ? 20 : 0,
              flex: 1, minWidth: 0, maxWidth: "100%",
            }}>
              <div style={{
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 8, flexWrap: "wrap",
              }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{
                    fontSize: 13, fontWeight: 600,
                    color: "var(--text-head)", margin: 0,
                    wordBreak: "break-word",
                    transition: "color 0.2s",
                  }}>{item.title}</p>
                  <p style={{
                    fontSize: 12, color: "var(--text-muted)",
                    margin: "2px 0 0", wordBreak: "break-word",
                    transition: "color 0.2s",
                  }}>{item.sub}</p>
                </div>
                <span style={{
                  fontSize: 11, color: "var(--text-faint)",
                  whiteSpace: "nowrap", marginTop: 1,
                  flexShrink: 0, transition: "color 0.2s",
                }}>{item.year}</span>
              </div>

              {item.bullets.length > 0 && (
                <ul style={{
                  paddingLeft: 14, marginTop: 8,
                  display: "flex", flexDirection: "column", gap: 4,
                }}>
                  {item.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: 12, color: "var(--text-muted)",
                      lineHeight: 1.6, listStyleType: "disc",
                      wordBreak: "break-word",
                      transition: "color 0.2s",
                    }}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}