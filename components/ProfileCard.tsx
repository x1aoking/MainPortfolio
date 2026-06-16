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

      {/* Top row: avatar + info */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

        {/* Avatar */}
        {imgError ? (
          <div style={{
            width: 100, height: 100, borderRadius: 16, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff", fontWeight: 700, fontSize: 24,
          }}>JJ</div>
        ) : (
          <img
            src="/avatar.jpg"
            alt="Jerico P. Jacob"
            onError={() => setImgError(true)}
            style={{
              width: 100, height: 100, borderRadius: 16, flexShrink: 0,
              objectFit: "cover", objectPosition: "top",
            }}
          />
        )}

        {/* Name + location */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-head)", margin: 0, letterSpacing: "-0.01em" }}>
              Jerico P. Jacob
            </h1>
            <span style={{
              width: 17, height: 17, borderRadius: "50%", background: "#3b82f6",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 10, fontWeight: 700, flexShrink: 0,
            }}>v</span>

            {/* Toggle */}
            <button
              onClick={toggleDark}
              style={{
                marginLeft: 8,
                width: 40, height: 24, borderRadius: 999,
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

          <p style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--text-muted)", margin: "6px 0 0" }}>
            <MapPin size={11} />
            Binalonan, Pangasinan
          </p>
        </div>
      </div>

      {/* Action row */}
      <div style={{
        display: "flex", alignItems: "center", gap: 16,
        marginTop: 16, paddingTop: 14,
        borderTop: "1px solid var(--border)",
        flexWrap: "wrap",
      }}>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "var(--btn-dark)", color: "var(--text-white)",
          fontSize: 12, fontWeight: 600, padding: "6px 13px",
          borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap",
        }}>
          <CalendarDays size={13} /> Schedule a Call&gt;
        </a>
        <a href="mailto:jeriqttt@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--text-body)", fontSize: 12, textDecoration: "none" }}>
          <Mail size={12} /> Send Email
        </a>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--text-body)", fontSize: 12, textDecoration: "none" }}>
          <Globe size={12} /> Read my blog
        </a>
        <span style={{ marginLeft: "auto", color: "var(--text-faint)", fontSize: 12 }}>&gt;</span>
      </div>
    </div>
  );
}