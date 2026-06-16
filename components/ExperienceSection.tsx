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
      <div>
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-3">
            {/* Square indicator + line */}
            <div className="flex flex-col items-center" style={{ width: 16, flexShrink: 0 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  flexShrink: 0,
                  marginTop: 2,
                  background: item.current ? "#0f172a" : "transparent",
                  border: item.current ? "2px solid #0f172a" : "2px solid #cbd5e1",
                }}
              />
              {i < timeline.length - 1 && (
                <div style={{ width: 2, flex: 1, background: "#e2e8f0", marginTop: 4 }} />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: i < timeline.length - 1 ? 20 : 0, flex: 1 }}>
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", margin: 0 }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0, marginTop: 2 }}>{item.sub}</p>
                </div>
                <span style={{ fontSize: 11, color: "#94a3b8", whiteSpace: "nowrap", marginTop: 1 }}>{item.year}</span>
              </div>
              {item.bullets.length > 0 && (
                <ul className="mt-2 space-y-1" style={{ paddingLeft: 14 }}>
                  {item.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6, listStyleType: "disc" }}>{b}</li>
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