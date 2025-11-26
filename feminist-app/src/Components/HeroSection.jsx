import React from "react";
import { motion } from "framer-motion";
import "../Styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1>FPRJC Transforming Lives.</h1>
          <p>
            We strive to inspire and develop a generation of grassroot women to have a voice
            and ignite feminist leadership action for geneder transformative change.
          </p>
          <motion.button
            className="btn btn-golden btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <div className="mission-bar">
        <p>
          <strong>Dignified, Safe, Just, and Empowered Communities.</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
