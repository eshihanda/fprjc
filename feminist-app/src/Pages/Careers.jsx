import React from 'react'
import '../Styles/Careers.css'
import career from '../assets/career.png'
import Footer from '../Components/Footer'

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
    <section className='d-flex align-items-center justify-content-center about-hero-section'
        style={{backgroundImage:`url(${career})`, height:'60vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <h1 className='display-3 fw-bold text-white'> Career Opportunities</h1>
            <p className="lead text-light mt-2">Join the Movement for Justice and Dignity</p>
        </div>
    </section>
    <section className='careers-intro'>
      <div className='container'>
        {/* <p>We are always looking for passionate, committed individuals to join our
          mission of advancing justice, dignity, and safety for girls and women in
          Kibra.
      </p> */}
      <p>            
        Feminist for Peace Rights and Justice Center welcomes passionate,
        values-driven individuals who believe in gender equality, justice,
        and dignity. We occasionally open opportunities for employment,
        consultancy, and volunteer roles aligned with our mission.

      </p>
      </div>
  </section>
  {/* CURRENT OPENINGS */}
<section className="vacancies-section">
  <div className="container">

    <h3 className="vacancies-title text-center mb-5">
      Current Openings
    </h3>

    <div
      className="vacancy-card mx-auto"
      style={{
        maxWidth: "850px",
        padding: "2.5rem",
        borderRadius: "16px",
        background: "#fff",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "#f3e8ff",
          color: "#5e1385",
          padding: "6px 14px",
          borderRadius: "20px",
          fontWeight: "600",
          marginBottom: "1rem",
        }}
      >
       Call for Applications
      </span>

      <h4
        className="fw-bold"
        style={{ color: "#5e1385" }}
      >
        Facilitator- Institutionalizing Civic Forums within Community-Based Organizations (CBOs) in Kibera

      </h4>

      <p
        className="text-muted mt-3"
        style={{ lineHeight: "1.8" }}
      >
        The Feminist for Peace, Rights and Justice Centre (FPRJC) is implementing the Feminist Action for Community-Led Governance Project. In that regard, we are looking
        for a facilitator who will design and facilitate a highly participatory two-day workshop on Institutionalizing Civic
        Forums within Community-Based Organizations (CBOs) in Kibera covering .
      </p>

      <div className="row mt-4 mb-4">

        <div className="col-md-6">
          <strong> Location</strong>
          <p>Nairobi, Kenya</p>
        </div>

        <div className="col-md-6">
          <strong> Application Deadline</strong>
          <p>13 August 2026</p>
        </div>

      </div>

      <div>

        <a
          href="/Call.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            style={{
              background: "#5e1385",
              border: "none",
            }}
          >
            View Call
          </Button>
        </a>

      </div>
    </div>

  </div>
</section>
 
 {/* NO VACANCIES <section className="vacancies-section">
  <div className="container text-center">
    <h3 className="vacancies-title">Current Openings</h3>

    <div
      className="vacancy-card mx-auto"
      style={{
      maxWidth: "700px",
      padding: "2.5rem",
      borderRadius: "15px",
      background: "#fff",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h4 className="fw-bold" style={{ color: "#6f42c1" }}>
        No Current Vacancies Available
      </h4>

      <p className="text-muted mt-3" style={{ fontSize: "1.05rem" }}>
        Thank you for your interest in joining Feminist for Peace Rights
        and Justice Center. At the moment, we do not have any open job,
        consultancy, or board opportunities.
      </p>

      <p className="text-muted" style={{ fontSize: "1.05rem" }}>
        Please check back soon, or follow our updates for future openings.
      </p>

      <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <Button as={Link} to="/contact" className="btn btn-golden fw-bold">
          Contact Us
        </Button>

        <Button
          as={Link}
          to="/blog"
          variant="outline-secondary"
          className="fw-bold"
        >
          Visit Our Blog
        </Button>
      </div>
    </div>
  </div>
</section>  */}
<Footer />
</>
  )
}
export default Careers;

