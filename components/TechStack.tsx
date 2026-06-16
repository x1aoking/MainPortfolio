"use client";

const stack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js"],
  Backend: ["Node.js", "PHP", "Laravel", "Java", "C#"],
  Databases: ["MySQL", "Firebase Firestore", "Supabase", "MS Access"],
  "Tools & Platforms": ["Git", "Visual Studio Code", "Visual Studio 2022", "Windows"],
};

const PREVIEW_COUNT = 2;

export default function TechStack() {
  const entries = Object.entries(stack);
  const visible = entries.slice(0, PREVIEW_COUNT);

  return (
    <div className="card card-hover">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 className="stitle" style={{ margin: 0 }}>Tech Stack</h2>
        <a href="/tech-stack" className="vlink">View All</a>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {visible.map(([group, items]) => (
          <div key={group} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, color: "var(--text-faint)",
              letterSpacing: "0.06em", textTransform: "uppercase",
              minWidth: 80, flexShrink: 0, paddingTop: 2,
            }}>
              {group}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {items.map((item) => (
                <span key={item} className="pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}