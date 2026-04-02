import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Pillar1.css";
import Footer from '../Components/Footer';

import gbv from "../assets/gbv.jpg";
import srhr from "../assets/pillar3.png";
import wellbeing from "../assets/mental.png";

const Pillar1 = () => {
  return (
    <>
    <section className="pillar-section">
      <div className="pillar-header">
        <h2>Women’s Health Rights and Wellbeing</h2>
        <p>
          We advance women’s health and wellbeing through targeted interventions
          addressing gender-based violence, reproductive health rights, and
          mental health support.
        </p>
      </div>

      <div className="pillar-grid">
        {/* GBV */}
        <Link to="/programs/pillar-1/gbv" className="pillar-card">
          <img src={gbv} alt="Gender-Based Violence" />
          <div className="pillar-overlay">
            <h3>Ending Gender-Based Violence</h3>
          </div>
        </Link>

        {/* SRHR */}
        <Link to="/programs/pillar-1/srhr" className="pillar-card">
          <img src={srhr} alt="SRHR" />
          <div className="pillar-overlay">
            <h3>Sexual and Reproductive Health Rights</h3>
          </div>
        </Link>

        {/* WELLBEING */}
        <Link to="/programs/pillar-1/wellbeing" className="pillar-card">
          <img src={wellbeing} alt="Mental Health & Wellbeing" />
          <div className="pillar-overlay">
            <h3>Psychosocial  and Mental Wellbeing</h3>
          </div>
        </Link>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Pillar1;