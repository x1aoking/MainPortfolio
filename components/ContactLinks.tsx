import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

export default function ContactLinks() {
  return (
    <div className="card card-hover">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(130px, 100%), 1fr))",
        gap: "20px 16px",
        maxWidth: "100%",
      }}>
        {/* Social Links */}
        <div style={{ minWidth: 0, maxWidth: "100%" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: "var(--text-faint)",
            textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12,
          }}>
            Social Links
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { href: "https://linkedin.com/in/jericojacob", Icon: LinkedInIcon, label: "LinkedIn" },
              { href: "https://github.com/x1aoking", Icon: GitHubIcon, label: "GitHub" },
              { href: "https://instagram.com/xiaokinggg_", Icon: InstagramIcon, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  fontSize: 13, color: "var(--text-body)",
                  transition: "color 0.15s", textDecoration: "none",
                }}>
                <Icon />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ minWidth: 0, maxWidth: "100%" }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: "var(--text-faint)",
            textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12,
          }}>
            Contact
          </p>
          <div>
            <p style={{ fontSize: 11, color: "var(--text-faint)", margin: "0 0 4px" }}>Email</p>
            <a href="mailto:jeriqttt@gmail.com"
              style={{
                display: "flex", alignItems: "flex-start", gap: 6,
                fontSize: 12, color: "var(--text-body)", transition: "color 0.15s",
                wordBreak: "break-all", overflowWrap: "anywhere",
                textDecoration: "none", maxWidth: "100%",
              }}>
              <Mail size={12} style={{ flexShrink: 0, marginTop: 1 }} />
              jeriqttt@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}