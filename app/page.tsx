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

      <div className="layout" style={{ marginTop: 16 }}>
        {/* Main column */}
        <div className="col-main stack">
          <AboutSection />
          <TechStack />
          <Projects />
          <Certifications />
          <ContactLinks />
          <Gallery />
        </div>

        {/* Sidebar */}
        <div className="col-side">
          <ExperienceSection />
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: 32, fontSize: 11, color: "var(--text-faint)" }}>
        © 2025 Jerico P. Jacob · All rights reserved.
      </p>
    </div>
  );
}