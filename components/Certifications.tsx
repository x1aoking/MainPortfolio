import Link from "next/link";

const certs = [
  { name: "Cyber Threat Management", issuer: "Cisco Networking Academy" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
];

export default function Certifications() {
  return (
    <div className="card card-hover">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h2 className="stitle" style={{ margin: 0 }}>Recent Certifications</h2>
        <Link href="/certifications" className="vlink">View All</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {certs.map((c, i) => (
          <div key={c.name} style={{
            padding: "12px 0",
            borderBottom: i < certs.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-head)", margin: 0 }}>{c.name}</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0, marginTop: 2 }}>{c.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}