import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className='landing-hero'>
      /*
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Advancing Women's Rights.
          </h1>

          <p>
            We work with women and girls in informal settlements to end
            gender-based violence, expand access to health and education,
            and build feminist leadership for lasting change.
          </p>

        </motion.div>
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