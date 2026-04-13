import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Pillar1.css"; 
import Footer from "../Components/Footer";


import mentorship from "../assets/mentorship.png";
import movement from "../assets/movement.jpg"; 
import peace from "../assets/leadership.png";
import civic from "../assets/eco.png"; 
import education from "../assets/education1.png";
import tech from "../assets/icthub.png";

const Pillar2 = () => {
  return (
    <>
    <section className="pillar-section">
      <div className="pillar-header">
        <h2>Women’s Leadership and Governance</h2>
        <p>
          We strengthen feminist leadership, amplify women’s voices, and build
          movements that drive social change, civic participation, and inclusive
          governance.
        </p>
      </div>

      <div className="pillar-grid">

        {/* FEMINIST MENTORSHIP */}
        <Link to="/programs/mentorship" className="pillar-card">
          <img src={mentorship} alt="Feminist Mentorship" />
          <div className="pillar-overlay">
            <h3>Feminist Mentorship</h3>
          </div>
        </Link>

        {/* MOVEMENT BUILDING */}
        <Link to="/programs/movement" className="pillar-card">
          <img src={movement} alt="Movement Building" />
          <div className="pillar-overlay">
            <h3>Movement Building</h3>
          </div>
        </Link>

        {/* WOMEN PEACE & SECURITY */}
        <Link to="/programs/womenpeace" className="pillar-card">
          <img src={peace} alt="Women Peace and Security" />
          <div className="pillar-overlay">
            <h3>Women, Peace & Security</h3>
          </div>
        </Link>

        {/* CIVIC EDUCATION */}
        <Link to="/programs/civic-education" className="pillar-card">
          <img src={civic} alt="Civic Education" />
          <div className="pillar-overlay">
            <h3>Women’s Civic Education</h3>
          </div>
        </Link>

        {/* EDUCATION */}
        <Link to="/programs/civic-education" className="pillar-card">
          <img src={education} alt="Girls Education" />
          <div className="pillar-overlay">
            <h3>Girls and Women’s Education</h3>
          </div>
        </Link>

        {/* WOMEN & TECH */}
        <Link to="/programs/womentech" className="pillar-card">
          <img src={tech} alt="Women and Technology" />
          <div className="pillar-overlay">
            <h3>Women and Technology</h3>
          </div>
        </Link>

      </div>
    </section>
     <Footer />
    </>
  );
};

export default Pillar2;