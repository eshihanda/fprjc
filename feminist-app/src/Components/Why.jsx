import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/Why.css";

const Why = () => {
  return (
    <section className="why-women-section">
      <motion.small
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        WHY WOMEN?
      </motion.small>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        We are Striving to Achieve Gender Equality, which is a Fundamental
        Human Right
      </motion.h2>

      <motion.p
        className="section-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        For a long time, women in our communities have faced discrimination and
        marginalization from all forms of life. Women face persistent barriers
        to education, technology, and economic empowerment, which hinder their
        ability to reach their full potential. By investing in the education and
        digital empowerment of women and girls, we aim to break cycles of
        inequality, build confidence, and create pathways to independence and
        leadership.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <Link to="/about" className="btn-learn-more btn-golden">
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default Why;
