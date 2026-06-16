import Link from "next/link";

const projects = [
  { title: "MediTrack", desc: "Cross-platform health adherence system with React web portal for doctors and Flutter mobile app for patients." },
  { title: "School Enrollment System", desc: "Web-based enrollment system with PHP back-end and MySQL database for University of Eastern Pangasinan." },
  { title: "Inventory Management System", desc: "Desktop-based inventory management application for tracking stock and assets." },
  { title: "Mobile Game Application", desc: "Contributed to mobile game development, supporting design and core gameplay as a team capstone project." },
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 12, color: "var(--text-faint)", display: "inline-flex", alignItems: "center", gap: 4 }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-head)", marginTop: 8 }}>Projects</h1>
      </div>

      <div className="card">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{
              padding: "14px 0",
              borderBottom: i < projects.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-head)", margin: 0 }}>{p.title}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, margin: "4px 0 0" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}