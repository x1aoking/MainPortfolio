import Link from "next/link";

const certs = [
  { name: "Cyber Threat Management", issuer: "Cisco Networking Academy" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
];

export default function CertificationsPage() {
  return (
    <div className="page">
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 12, color: "var(--text-faint)", display: "inline-flex", alignItems: "center", gap: 4 }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-head)", marginTop: 8 }}>Certifications</h1>
      </div>

      <div className="card">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {certs.map((c, i) => (
            <div key={c.name} style={{
              padding: "14px 0",
              borderBottom: i < certs.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-head)", margin: 0 }}>{c.name}</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 0" }}>{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}