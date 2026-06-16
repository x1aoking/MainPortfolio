import Link from "next/link";

const stack = {
  Frontend: ["JavaScript", "TypeScript", "React", "Next.js"],
  Backend: ["Node.js", "PHP", "Laravel", "Java", "C#"],
  Databases: ["MySQL", "Firebase Firestore", "Supabase", "MS Access"],
  "Tools & Platforms": ["Git", "Visual Studio Code", "Visual Studio 2022", "Windows"],
};

export default function TechStackPage() {
  return (
    <div className="page">
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 12, color: "var(--text-faint)", display: "inline-flex", alignItems: "center", gap: 4 }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-head)", marginTop: 8 }}>Tech Stack</h1>
      </div>

      <div className="card">
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {Object.entries(stack).map(([group, items]) => (
            <div key={group}>
              <p style={{
                fontSize: 11, fontWeight: 700, color: "var(--text-faint)",
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10,
              }}>
                {group}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}