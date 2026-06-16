"use client";
import { useState, useEffect } from "react";
import { MapPin, Mail, Globe, CalendarDays } from "lucide-react";

export default function ProfileCard() {
  const [imgError, setImgError] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="card card-hover">
      {/* Top row */}
      <div style={{
        display: "flex", alignItems: "center",
        gap: 16, flexWrap: "wrap",
        minWidth: 0, maxWidth: "100%",
      }}>
        {/* Avatar */}
        {imgError ? (
          <div style={{
            width: 80, height: 80, borderRadius: 16, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff", fontWeight: 700, fontSize: 22,
          }}>JJ</div>
        ) : (
          <img
            src="/avatar.jpg"
            alt="Jerico P. Jacob"
            onError={() => setImgError(true)}
            style={{
              width: 80, height: 80, borderRadius: 16, flexShrink: 0,
              objectFit: "cover", objectPosition: "top",
            }}
          />
        )}

        {/* Name + location */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: "100%", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", minWidth: 0 }}>
            <h1 style={{
              fontSize: 17, fontWeight: 700, color: "var(--text-head)",
              margin: 0, letterSpacing: "-0.01em",
              overflow: "hidden", textOverflow: "ellipsis",
              whiteSpace: "nowrap", maxWidth: "100%",
              minWidth: 0,
            }}>
              Jerico P. Jacob
            </h1>
            <span style={{
              width: 16, height: 16, borderRadius: "50%", background: "#3b82f6",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 9, fontWeight: 700, flexShrink: 0,
            }}>v</span>
            <button
              onClick={toggleDark}
              style={{
                marginLeft: 4, width: 40, height: 24, borderRadius: 999,
                border: "1px solid var(--border)",
                background: dark ? "#334155" : "#e2e8f0",
                position: "relative", cursor: "pointer",
                transition: "background 0.2s", padding: 0, flexShrink: 0,
              }}
              title={dark ? "Switch to light" : "Switch to dark"}
            >
              <span style={{
                position: "absolute", top: 3,
                left: dark ? 18 : 3,
                width: 16, height: 16, borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                transition: "left 0.2s",
              }} />
            </button>
          </div>

          <p style={{
            display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap",
            fontSize: 12, color: "var(--text-muted)", margin: "6px 0 0",
          }}>
            <MapPin size={11} style={{ flexShrink: 0 }} />
            Binalonan, Pangasinan
          </p>
        </div>
      </div>

      {/* Action row */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginTop: 16, paddingTop: 14,
        borderTop: "1px solid var(--border)",
        flexWrap: "wrap",
        minWidth: 0, maxWidth: "100%",
      }}>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "var(--btn-dark)", color: "var(--text-white)",
          fontSize: 12, fontWeight: 600, padding: "6px 13px",
          borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          <CalendarDays size={13} /> Schedule a Call
        </a>
        <a href="mailto:jeriqttt@gmail.com" style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          color: "var(--text-body)", fontSize: 12, whiteSpace: "nowrap",
        }}>
          <Mail size={12} style={{ flexShrink: 0 }} /> Send Email
        </a>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 5,
          color: "var(--text-body)", fontSize: 12, whiteSpace: "nowrap",
        }}>
          <Globe size={12} style={{ flexShrink: 0 }} /> Read my blog
        </a>
      </div>
    </div>
  );
}