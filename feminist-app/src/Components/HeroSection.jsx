import React from "react";
import "../Styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className='landing-hero'>

      {/* Small organization badge */}
      <div className="hero-badge">
        Feminist for Peace, Rights and Justice Centre
      </div>

      {/* MISSION BAR */}
      <div className="mission-bar">
        <p>
          <strong>Dignified, Safe, Just, and Empowered Communities.</strong>
        </p>
      </div>

    </section>
  );
};

export default HeroSection;