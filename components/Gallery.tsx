"use client";
import { useRef, useState } from "react";

const IMAGES = [
  { src: "/gallery/1.jpg", alt: "Graduation with classmate" },
  { src: "/gallery/2.jpg", alt: "UEP group photo" },
  { src: "/gallery/3.jpg", alt: "UEP graduation portrait" },
  { src: "/gallery/4.jpg", alt: "Barong Tagalog" },
  { src: "/gallery/5.jpg", alt: "Graduation day with bouquet" },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <>
      <div className="card card-hover">
        <h2 className="stitle" style={{ marginBottom: 12 }}>Gallery</h2>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>

          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            style={{
              position: "absolute", left: -10, zIndex: 10,
              width: 28, height: 28, borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-body)", cursor: "pointer", fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canScrollLeft ? 1 : 0.25, flexShrink: 0,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >‹</button>

          {/* Scroll track */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            style={{
              display: "flex", gap: 8, overflowX: "auto", width: "100%",
              scrollbarWidth: "none", scrollBehavior: "smooth", padding: "4px 6px",
            }}
          >
            {IMAGES.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img.src)}
                style={{
                  flexShrink: 0, width: 180, height: 130, borderRadius: 10,
                  overflow: "hidden", background: "var(--bg-row)",
                  border: "1px solid var(--border)", cursor: "zoom-in",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            style={{
              position: "absolute", right: -10, zIndex: 10,
              width: 28, height: 28, borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-body)", cursor: "pointer", fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canScrollRight ? 1 : 0.25, flexShrink: 0,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >›</button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: 24,
          }}
        >
          <img
            src={lightbox}
            alt="Full size"
            style={{
              maxWidth: "90vw", maxHeight: "90vh",
              borderRadius: 12, objectFit: "contain",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: 20, right: 24,
              background: "rgba(255,255,255,0.15)", border: "none",
              color: "#fff", fontSize: 22, width: 36, height: 36,
              borderRadius: "50%", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
        </div>
      )}
    </>
  );
}