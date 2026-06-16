import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import ExperienceSection from "@/components/ExperienceSection";
import ContactLinks from "@/components/ContactLinks";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="page">
      <ProfileCard />

      <div
        className="layout"
        style={{ marginTop: 16, minWidth: 0, maxWidth: "100%", overflow: "hidden" }}
      >
        <div
          className="col-main stack"
          style={{ minWidth: 0, maxWidth: "100%", overflow: "hidden" }}
        >
          <AboutSection />
          <TechStack />
          <Projects />
          <Certifications />
          <ContactLinks />
          <Gallery />
        </div>

        <div className="col-side" style={{ minWidth: 0, maxWidth: "100%" }}>
          <ExperienceSection />
        </div>
      </div>

      <p style={{
        textAlign: "center", marginTop: 32,
        fontSize: 11, color: "var(--text-faint)",
      }}>
        © 2025 Jerico P. Jacob · All rights reserved.
      </p>
    </div>
  );
}