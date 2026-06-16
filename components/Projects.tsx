import Link from "next/link";

const projects = [
  { title: "MediTrack", desc: "Cross-platform health adherence system with React web portal for doctors and Flutter mobile app for patients." },
  { title: "School Enrollment System", desc: "Web-based enrollment system with PHP back-end and MySQL database for University of Eastern Pangasinan." },
  { title: "Inventory Management System", desc: "Desktop-based inventory management application for tracking stock and assets." },
  { title: "Mobile Game Application", desc: "Contributed to mobile game development, supporting design and core gameplay as a team capstone project." },
];

export default function Projects() {
  return (
    <div className="card card-hover">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 className="stitle" style={{ margin: 0 }}>Recent Projects</h2>
        <Link href="/projects" className="vlink">View All</Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-head)", margin: 0 }}>{p.title}</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}